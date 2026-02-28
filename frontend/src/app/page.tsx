export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <header>
        <h1 className="text-4xl font-bold mb-4">Welcome to UK Massage Booking</h1>
        <p className="text-lg mb-6">
          Book trusted therapists and enjoy relaxing sessions across the United Kingdom.
        </p>
      </header>

      <section className="space-y-4">
        <a
          href="/services"
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          View Services
        </a>
        <a
          href="/therapists"
          className="inline-block rounded bg-green-600 px-6 py-3 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
        >
          Meet Our Therapists
        </a>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">How it works</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Browse services and therapists.</li>
          <li>Select a convenient time slot.</li>
          <li>Complete booking and payment securely.</li>
        </ol>
      </section>
    </main>
  );
}
