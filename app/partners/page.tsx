import type { Metadata } from "next";
import { Partners } from "../components/Partners";

export const metadata: Metadata = {
  title: "Partner with me",
  description: "For tax advisors, lawyers, consultants and agencies whose clients need more customers.",
};

export default function PartnersPage() {
  return <Partners />;
}
