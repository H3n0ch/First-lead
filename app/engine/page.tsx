import type { Metadata } from "next";
import Link from "next/link";
import { Engine } from "../components/Engine";
import { PageHero, btnPrimary } from "../components/ui";

export const metadata: Metadata = {
  title: "The Engine",
  description: "The lead engine in nine parts: keywords are the fuel, your website is the engine, a customer comes out the other end.",
};

export default function EnginePage() {
  return (
    <>
      <PageHero
        eyebrow="Free training"
        title="The Engine"
        lead="Keywords are the fuel, your website is the engine, a customer comes out the other end. Nine parts, built in this order."
      />
      <Engine />
      <div className="px-5 pb-20 text-center sm:px-8">
        <Link href="/leak-check" className={btnPrimary}>
          Find your weakest part
        </Link>
      </div>
    </>
  );
}
