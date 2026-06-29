import { NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? undefined;

  const products = await getProducts(q).catch(() => []);

  return NextResponse.json({ products: products.slice(0, 6) });
}
