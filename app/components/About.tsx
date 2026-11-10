import { site } from "@/lib/site";
import { UpperBodyPhoto } from "./ui";

export function About() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-extrabold uppercase tracking-tight">About the founder</h2>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-[260px_1fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[260px] overflow-hidden border-4 border-navy">
            <UpperBodyPhoto className="left-[-6%] top-[-25%] w-[116%]" />
          </div>
          <div className="space-y-4 leading-relaxed text-ink/85">
            <p>
              {site.owner} is the founder of {site.name}. He builds lead engines: websites that get found by the
              people already searching, give them a reason to reach out, and make sure every inquiry gets an answer
              fast.
            </p>
            <p>
              He never wanted to cold call strangers. So he built a niche website for a 100,000–110,000 € product that made
              the right people come to him instead: pages that answer what buyers search for, a free calculator, a
              short form, and a fast reply. Over 7 months the leads came in for free: 0 € in ads, about 9 € a month in hosting,
              and the sales paid for everything.
            </p>
            <p>
              The product behind it stalled. The engine didn&apos;t. And it wasn&apos;t the first one: throughout his
              career he had built lead engines for businesses at very different price points. That&apos;s when he
              knew what he actually does:
              build the part that brings the customers. His mission is to give the method away for free, and to
              build it for the businesses that would rather have it done.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
