"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false); // ← 初期化完了フラグ
  const [hide, setHide] = useState(false); // ← 非表示かどうか
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // イントロ表示判定（初回ホームのみ）
  useEffect(() => {
    if (pathname === "/") {
      const hasSeenIntro = sessionStorage.getItem("etoile_intro_shown");
      if (!hasSeenIntro) {
        setHide(true);
        const timer = setTimeout(() => {
          sessionStorage.setItem("etoile_intro_shown", "true");
          setHide(false);
          setIsReady(true); // ← 判定が終わったので描画OK
        }, 4000);
        return () => clearTimeout(timer);
      }
    }
    setIsReady(true); // ← イントロ不要ページなら即描画
  }, [pathname]);

  const isWhiteTextPage =
    /^\/(about|service|news)?$/.test(pathname) || pathname === "/";
  const showWhiteLogo = pathname === "/news" && !scrolled;

  if (!isReady || hide) return null; // ← 初期判定中 or 非表示フラグなら描画しない

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
            src={showWhiteLogo ? "/etoile_logo_white.svg" : "/etoile_logo.svg"}
            alt="Logo"
            width={scrolled ? 50 : 70}
            height={scrolled ? 15 : 30}
            priority
          />
        </Link>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          <svg
            className={clsx(
              "w-6 h-6",
              isWhiteTextPage && !scrolled ? "text-white" : "text-black"
            )}
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

        {/* ナビゲーション */}
        <nav className="hidden md:flex space-x-6 font-medium text-lg items-center h-full pr-36">
          {["about", "service", "interview", "news"].map((path, i) => (
            <Link
              key={i}
              href={`/${path}`}
              className={clsx(
                "text-base font-bold transition-colors flex items-center justify-center h-full border-b-4",
                pathname === `/${path}`
                  ? "border-blue-600"
                  : "border-transparent",
                isWhiteTextPage && !scrolled ? "text-white" : "text-gray-800",
                "hover:border-blue-400"
              )}
            >
              {path === "about"
                ? "エトワールについて"
                : path === "service"
                ? "事業内容"
                : path === "interview"
                ? "メンバーインタビュー"
                : "社内ニュース"}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:flex items-center justify-center absolute right-0 top-0 h-full w-[160px] bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition"
        >
          お問い合わせ
        </Link>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 space-y-3 font-medium text-sm bg-white shadow">
          {["about", "service", "interview", "news", "contact"].map(
            (path, i) => (
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
                        news: "社内ニュース",
                      }[path]
                    }
                  </span>
                )}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
