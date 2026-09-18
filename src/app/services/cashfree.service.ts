import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { LoginUser } from './auth';

interface CashfreeClient {
  checkout(options: {
    paymentSessionId: string;
    redirectTarget?: '_self' | '_blank';
  }): Promise<unknown>;
}

interface CreateOrderResponse {
  status: boolean;
  message: string;
  payment_session_id: string;
  order_id: string;
}

export interface PaymentStatusResponse {
  status: boolean;
  message: string;
  order_id: string;
  payment_status: string;
  payments: Payment[];
}

export interface PaymentHistoryEntry {
  orderId: string;
  amount: number;
  status: string;
  provider: string;
  createdAt: string;
  paymentId?: string;
  message?: string | null;
  paymentData?: Record<string, unknown>;
  orderAmount?: number;
  currency?: string;
  paymentMethod?: string;
  gateway?: string;
  paymentTime?: string;
}

interface PaymentDetailsRequest {
  order_id: string;
  user_id: number | string;
  public_key: string;
  token: string;
}

interface Payment {
  cf_payment_id: string;
  payment_status: string;
  payment_amount: number;
  payment_message: string | null;
}

interface CreateOrderRequest {
  amount: number;
  user_id: number | string;
  public_key: string;
  token: string;
  customer_id: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  return_url: string;
}

declare const Cashfree:
  | ((options: {
      mode: 'sandbox' | 'production';
    }) => CashfreeClient)
  | undefined;

@Injectable({
  providedIn: 'root',
})
export class CashfreeService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl =
    'https://hastening.org/api/create-order.php';

  private readonly paymentStatusApiUrl =
    'https://hastening.org/api/payment-status.php';

  private readonly paymentDetailsApiUrl =
    'https://hastening.org/api/paymentdetails.php';

  private readonly cashfree: CashfreeClient | undefined =
    typeof Cashfree === 'function'
      ? Cashfree({
          mode: 'sandbox',
        })
      : undefined;

  private getStoredUser(): LoginUser {
    const storedUser =
      localStorage.getItem('user_profile_info') ??
      localStorage.getItem('login_user');

    if (!storedUser) {
      throw new Error('Please sign in before creating an order.');
    }

    try {
      const parsed: unknown = JSON.parse(storedUser);
      const response = this.asRecord(parsed);
      const users = Array.isArray(response?.['users'])
        ? response['users']
        : [parsed];
      const user = this.asRecord(users[0]);

      if (!user) {
        throw new Error('Saved login data is invalid. Please sign in again.');
      }

      return {
        id: this.asStringOrNumber(user['id']),
        user_id: this.asStringOrNumber(user['user_id']),
        name: this.asString(user['name']),
        email: this.asString(user['email']),
        public_key: this.asString(user['public_key'] ?? user['publicKey']),
        token: this.asString(user['token']),
      };
    } catch (error) {
      if (error instanceof Error && error.message.startsWith('Saved login data')) {
        throw error;
      }

      throw new Error('Saved login data is invalid. Please sign in again.');
    }
  }

  private asRecord(value: unknown): Record<string, unknown> | undefined {
    return typeof value === 'object' && value !== null
      ? value as Record<string, unknown>
      : undefined;
  }

  private asString(value: unknown): string {
    return typeof value === 'string' ? value : '';
  }

  private asStringOrNumber(value: unknown): string | number | undefined {
    return typeof value === 'string' || typeof value === 'number'
      ? value
      : undefined;
  }

  createOrder(
    amount: number
  ): Promise<CreateOrderResponse> {
    const user = this.getStoredUser();

    const userId = user.user_id ?? user.id;

    if (!userId || !user.public_key || !user.token || !user.email || !user.name) {
      throw new Error('Saved login data is incomplete. Please sign in again.');
    }

    const request: CreateOrderRequest = {

      amount: amount,

      user_id: userId,

      public_key: user.public_key,

      token: user.token,

      customer_id: `customer_${userId}`,

      customer_name: user.name,

      customer_email: user.email,

      customer_phone: '9999999999',

      return_url: `${globalThis.location.origin}/status?order_id={order_id}`,

    };

    console.log('Create order payload:', {
      ...request,
      token: request.token,
    });

    return firstValueFrom(
      this.http.post<CreateOrderResponse>(
        this.apiUrl,
        request,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
    ).then((response) => {
      console.log('Create order response:', response);
      return response;
    });
  }


  async openCheckout(
    amount: number
  ): Promise<string> {

    if (!this.cashfree) {

      throw new Error(
        'Cashfree SDK is unavailable. Check index.html'
      );

    }


    const order =
      await this.createOrder(amount);


    console.log(
      'Cashfree Order:',
      order
    );


    if (
      !order.payment_session_id
    ) {

      throw new Error(
        'Payment session ID was not returned'
      );

    }


    console.log(
      'Order ID:',
      order.order_id
    );

    sessionStorage.setItem('cashfree_order_id', order.order_id);

    console.log(
      'Payment Session:',
      order.payment_session_id
    );


    const checkoutResponse = await this.cashfree.checkout({

      paymentSessionId:
        order.payment_session_id,

      redirectTarget: '_self',

    });

    console.log('Cashfree checkout response:', checkoutResponse);

    return order.order_id;
  }

  getPaymentStatus(orderId: string): Promise<PaymentStatusResponse> {
    const user = this.getStoredUser();

    const userId = user.user_id ?? user.id;
    if (!userId || !user.public_key || !user.token) {
      throw new Error('Saved login data is incomplete.');
    }

    const payload: PaymentDetailsRequest = {
      order_id: orderId,
      user_id: userId,
      public_key: user.public_key,
      token: user.token,
    };

    console.log('Payment status payload:', payload);

    return firstValueFrom(
      this.http.post<PaymentStatusResponse>(
        this.paymentStatusApiUrl,
        payload
      )
    ).then((response) => {
      console.log('Payment status response:', response);
      return response;
    });
  }

  async savePaymentDetails(
    orderId: string,
    response: PaymentStatusResponse
  ): Promise<void> {
    const user = this.getStoredUser();
    const userId = user.user_id ?? user.id;

    if (!userId || !user.public_key || !user.token) {
      throw new Error('Saved login data is incomplete.');
    }

    const payload = {
      order_id: orderId,
      user_id: userId,
      public_key: user.public_key,
      token: user.token,
      payment_status: response.payment_status || 'UNKNOWN',
      payment_data: response,
    };

    console.log('Saving payment details payload:', {
      ...payload,
      token: '[REDACTED]',
    });

    const saved = await firstValueFrom(
      this.http.post<{ status: boolean; message: string }>(
        this.paymentDetailsApiUrl,
        payload
      )
    );

    console.log('Payment details API response:', saved);

    if (!saved.status) {
      throw new Error(saved.message || 'Payment details were not saved.');
    }
  }

  savePaymentHistory(
    orderId: string,
    amount: number,
    response: PaymentStatusResponse
  ): void {
    const payments = response.payments ?? [];
    const latestPayment = payments[0];
    const history: PaymentHistoryEntry[] = JSON.parse(
      localStorage.getItem('payment_history') ?? '[]'
    );

    history.unshift({
      orderId,
      amount,
      status: response.payment_status || latestPayment?.payment_status || 'FAILED',
      provider: 'Cashfree Payments',
      createdAt: new Date().toISOString(),
      paymentId: latestPayment?.cf_payment_id,
      message: latestPayment?.payment_message ?? response.message,
      paymentData: response as unknown as Record<string, unknown>,
    });

    localStorage.setItem(
      'payment_history',
      JSON.stringify(history.slice(0, 20))
    );
  }

}