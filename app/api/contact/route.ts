import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize lazily so build doesn't fail if RESEND_API_KEY isn't set yet
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  affiliation?: string;
  message?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { firstName, lastName, email, affiliation, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message too long" },
        { status: 400 }
      );
    }

    const resend = getResend();
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";
    const toAddress = process.env.CONTACT_TO_EMAIL || "your-email@example.com";

    await resend.emails.send({
      from: `Site Contact <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject: `New contact: ${firstName} ${lastName}${
        affiliation ? ` — ${affiliation}` : ""
      }`,
      html: `
        <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="font-size: 16px; font-weight: 500; margin-bottom: 24px;">New message from your site</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #737373; width: 110px;">Name</td>
              <td style="padding: 8px 0;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #737373;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${
              affiliation?.trim()
                ? `<tr><td style="padding: 8px 0; color: #737373;">Affiliation</td><td style="padding: 8px 0;">${escapeHtml(affiliation)}</td></tr>`
                : ""
            }
          </table>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e5e5;">
            <div style="color: #737373; font-size: 12px; margin-bottom: 10px;">MESSAGE</div>
            <div style="white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json(
      { error: "Failed to send. Try again later." },
      { status: 500 }
    );
  }
}
