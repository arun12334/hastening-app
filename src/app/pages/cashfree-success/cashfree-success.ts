import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CashfreeService } from '../../services/cashfree.service';

@Component({
  selector: 'app-cashfree-success',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cashfree-success.html',
  styleUrl: './cashfree-success.scss',
})
export class CashfreeSuccess implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly cashfreeService = inject(CashfreeService);
  private readonly redirectTimer = globalThis.setTimeout(() => {
    void this.router.navigateByUrl('/home');
  }, 6000);

  protected readonly orderId =
    this.route.snapshot.queryParamMap.get('order_id') ??
    sessionStorage.getItem('cashfree_order_id') ??
    'Unavailable';

  protected paymentError = '';

  ngOnInit(): void {
    if (this.orderId === 'Unavailable') {
      this.paymentError = 'The payment order ID was not returned.';
      return;
    }

    void this.savePaymentDetails();
  }

  private async savePaymentDetails(): Promise<void> {
    try {
      console.log('Checking payment status for redirected order:', this.orderId);
      const payment = await this.cashfreeService.getPaymentStatus(this.orderId);
      console.log('Payment status received on success page:', payment);
      await this.cashfreeService.savePaymentDetails(this.orderId, payment);
      console.log('Payment details saved after redirect:', this.orderId);
    } catch (error) {
      this.paymentError =
        error instanceof Error
          ? error.message
          : 'Unable to save payment details.';
      console.error('Payment details save failed:', error);
    }
  }

  ngOnDestroy(): void {
    globalThis.clearTimeout(this.redirectTimer);
  }
}
