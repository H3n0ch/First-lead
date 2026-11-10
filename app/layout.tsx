import type { Metadata } from "next";
import { Caveat, Poppins } from "next/font/google";
import { site } from "@/lib/site";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Handwritten accent font for playful notes (e.g. the hero annotation).
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}: Do you want more customers?`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name}: Do you want more customers?`,
    description: site.description,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en",
  },
  twitter: {
    card: "summary",
    title: `${site.name}: Do you want more customers?`,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
