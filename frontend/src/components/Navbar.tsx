import React from 'react';

export default function Navbar() {
  return (
    <nav className="container mx-auto flex space-x-4" aria-label="Main navigation">
      <a href="/" className="font-semibold">
        Home
      </a>
      <a href="/services" className="font-semibold">
        Services
      </a>
      <a href="/therapists" className="font-semibold">
        Therapists
      </a>
      <a href="/auth/login" className="font-semibold">
        Account
      </a>
    </nav>
  );
}
