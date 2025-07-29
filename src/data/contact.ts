import { z } from "zod";
export const schema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  furigana: z.string().min(1, "フリガナは必須です"),
  university: z.string().max(100).optional(),
  faculty: z.string().max(100).optional(),
  phone: z
    .string()
    .min(10, "電話番号が短すぎます")
    .max(15, "電話番号が長すぎます"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(1, "お問い合わせ内容は必須です").max(1000),
});

export const contactAbout = [
  { label: "お名前", name: "name", placeholder: "例）山田 太郎" },
  {
    label: "フリガナ",
    name: "furigana",
    placeholder: "例）ヤマダ タロウ",
  },
  {
    label: "大学名",
    name: "university",
    placeholder: "例）〇〇大学",
  },
  { label: "学部", name: "faculty", placeholder: "例）〇〇学部" },
  {
    label: "電話番号",
    name: "phone",
    placeholder: "例）0312345678",
    type: "tel",
  },
  {
    label: "メールアドレス",
    name: "email",
    placeholder: "例）info@example.com",
    type: "email",
  },
];
