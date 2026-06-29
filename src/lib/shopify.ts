import { shopifyFetch } from "./shopify-client";
import {
  addToCartMutation,
  createCartMutation,
  getCartQuery,
  getCollectionByHandleQuery,
  getCollectionsQuery,
  getProductByHandleQuery,
  getProductsQuery,
  removeFromCartMutation,
  updateCartLineMutation,
} from "./queries";
import type { Cart, Collection, Image, Product } from "@/types/shopify";

type Edge<T> = { node: T };
type Connection<T> = { edges: Edge<T>[] };

type ShopifyProductNode = Omit<Product, "images" | "variants"> & {
  images: Connection<Image>;
  variants: Connection<Product["variants"][number]>;
};

function normalizeProduct(node: ShopifyProductNode): Product {
  return {
    ...node,
    images: node.images.edges.map((e) => e.node),
    variants: node.variants.edges.map((e) => e.node),
  };
}

export async function getProducts(query?: string): Promise<Product[]> {
  const data = await shopifyFetch<{
    products: Connection<ShopifyProductNode>;
  }>({
    query: getProductsQuery,
    variables: { query },
    tags: ["products"],
  });

  return data.products.edges.map((e) => normalizeProduct(e.node));
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const data = await shopifyFetch<{ product: ShopifyProductNode | null }>({
    query: getProductByHandleQuery,
    variables: { handle },
    tags: ["products"],
  });

  return data.product ? normalizeProduct(data.product) : null;
}

export async function getCollections(): Promise<Collection[]> {
  const data = await shopifyFetch<{
    collections: Connection<Collection>;
  }>({
    query: getCollectionsQuery,
    tags: ["collections"],
  });

  return data.collections.edges.map((e) => e.node);
}

export async function getCollectionByHandle(
  handle: string
): Promise<{ collection: Collection; products: Product[] } | null> {
  const data = await shopifyFetch<{
    collection:
      | (Collection & { products: Connection<ShopifyProductNode> })
      | null;
  }>({
    query: getCollectionByHandleQuery,
    variables: { handle },
    tags: ["collections", "products"],
  });

  if (!data.collection) return null;

  const { products, ...collection } = data.collection;
  return {
    collection,
    products: products.edges.map((e) => normalizeProduct(e.node)),
  };
}

type ShopifyCartNode = Omit<Cart, "lines"> & {
  lines: Connection<Cart["lines"][number]>;
};

function normalizeCart(node: ShopifyCartNode): Cart {
  return {
    ...node,
    lines: node.lines.edges.map((e) => e.node),
  };
}

export async function createCart(): Promise<Cart> {
  const data = await shopifyFetch<{
    cartCreate: { cart: ShopifyCartNode; userErrors: { message: string }[] };
  }>({
    query: createCartMutation,
    variables: { lines: [] },
    cache: "no-store",
  });

  return normalizeCart(data.cartCreate.cart);
}

export async function getCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: ShopifyCartNode | null }>({
    query: getCartQuery,
    variables: { cartId },
    cache: "no-store",
  });

  return data.cart ? normalizeCart(data.cart) : null;
}

export async function addToCart(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: ShopifyCartNode; userErrors: { message: string }[] };
  }>({
    query: addToCartMutation,
    variables: { cartId, lines },
    cache: "no-store",
  });

  if (data.cartLinesAdd.userErrors.length > 0) {
    throw new Error(data.cartLinesAdd.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesAdd.cart);
}

export async function updateCartLine(
  cartId: string,
  lines: { id: string; quantity: number }[]
): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesUpdate: { cart: ShopifyCartNode; userErrors: { message: string }[] };
  }>({
    query: updateCartLineMutation,
    variables: { cartId, lines },
    cache: "no-store",
  });

  if (data.cartLinesUpdate.userErrors.length > 0) {
    throw new Error(data.cartLinesUpdate.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesUpdate.cart);
}

export async function removeFromCart(cartId: string, lineIds: string[]): Promise<Cart> {
  const data = await shopifyFetch<{
    cartLinesRemove: { cart: ShopifyCartNode; userErrors: { message: string }[] };
  }>({
    query: removeFromCartMutation,
    variables: { cartId, lineIds },
    cache: "no-store",
  });

  if (data.cartLinesRemove.userErrors.length > 0) {
    throw new Error(data.cartLinesRemove.userErrors.map((e) => e.message).join(", "));
  }

  return normalizeCart(data.cartLinesRemove.cart);
}
