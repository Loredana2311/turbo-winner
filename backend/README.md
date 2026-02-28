# Laravel Backend

This directory will contain the Laravel application implementing the API and Filament admin.

To initialize the project locally, run:

```bash
composer create-project laravel/laravel .
```

Once created, install Filament:

```bash
composer require filament/filament
php artisan filament:install
```

Configure database and run migrations:

```bash
cp .env.example .env
php artisan key:generate
php artisan migrate
```

### Example models & resources
A few domain models (Service, Therapist, Appointment, User) and corresponding
Filament resources are already sketched in `app/Models` and
`app/Filament/Resources`. You can run `php artisan make:model`/`make:migration`
manually if you prefer.

### API endpoints
The frontend consumes several public endpoints:

- `GET /api/services` – list services
- `GET /api/services/{id}` – service detail
- `GET /api/therapists` – list therapists
- `GET /api/therapists/{id}` – therapist detail
- `POST /api/appointments` – create booking
- `POST /api/checkout/session` – begin Stripe checkout

Responses are JSON and should respect the `openapi.yaml` spec in the repo.

### Stripe Payments
Install Cashier and set UK/GBP configuration:

```bash
composer require laravel/cashier
```

Add your `STRIPE_KEY` and `STRIPE_SECRET` to `.env` before running any billing
code. Use stripe.com/docs/localization for UK details (3-D Secure, VAT, etc.).

Once configured, you can bill customers via subscriptions or one-off charges
using Cashier's fluent API.

Refer to the main project README for integration instructions.
