"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white text-gray-800">
      <div className="w-full px-10 py-3 flex items-center justify-between">
        <Link href="/">
          {/* TODO:背景透過する */}
          <Image
            src="/etoile_logo.png"
            alt="Logo"
            width={60}
            height={20}
            priority
          />
        </Link>

        {/* ハンバーガーメニュー（モバイル） */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* メニュー（PC） */}
        <nav className="hidden md:flex space-x-8 font-medium text-sm items-center">
          <Link
            href="/about"
            className="hover:text-blue-600 text-base font-bold"
          >
            エトワールについて
          </Link>
          <Link
            href="/service"
            className="hover:text-blue-600 text-base font-bold"
          >
            事業内容
          </Link>
          <Link
            href="/interview"
            className="hover:text-blue-600 text-base font-bold"
          >
            メンバーインタビュー
          </Link>
          <Link
            href="/contact"
            className="hover:bg-blue-700 text-base font-bold"
          >
            お問い合わせ
          </Link>
        </nav>
      </div>

      {/* モバイルメニュー展開 */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 font-medium text-sm float-right">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            エトワールについて
          </Link>
          <Link href="/service" onClick={() => setIsOpen(false)}>
            事業内容
          </Link>
          <Link href="/interview" onClick={() => setIsOpen(false)}>
            メンバーインタビュー
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <span className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center">
              お問い合わせ
            </span>
          </Link>
        </div>
      )}
    </header>
  );
}
