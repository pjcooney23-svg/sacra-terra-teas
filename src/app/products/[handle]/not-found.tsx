import Link from "next/link";

export default function ProductNotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="section-heading">Tea Not Found</h1>
      <p className="mt-4 text-forest-600">
        We couldn&apos;t find the tea you were looking for. It may have sold
        out or been moved.
      </p>
      <Link href="/products" className="btn-primary mt-8 inline-flex">
        Back to Shop
      </Link>
    </section>
  );
}
