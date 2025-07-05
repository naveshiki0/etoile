"use client";
import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
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

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }, // useFormのisSubmittingを使う
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000); // 3秒で消える
  };

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        showToast("送信が完了しました。ありがとうございました。");
        reset();
      } else {
        showToast("送信に失敗しました。しばらくしてから再度お試しください。");
      }
    } catch (err) {
      console.error(err);
      showToast("サーバーエラーが発生しました。");
    }
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="relative mx-auto bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mt-8 mb-2">Contact</h2>
        <p className="text-blue-600 text-lg">お問い合わせ</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-center text-gray-700 mb-10">
          下記フォームよりお気軽にお問合せください。
          <br />
          お問い合わせ内容は確認し、3営業日までに担当者からご連絡させていただきます。
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {[
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
          ].map(({ label, name, placeholder, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">
                {label}
                {["name", "furigana", "phone", "email"].includes(name) ? (
                  <span className="text-red-500 ml-1">必須</span>
                ) : (
                  <span className="text-gray-400 ml-1">(任意)</span>
                )}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                {...register(name as keyof FormData)}
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-4 py-2"
              />
              {errors[name as keyof FormData] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[name as keyof FormData]?.message}
                </p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              お問い合わせ内容<span className="text-red-500 ml-1">必須</span>
            </label>
            <textarea
              {...register("message")}
              placeholder="ご自由にご記入ください。"
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-4 py-2"
              rows={6}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          {isSubmitting && (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
              <Image
                src={"/etoile_logo.svg"}
                alt="Loading"
                className="animate-pulseOpacity"
                width={128}
                height={128}
              />
            </div>
          )}

          <div className="flex justify-center items-center min-h-[100px]">
            <button
              disabled={isSubmitting}
              className={`
      bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-md
      hover:bg-blue-700
      focus:outline-none focus:ring-2 focus:ring-blue-400
      disabled:bg-gray-400 disabled:cursor-not-allowed
      transition-colors duration-200
    `}
            >
              {isSubmitting ? "送信中…" : "送信する"}
            </button>
          </div>
        </form>
        {toastMessage && (
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fadeInOut z-50">
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}
