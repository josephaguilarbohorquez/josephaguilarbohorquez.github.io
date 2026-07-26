import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://josephaguilarbohorquez.com"),
  title: "Joseph Aguilar-Bohorquez | Applied Economist",
  description:
    "Joseph Aguilar-Bohorquez is a Ph.D. candidate in Applied Economics at the University of Minnesota and a 2026–27 job market candidate.",
  alternates: { canonical: "/" },
  authors: [{ name: "Joseph Aguilar-Bohorquez" }],
  creator: "Joseph Aguilar-Bohorquez",
  keywords: [
    "Joseph Aguilar-Bohorquez",
    "applied economics",
    "rural development",
    "regional economics",
    "extension economics",
    "public policy",
    "labor economics",
    "economics of education",
    "University of Minnesota",
  ],
  openGraph: {
    type: "website",
    url: "/",
    title: "Joseph Aguilar-Bohorquez | Applied Economist",
    description:
      "Ph.D. candidate in Applied Economics at the University of Minnesota and 2026–27 job market candidate.",
    siteName: "Joseph Aguilar-Bohorquez",
    images: [
      {
        url: "/images/joseph-aguilar-bohorquez-og.jpg",
        width: 1200,
        height: 630,
        alt: "Joseph Aguilar-Bohorquez",
      },
    ],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
