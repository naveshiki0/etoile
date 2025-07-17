"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer className="bg-gray-200 text-white pt-5">
      {!isContactPage && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-3xl text-blue-800 font-black mb-6">
              Contact
            </div>
            <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-6">
              ご相談・ご応募はこちらから
            </h2>
            <p className="text-xl md:text-3xl font-semibold text-gray-800 mb-8 whitespace-nowrap">
              エトワールに関心のある方は、ぜひお気軽にご連絡ください。
            </p>
            <Link
              href="/contact"
              className="inline-block bg-black text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-gray-800 transition"
            >
              お問い合わせフォームへ →
            </Link>
          </div>
        </section>
      )}
      <div className=" bg-gray-900 w-full px-6 py-12 grid gap-10 grid-cols-1 ">
        <div className="flex flex-col items-center space-y-6 text-center">
          <ul className="flex flex-wrap justify-center gap-x-6">
            <li>
              <Link href="/" className="hover:text-blue-600">
                トップ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                会社概要
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-blue-600">
                サービス
              </Link>
            </li>
            <li>
              <Link href="/interview" className="hover:text-blue-600">
                インタビュー
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                お問い合わせ
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center gap-x-6">
            <li>
              <Link href="/terms" className="hover:text-blue-600">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-600">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center border-t border-white py-4 text-xs text-white">
          © {new Date().getFullYear()} YourCompany Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
