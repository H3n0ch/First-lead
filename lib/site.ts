// Central settings. Fill the [ROBERT: …] gaps here, everything else reads from this file.

export const site = {
  name: "First Lead",
  owner: "Robert",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  tagline: "Leads that come to you. No cold calls.",
  description:
    "Learn the system that turned one small website into a lead machine for a 100,000–110,000 € product. Free tools and training by Robert, founder of First Lead.",
  email: "[ROBERT: email]",
  phone: "[ROBERT: phone]",
  // Cal.com / Calendly link. While empty, every "Book a call" button goes to the contact page.
  bookingUrl: "",
  // Path to a photo in /public, e.g. "/robert.jpg". While null, a placeholder is shown.
  photo: null as string | null,
};

export const bookHref = site.bookingUrl || "/contact";
