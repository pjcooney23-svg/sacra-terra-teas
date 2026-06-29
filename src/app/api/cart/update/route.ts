import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { updateCartLine } from "@/lib/shopify";

const CART_COOKIE = "cartId";

export async function POST(request: Request) {
  const { lineId, quantity } = await request.json();

  if (!lineId || typeof quantity !== "number") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const cartId = cookies().get(CART_COOKIE)?.value;

  if (!cartId) {
    return NextResponse.json({ error: "No cart found" }, { status: 400 });
  }

  const cart = await updateCartLine(cartId, [{ id: lineId, quantity }]);

  return NextResponse.json({ cart });
}
