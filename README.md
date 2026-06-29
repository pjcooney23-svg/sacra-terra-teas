# Sacra Terra Teas

A headless Shopify storefront for Sacra Terra Teas, built with Next.js 14
(App Router), the Shopify Storefront API (GraphQL), and Tailwind CSS.

## Stack

- Next.js 14 App Router, TypeScript
- Tailwind CSS (Playfair Display serif headings + Inter body)
- Shopify Storefront API (GraphQL) for products, collections, and cart
- Cart persisted via an httpOnly cookie, checkout redirects to the
  Shopify-hosted checkout URL

## Getting Started

1. Copy the example env file and fill in your Shopify credentials:

   ```bash
   cp .env.example .env.local
   ```

   ```
   SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   SHOPIFY_STOREFRONT_TOKEN=your-storefront-api-token
   ```

   The token must be a **Storefront API** access token (Settings ->
   Apps and sales channels -> Develop apps -> create an app -> Storefront
   API -> generate token), not the Admin API token.

2. Install dependencies and run the dev server:

   ```bash
   npm install
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app` — routes: home, `/products`, `/products/[handle]`, `/about`,
  and `/api/cart/*` route handlers for cart mutations
- `src/components` — UI components, including the cart context/drawer and
  the variant-aware add-to-cart form
- `src/lib` — Shopify GraphQL client, queries/fragments, and data-access
  helpers
- `src/types` — shared Shopify data types

## Deploying to Vercel

Push this repository to GitHub and import it into Vercel, then set the
`SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_TOKEN` environment variables
in the Vercel project settings (Production and Preview).
