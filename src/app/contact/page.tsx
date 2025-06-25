// pages/contact.tsx
"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    furigana: "",
    university: "",
    faculty: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("送信されました。");
    // 実際の送信処理を書く場所
  };

  return (
    <div className="bg-white text-gray-800">
      <div className="relative mx-auto bg-gradient-to-b from-blue-50 to-white py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">Contact</h2>
        <p className="text-blue-600 text-lg">お問い合わせ</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-center text-gray-700 mb-10">
          下記フォームよりお気軽にお問合せください。
          <br />
          お問い合わせ内容は確認し、3営業日までに担当者からご連絡させていただきます。
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                <span className="text-red-500 ml-1">必須</span>
              </label>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-4 py-2"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              お問い合わせ内容<span className="text-red-500 ml-1">必須</span>
            </label>
            <textarea
              name="message"
              placeholder="ご自由にご記入ください。"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 px-4 py-2"
              rows={6}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md shadow-md"
            >
              送信する
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
