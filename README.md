# Blue Lagoon

Premium ocean-themed travel package website with a lightweight admin UI for packages, hotels/stays, and guides.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Local Admin Login

The demo admin login works out of the box with these local defaults:

- email: `admin@bluelagoon.com`
- password: `password`

After login, the app routes to `/admin`.

## Change Admin Credentials

The login flow supports environment variable overrides.

Create a `.env.local` file and set:

```env
ADMIN_EMAIL=admin@bluelagoon.com
ADMIN_PASSWORD=password
SESSION_SECRET=replace-with-your-own-secret
```

Notes:

- If `ADMIN_EMAIL` and `ADMIN_PASSWORD` are not set, the app falls back to the local demo credential above.
- If `SESSION_SECRET` is not set, the app uses a local demo session secret so the cookie-based admin flow still works for development.
- For any non-demo environment, set your own `SESSION_SECRET`.

## How the Theme Works

Blue Lagoon uses:

- a beach/ocean image as the app-wide background
- stronger glassmorphism panels and mist sections for readability
- reusable glassmorphism utilities in `src/app/globals.css`
- shared UI components in `src/components/ui`
- systemwide CSS animation utilities with reduced-motion support

Useful global utilities include:

- `.bg-beach-app`
- `.glass-panel`
- `.glass-panel-strong`
- `.glass-panel-dark`
- `.glass-nav`
- `.text-on-glass`
- `.text-on-dark-glass`
- `.ocean-button`
- `.sand-button`
- `.sun-badge`

## How to Use the App

- Visitors browse packages at `/` and `/packages`
- Visitors open package detail pages at `/packages/details/[id]`
- Visitors can review local guides at `/vendor`
- Visitors can read the product usage guide at `/guide`
- Admins sign in at `/login`
- Admins can manage packages, hotels/stays, and guides

## Where to Edit Content

- Packages data: `src/lib/data/packages.ts`
- Hotels/stays data: `src/lib/data/hotels.ts`
- Guides data: `src/lib/data/guides.ts`
- Auth defaults: `src/app/api/login/route.ts` and `src/lib/auth.ts`

## Current Limitations

- No database yet
- Admin create/edit/delete is demo/local-state only
- Booking and inquiry actions are not connected to a backend
- Image upload is not implemented

## Future Improvements

- Database persistence for packages, stays, and guides
- Image upload workflow
- Production-grade authentication
- Booking and payment flow

## Quality Checks

Run:

```bash
npm run lint
npm run build
```
