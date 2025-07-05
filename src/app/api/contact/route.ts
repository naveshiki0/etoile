import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const ContactSchema = z.object({
  name: z.string(),
  furigana: z.string(),
  university: z.string().optional(),
  faculty: z.string().optional(),
  phone: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const result = ContactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { error: "入力内容が正しくありません。" },
      { status: 400 }
    );
  }

  const { name, furigana, university, faculty, phone, email, message } =
    result.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `【お問い合わせ】${name}様より`,
    text: `
お名前：${name}
フリガナ：${furigana}
大学名：${university}
学部：${faculty}
電話番号：${phone}
メールアドレス：${email}
お問い合わせ内容：
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "送信完了" }, { status: 200 });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json(
      { error: "送信に失敗しました。" },
      { status: 500 }
    );
  }
}
