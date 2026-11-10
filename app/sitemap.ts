import type { MetadataRoute } from "next";
import { lessons } from "@/lib/course";
import { site } from "@/lib/site";

const PAGES = [
  "",
  "/training",
  ...lessons.map((l) => `/training/${l.slug}`),
  "/roadmap",
  "/leak-check",
  "/engine",
  "/first-clients",
  "/offers",
  "/book",
  "/workshop",
  "/partners",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "" ? 1 : 0.7,
  }));
}
