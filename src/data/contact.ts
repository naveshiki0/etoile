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
