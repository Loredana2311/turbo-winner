export async function fetchServices() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services`);
  if (!res.ok) throw new Error('Failed to fetch services');
  return res.json();
}

export async function fetchTherapists() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/therapists`);
  if (!res.ok) throw new Error('Failed to fetch therapists');
  return res.json();
}

export async function bookAppointment(data: {
  service_id: number;
  therapist_id: number;
  starts_at: string;
  user_id?: number;
}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appointments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => null);
    throw new Error(err?.message || 'Failed to book appointment');
  }
  return res.json();
}
