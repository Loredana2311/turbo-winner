import React from 'react';
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives/fetch';

interface Therapist {
  id: number;
  name: string;
  email: string;
  phone?: string;
  bio?: string;
}

interface Props {
  params: {
    id: string;
  };
}

async function getTherapist(id: string): Promise<Therapist> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/therapists/${id}`);
  if (!res.ok) throw new Error('Failed to load therapist');
  return res.json();
}

export default async function TherapistPage({ params }: Props) {
  const therapist = await getTherapist(params.id);
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{therapist.name}</h1>
      <p>Email: <a href={`mailto:${therapist.email}`} className="text-blue-600 underline">{therapist.email}</a></p>
      {therapist.phone && <p>Phone: {therapist.phone}</p>}
      {therapist.bio && <p className="mt-4">{therapist.bio}</p>}
    </main>
  );
}
