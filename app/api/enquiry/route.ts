import { NextResponse } from "next/server";

type Enquiry = {
  parentName?: string;
  phone?: string;
  email?: string;
  childName?: string;
  classApplying?: string;
  message?: string;
  website?: string; // honeypot
};

const clean = (v: unknown, max = 1000) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Enquiry;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success and drop it.
  if (clean(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const enquiry = {
    parentName: clean(body.parentName, 120),
    phone: clean(body.phone, 30),
    email: clean(body.email, 160),
    childName: clean(body.childName, 120),
    classApplying: clean(body.classApplying, 60),
    message: clean(body.message, 2000),
  };

  if (enquiry.parentName.length < 2 || enquiry.phone.length < 9 || enquiry.message.length < 5) {
    return NextResponse.json(
      { error: "Please fill in your name, phone number and message." },
      { status: 400 }
    );
  }

  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  // TODO: deliver the enquiry. Pick one:
  //
  // 1) Email with Resend (npm i resend, set RESEND_API_KEY and ENQUIRY_TO_EMAIL):
  //    import { Resend } from "resend";
  //    const resend = new Resend(process.env.RESEND_API_KEY);
  //    await resend.emails.send({
  //      from: "Edisam Website <onboarding@resend.dev>",
  //      to: process.env.ENQUIRY_TO_EMAIL!,
  //      subject: `New enquiry from ${enquiry.parentName}`,
  //      text: JSON.stringify(enquiry, null, 2),
  //    });
  //
  // 2) Save to a database or Google Sheet.
  //
  // Until then, the enquiry is only logged on the server.
  console.log("New enquiry:", enquiry);

  return NextResponse.json({ ok: true });
}
