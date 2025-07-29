"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { Send, Building } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hide, setHide] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      const hasSeenIntro = sessionStorage.getItem("etoile_intro_shown");
      if (!hasSeenIntro) {
        setHide(true);
        const timer = setTimeout(() => {
          sessionStorage.setItem("etoile_intro_shown", "true");
          setHide(false);
          setIsReady(true);
        }, 4000);
        return () => clearTimeout(timer);
      }
    }
    setIsReady(true);
  }, [pathname]);

  const isWhiteTextPage =
    /^\/(about|service|news|interview)?$/.test(pathname) || pathname === "/";

  const showWhiteLogo =
    (pathname === "/news" || pathname === "/interview") && !scrolled;

  const showDarkSend =
    pathname === "/contact" ||
    scrolled ||
    /^\/(news|interview)\/[^/]+$/.test(pathname);

  if (!isReady || hide) return null;

  const isDarkText = showDarkSend;

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

        <nav className="hidden md:flex flex-1 justify-center space-x-6 font-medium text-lg items-center h-full">
          {["about", "service", "interview", "news"].map((path, i) => (
            <Link
              key={i}
              href={`/${path}`}
              className={clsx(
                "text-sm tracking-widest uppercase transition-colors flex items-center justify-center h-full border-b-4",
                pathname === `/${path}`
                  ? "border-blue-600"
                  : "border-transparent",
                isWhiteTextPage && !scrolled ? "text-white" : "text-gray-800",
                "hover:border-blue-400"
              )}
            >
              {path}
            </Link>
          ))}
        </nav>

        <div className="absolute right-0 top-0 h-full flex items-center space-x-4 pr-4">
          <Link
            href="/about#outline"
            className={clsx(
              "p-2 transition",
              isDarkText ? "text-black" : "text-white"
            )}
            aria-label="会社概要"
          >
            <Building size={22} />
          </Link>

          <Link
            href="/contact"
            className={clsx(
              "md:flex items-center justify-center h-full w-[80px] transition duration-300",
              showDarkSend ? "text-gray-800" : "text-white"
            )}
            aria-label="お問い合わせ"
          >
            <Send size={22} />
          </Link>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 space-y-3 font-medium text-sm bg-white shadow">
          {["about", "service", "interview", "news", "contact"].map(
            (path, i) => (
              <Link key={i} href={`/${path}`} onClick={() => setIsOpen(false)}>
                {path === "contact" ? (
                  <span className="block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-center">
                    contact
                  </span>
                ) : (
                  <span className="block text-gray-700 uppercase tracking-wider">
                    {path}
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
