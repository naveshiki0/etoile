"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="px-6 md:px-10 py-1 flex items-center justify-between transition-all duration-300">
        <Link href="/" className="transition-all duration-300">
          <Image
            src="/etoile_logo.svg"
            alt="Logo"
            width={scrolled ? 50 : 70}
            height={scrolled ? 15 : 30}
            priority
          />
        </Link>

        {/* ハンバーガーメニュー */}
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

        {/* PCナビゲーション */}
        <nav className="hidden md:flex space-x-6 font-medium text-lg items-center h-full pr-36">
          {["about", "service", "interview"].map((path, i) => (
            <Link
              key={i}
              href={`/${path}`}
              className={clsx(
                "text-base font-bold transition-colors flex items-center justify-center h-full",
                scrolled ? "text-gray-800" : "text-white"
              )}
            >
              {path === "about"
                ? "エトワールについて"
                : path === "service"
                ? "事業内容"
                : "メンバーインタビュー"}
            </Link>
          ))}
        </nav>

        {/* お問い合わせボタン（右端） */}
        <Link
          href="/contact"
          className="hidden md:flex items-center justify-center absolute right-0 top-0 h-full w-[160px] bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition"
        >
          お問い合わせ
        </Link>
      </div>

      {/* モバイルメニュー */}
      {isOpen && (
        <div className="md:hidden px-6 space-y-3 font-medium text-sm bg-white shadow">
          {["about", "service", "interview", "contact"].map((path, i) => (
            <Link key={i} href={`/${path}`} onClick={() => setIsOpen(false)}>
              {path === "contact" ? (
                <span className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center">
                  お問い合わせ
                </span>
              ) : (
                <span className="block">
                  {
                    {
                      about: "エトワールについて",
                      service: "事業内容",
                      interview: "メンバーインタビュー",
                    }[path]
                  }
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
