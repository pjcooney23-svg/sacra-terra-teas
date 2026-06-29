import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createCart, getCart } from "@/lib/shopify";

const CART_COOKIE = "cartId";

export async function GET() {
  const cartId = cookies().get(CART_COOKIE)?.value;

  if (!cartId) {
    return NextResponse.json({ cart: null });
  }

  const cart = await getCart(cartId);

  if (!cart) {
    cookies().delete(CART_COOKIE);
    return NextResponse.json({ cart: null });
  }

  return NextResponse.json({ cart });
}

export async function POST() {
  const cart = await createCart();
  cookies().set(CART_COOKIE, cart.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return NextResponse.json({ cart });
}
