This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

This is the UI for the massage booking platform. To start the development server:

```bash
cd frontend
npm install
npm run dev
# alternatives: yarn dev, pnpm dev, bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The frontend communicates with the Laravel backend via environment variable `NEXT_PUBLIC_API_URL`, e.g. `http://localhost:8000/api`.

Available pages:

- `/` – Home landing
- `/services` – List all services
- `/services/[id]` – Service detail with booking link
- `/therapists` – List therapists
- `/therapists/[id]` – Therapist profile
- `/book/[serviceId]` – Booking form (select therapist/time)
- `/booking/confirmation` – Post-booking acknowledgement
- `/auth/login` and `/auth/register` – auth stubs
- `/privacy` and `/terms` – legal placeholders

A focus style and skip‑link exist for accessibility, and semantic HTML and ARIA roles are used throughout.

To prepare for payments, install Stripe's JS client:

```bash
npm install @stripe/stripe-js
```

You can create checkout sessions via API routes or call the backend directly. Make sure to set `NEXT_PUBLIC_STRIPE_KEY` in `.env.local`.


You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
