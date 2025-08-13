import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

type ResendErrorShape = {
  name?: string; // e.g. 'validation_error'
  statusCode?: number; // e.g. 403
  error?: string; // e.g. '... domain is not verified ...'
};

function isDomainNotVerified(err: unknown): boolean {
  const e = err as ResendErrorShape | undefined;
  return (
    !!e &&
    e.name === "validation_error" &&
    typeof e.error === "string" &&
    e.error.toLowerCase().includes("domain is not verified")
  );
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;
    const name = body?.name?.trim() || "Anonymous";
    const email = body?.email?.trim();
    const message = body?.message ?? "";

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing at runtime");
      return NextResponse.json(
        { ok: false, error: "Server misconfigured" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const fromEnv =
      process.env.MAIL_FROM || "Etoile Contact <onboarding@resend.dev>";
    const toListEnv = (process.env.MAIL_TO || "delivered@resend.dev")
      .split(",")
      .map((s) => s.trim());

    const base = {
      subject: `お問い合わせ: ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email || "(not provided)"}`,
        "",
        message,
      ].join("\n"),
      ...(email ? ({ replyTo: email } as const) : {}),
    };

    const { data: data1, error: err1 } = await resend.emails.send({
      from: fromEnv,
      to: toListEnv,
      ...base,
    });

    if (!err1) {
      return NextResponse.json({ ok: true, id: data1?.id ?? null });
    }

    if (isDomainNotVerified(err1)) {
      const { data: data2, error: err2 } = await resend.emails.send({
        from: "Etoile Contact <onboarding@resend.dev>",
        to: ["delivered@resend.dev"],
        ...base,
      });

      if (!err2) {
        return NextResponse.json({
          ok: true,
          id: data2?.id ?? null,
          fallback: "domain_not_verified_used_test_route",
        });
      }

      console.error("Resend send error (fallback failed)", err2);
      return NextResponse.json({ ok: false, error: err2 }, { status: 400 });
    }

    console.error("Resend send error", err1);
    return NextResponse.json({ ok: false, error: err1 }, { status: 400 });
  } catch (err) {
    console.error("Unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error" },
      { status: 500 }
    );
  }
}
