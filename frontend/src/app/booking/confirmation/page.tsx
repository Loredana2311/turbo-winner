import React from 'react';

export default function ConfirmationPage() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
      <p>Your appointment has been booked successfully. You will receive an email confirmation shortly.</p>
      <a href="/" className="mt-4 inline-block text-blue-600 underline">
        Return to home
      </a>
    </main>
  );
}
