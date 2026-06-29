import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { addToCart, createCart } from "@/lib/shopify";

const CART_COOKIE = "cartId";

export async function POST(request: Request) {
  const { merchandiseId, quantity } = await request.json();

  if (!merchandiseId || typeof quantity !== "number") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  let cartId = cookies().get(CART_COOKIE)?.value;

  if (!cartId) {
    const newCart = await createCart();
    cartId = newCart.id;
    cookies().set(CART_COOKIE, cartId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
  }

  const cart = await addToCart(cartId, [{ merchandiseId, quantity }]);

  return NextResponse.json({ cart });
}
