import React from 'react';

interface Service {
  id: number;
  name: string;
  description?: string;
  duration: number;
  price: number;
}

interface Props {
  params: {
    id: string;
  };
}

async function getService(id: string): Promise<Service> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/${id}`);
  if (!res.ok) throw new Error('Failed to load service');
  return res.json();
}

export default async function ServicePage({ params }: Props) {
  const service = await getService(params.id);

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">{service.name}</h1>
      {service.description && <p className="mb-2">{service.description}</p>}
      <p>Duration: {service.duration} minutes</p>
      <p>Price: £{service.price.toFixed(2)}</p>
      <a
        href={`/book/${service.id}`}
        className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Book this service
      </a>
    </main>
  );
}
