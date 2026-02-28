import React from 'react';
import { fetchServices } from '../../lib/api';

"use client";
import React, { useState, useEffect } from 'react';
import { fetchServices } from '../../lib/api';

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchServices().then(setServices).catch(console.error);
  }, []);

  const filtered = services.filter((s: any) =>
    s.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Services</h1>
      <div className="mb-4">
        <label htmlFor="search" className="block font-medium">
          Search services
        </label>
        <input
          id="search"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
          placeholder="e.g. Swedish massage"
        />
      </div>
      <ul className="space-y-2">
        {filtered.map((s: any) => (
          <li key={s.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">{s.name}</h2>
            <p>{s.description}</p>
            <p>Duration: {s.duration} minutes</p>
            <p>Price: £{s.price}</p>
            <a
              href={`/book/${s.id}`}
              className="mt-2 inline-block rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Book this service
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
