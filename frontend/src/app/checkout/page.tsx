"use client";
import { useSearchParams } from 'next/navigation';
import StripeCheckout from '../../components/StripeCheckout';

export default function CheckoutPage() {
  const params = useSearchParams();
  const sessionId = params.get('sessionId') || '';

  return (
    <main className="container mx-auto p-8">
      {sessionId ? (
        <StripeCheckout sessionId={sessionId} />
      ) : (
        <p>No checkout session specified.</p>
      )}
    </main>
  );
}
