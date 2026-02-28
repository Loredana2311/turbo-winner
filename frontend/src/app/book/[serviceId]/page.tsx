"use client";
import React, { useState, useEffect } from 'react';
import { fetchTherapists, bookAppointment } from '../../../lib/api';
import { useRouter } from 'next/navigation';

interface Therapist {
  id: number;
  name: string;
}

interface Props {
  params: {
    serviceId: string;
  };
}

export default function BookServicePage({ params }: Props) {
  const serviceId = parseInt(params.serviceId, 10);
  const [therapists, setTherapists] = useState<Therapist[]>([]);
  const [therapistId, setTherapistId] = useState<number | ''>('');
  const [startsAt, setStartsAt] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchTherapists()
      .then(setTherapists)
      .catch((e) => setError(e.message));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const appointment = await bookAppointment({
        service_id: serviceId,
        therapist_id: therapistId as number,
        starts_at: startsAt,
      });

      // request checkout session from backend
      const checkoutRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ appointment_id: appointment.id }),
      });
      if (!checkoutRes.ok) throw new Error('Failed to start checkout');
      const { sessionId } = await checkoutRes.json();
      router.push(`/checkout?sessionId=${sessionId}`);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Book Service #{serviceId}</h1>
      {error && <p role="alert" className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="booking-form">
        <div>
          <label htmlFor="therapist" className="block font-medium">
            Select a therapist
          </label>
          <select
            id="therapist"
            value={therapistId}
            onChange={(e) => setTherapistId(Number(e.target.value))}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          >
            <option value="">-- choose --</option>
            {therapists.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="starts_at" className="block font-medium">
            Appointment time
          </label>
          <input
            type="datetime-local"
            id="starts_at"
            value={startsAt}
            onChange={(e) => setStartsAt(e.target.value)}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Book now
        </button>
      </form>
    </main>
  );
}
