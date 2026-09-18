import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CashfreeService } from '../../services/cashfree.service';

@Component({
  selector: 'app-cashfree-gateway',
  imports: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cashfree-gateway.html',
  styleUrl: './cashfree-gateway.scss',
})
export class CashfreeGateway {
  private readonly cashfreeService = inject(CashfreeService);
  protected readonly amount = 2499;
  protected readonly isProcessing = signal(false);
  protected readonly errorMessage = signal('');
  protected readonly paymentStatus = signal('');
  protected readonly orderId = signal('');

  protected async payWithCashfree(): Promise<void> {
    if (this.isProcessing()) {
      return;
    }

    this.isProcessing.set(true);
    this.errorMessage.set('');
    this.paymentStatus.set('');

    try {
      const orderId = await this.cashfreeService.openCheckout(this.amount);
      this.orderId.set(orderId);

      const payment = await this.cashfreeService.getPaymentStatus(orderId);
      console.log('Payment result in CashfreeGateway:', payment);
      await this.cashfreeService.savePaymentDetails(orderId, payment);
      this.cashfreeService.savePaymentHistory(orderId, this.amount, payment);
      this.paymentStatus.set(payment.payment_status);

      if (payment.payment_status !== 'SUCCESS') {
        this.errorMessage.set(
          payment.message || 'Payment was not successful.'
        );
      }
    } catch (error) {
      this.errorMessage.set(
        error instanceof Error ? error.message : 'Unable to start the payment.',
      );
    } finally {
      this.isProcessing.set(false);
    }
  }

}
