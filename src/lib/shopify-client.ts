const API_VERSION = "2024-10";

function getEndpoint() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  if (!domain) {
    throw new Error("Missing SHOPIFY_STORE_DOMAIN environment variable");
  }
  return `https://${domain}/api/${API_VERSION}/graphql.json`;
}

function getToken() {
  const token = process.env.SHOPIFY_STOREFRONT_TOKEN;
  if (!token) {
    throw new Error("Missing SHOPIFY_STOREFRONT_TOKEN environment variable");
  }
  return token;
}

export async function shopifyFetch<T>({
  query,
  variables,
  cache = "force-cache",
  tags,
}: {
  query: string;
  variables?: Record<string, unknown>;
  cache?: RequestCache;
  tags?: string[];
}): Promise<T> {
  const response = await fetch(getEndpoint(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": getToken(),
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next: tags ? { tags } : undefined,
  });

  const body = await response.json();

  if (body.errors) {
    throw new Error(
      `Shopify Storefront API error: ${body.errors.map((e: { message: string }) => e.message).join(", ")}`
    );
  }

  if (!response.ok) {
    throw new Error(`Shopify Storefront API request failed: ${response.status}`);
  }

  return body.data as T;
}
