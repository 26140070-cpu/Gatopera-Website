import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const record = body as Record<string, unknown>;
  return (
    typeof record.name === "string" &&
    record.name.trim().length >= 2 &&
    typeof record.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(record.email) &&
    typeof record.message === "string" &&
    record.message.trim().length >= 10
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const { name, email, message } = body;
  const apiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_EMAIL;

  if (!apiKey || !targetEmail) {
    console.info("contact_form_submission", { name, email, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "Gatopera Website <onboarding@resend.dev>",
      to: targetEmail,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    });
    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("contact_form_delivery_failed", error);
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
