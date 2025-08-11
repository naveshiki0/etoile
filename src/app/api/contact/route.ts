import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, furigana, phone, email, about, message } = body;

    // 送信
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // 本番では認証済みドメインに変更
      to: "kounanataiti@icloud.com", // 受信先
      subject: `お問い合わせ: ${about || "無題"}`,
      html: `
        <h2>お問い合わせ内容</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>フリガナ:</strong> ${furigana}</p>
        <p><strong>電話番号:</strong> ${phone}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>お問い合わせ種別:</strong> ${about}</p>
        <p><strong>メッセージ:</strong></p>
        <pre>${message}</pre>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
