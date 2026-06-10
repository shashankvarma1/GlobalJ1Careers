import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return Response.json({ ok: false }, { status: 500 });
  try {
    const resend = new Resend(apiKey);
    const { name, email, country, role, message } = await req.json();
    await resend.emails.send({
      from: "Global J1 Careers <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "globalj1careers@gmail.com",
      replyTo: email,
      subject: `New J1 Consultation — ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Country:</b> ${country}</p><p><b>Role:</b> ${role}</p><p><b>Message:</b> ${message}</p>`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    return Response.json({ ok: false }, { status: 500 });
  }
}