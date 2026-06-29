import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { CartProvider } from "@/components/CartContext";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteDescription =
  "Small-batch herbal teas, hand-blended from organically grown botanicals in the spirit of old-world apothecary tradition.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sacra Terra Teas",
  description: siteDescription,
  openGraph: {
    title: "Sacra Terra Teas",
    description: siteDescription,
    type: "website",
    images: [
      {
        url: "/SocialShare.png",
        width: 1731,
        height: 909,
        alt: "Sacra Terra Teas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacra Terra Teas",
    description: siteDescription,
    images: ["/SocialShare.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
