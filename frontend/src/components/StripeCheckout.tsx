"use client";

import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

interface Props {
  sessionId: string;
}

export default function StripeCheckout({ sessionId }: Props) {
  useEffect(() => {
    if (!sessionId) return;
    (async () => {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || '');
      if (!stripe) return;
      stripe.redirectToCheckout({ sessionId });
    })();
  }, [sessionId]);

  return <p>Redirecting to payment…</p>;
}
