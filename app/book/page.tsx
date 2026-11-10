import type { Metadata } from "next";
import { BookTeaser } from "../components/BookTeaser";

export const metadata: Metadata = {
  title: "First Lead, the book",
  description: "First Lead. Stop Waiting. Start Moving. Get Your First Customers. Get it first.",
};

export default function BookPage() {
  return <BookTeaser />;
}
