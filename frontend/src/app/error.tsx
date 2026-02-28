"use client";
import { useEffect } from "react";

export default function RootError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}
