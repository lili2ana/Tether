import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tether — Reciprocal Care Network",
  description:
    "A dignity-first reciprocal care network that helps people ask for small forms of human support before disconnection turns into crisis.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto min-h-screen w-full max-w-md px-4 py-6 sm:max-w-2xl lg:max-w-4xl">{children}</main>
      </body>
    </html>
  );
}
