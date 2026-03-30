import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/design-system/theme";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A1628",
};

export const metadata: Metadata = {
  title: "JISOI — Pabrik Tas Custom Terpercaya | Harga Pabrik, MOQ 10 pcs",
  description:
    "Pabrik tas custom terpercaya dengan produksi sendiri. MOQ 10 pcs, 30.000+ kapasitas/bulan, 5 pilihan bahan. Konsultasi gratis untuk kebutuhan tas custom bisnis Anda.",
  keywords: [
    "tas custom",
    "konveksi tas",
    "pabrik tas",
    "tas murah",
    "tas seminar",
    "goodie bag custom",
    "tas branded",
    "tas MOQ rendah",
  ],
  authors: [{ name: "JISOI", url: "https://jisoi.com" }],
  creator: "JISOI",
  publisher: "PT Redone Berkah Mandiri Utama",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "JISOI — Pabrik Tas Custom Terpercaya",
    description:
      "Produksi sendiri, bukan makelar. MOQ 10 pcs, harga pabrik langsung. 30.000+ kapasitas/bulan.",
    url: "https://jisoi.com",
    siteName: "JISOI",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://jisoi.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JISOI - Pabrik Tas Custom Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JISOI — Pabrik Tas Custom Terpercaya",
    description: "Produksi sendiri, MOQ 10 pcs, harga pabrik langsung",
    images: ["https://jisoi.com/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}