// Receives every form submission on the site.
// For now it only validates and logs. Later: send to your inbox / store in a database.

const SOURCES = ["contact", "leak-check", "book", "workshop", "course", "roadmap"] as const;
type Source = (typeof SOURCES)[number];

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s()/-]{6,20}$/;

function str(v: unknown, max = 200): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real people never fill this hidden field.
  if (str(body.website)) {
    return Response.json({ ok: true });
  }

  const source = str(body.source) as Source;
  if (!SOURCES.includes(source)) {
    return Response.json({ ok: false, error: "Unknown form." }, { status: 400 });
  }

  const name = str(body.name, 100);
  const contact = str(body.contact, 120);
  const qualifier = str(body.qualifier, 60);
  const siteUrl = str(body.siteUrl, 200);

  const isEmail = EMAIL.test(contact);
  const isPhone = PHONE.test(contact);

  // Qualifying fields of the lead capture form (course, workshop).
  const phone = str(body.phone, 30);
  const revenue = str(body.revenue, 60);
  const ownership = str(body.ownership, 60);
  const heard = str(body.heard, 60);

  if (source === "book" || source === "workshop" || source === "course") {
    if (!isEmail) {
      return Response.json(
        { ok: false, field: "email", error: "Please enter a valid email address." },
        { status: 400 },
      );
    }
    if (source !== "book") {
      if (!name) {
        return Response.json({ ok: false, field: "firstName", error: "Please enter your name." }, { status: 400 });
      }
      if (!/^\+?[\d\s()/-]{5,24}$/.test(phone)) {
        return Response.json({ ok: false, field: "phone", error: "Please enter a valid phone number." }, { status: 400 });
      }
      for (const [k, v] of [["revenue", revenue], ["ownership", ownership], ["heard", heard]] as const) {
        if (!v) return Response.json({ ok: false, field: k, error: "Please select one." }, { status: 400 });
      }
    }
  } else {
    if (!name) {
      return Response.json(
        { ok: false, field: "name", error: "Please tell me your name." },
        { status: 400 },
      );
    }
    if (source === "roadmap") {
      if (!isEmail) {
        return Response.json(
          { ok: false, field: "contact", error: "Please enter a valid email address." },
          { status: 400 },
        );
      }
      if (!/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(siteUrl)) {
        return Response.json(
          { ok: false, field: "siteUrl", error: "Please enter your website, e.g. www.yourcompany.com." },
          { status: 400 },
        );
      }
    } else if (!isEmail && !isPhone) {
      return Response.json(
        { ok: false, field: "contact", error: "Please enter a valid email or phone number." },
        { status: 400 },
      );
    }
  }

  const check =
    body.check && typeof body.check === "object" ? (body.check as Record<string, unknown>) : null;

  const lead = {
    receivedAt: new Date().toISOString(),
    source,
    name,
    contact,
    contactType: isEmail ? "email" : "phone",
    qualifier: qualifier || null,
    siteUrl: siteUrl || null,
    check,
    phone: phone || null,
    revenue: revenue || null,
    ownership: ownership || null,
    heard: heard || null,
  };

  // TODO: deliver the lead (email notification + instant confirmation, database).
  console.log("[lead]", JSON.stringify(lead));

  return Response.json({ ok: true });
}
