import React from 'react';
import { fetchTherapists } from '../../lib/api';

export default async function TherapistsPage() {
  const therapists = await fetchTherapists();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Our Therapists</h1>
      <ul className="space-y-4">
        {therapists.map((t: any) => (
          <li key={t.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold">
              <a href={`/therapists/${t.id}`} className="text-blue-600 underline">
                {t.name}
              </a>
            </h2>
            <p>Email: <a href={`mailto:${t.email}`} className="text-blue-600 underline">{t.email}</a></p>
            {t.phone && <p>Phone: {t.phone}</p>}
            {t.bio && <p>{t.bio}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
