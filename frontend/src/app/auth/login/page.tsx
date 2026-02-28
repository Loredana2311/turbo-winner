"use client";
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call auth API
    setError('Login not implemented');
  };

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      {error && <p role="alert" className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Log in
        </button>
      </form>
      <p className="mt-4">
        Don't have an account? <a href="/auth/register" className="text-blue-600 underline">Register</a>
      </p>
    </main>
  );
}
