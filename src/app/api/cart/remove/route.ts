import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { removeFromCart } from "@/lib/shopify";

const CART_COOKIE = "cartId";

export async function POST(request: Request) {
  const { lineId } = await request.json();

  if (!lineId) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const cartId = cookies().get(CART_COOKIE)?.value;

  if (!cartId) {
    return NextResponse.json({ error: "No cart found" }, { status: 400 });
  }

  const cart = await removeFromCart(cartId, [lineId]);

  return NextResponse.json({ cart });
}
