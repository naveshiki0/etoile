"use client";

import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Search, X } from "lucide-react";
import clsx from "clsx";
import Fuse from "fuse.js";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allInterviews } from "@/data/interview";
import { newsItems } from "@/data/news";

const data = [...newsItems, ...allInterviews];

const fuse = new Fuse(data, {
  keys: ["title", "summary", "name", "university", "category"],
  threshold: 0.3,
});

export default function SearchBox() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();

  // スクロール判定
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const found = fuse.search(query).slice(0, 6);
      setResults(found.map((f) => f.item));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  // ✅ 色判定条件
  const isDarkText =
    pathname.startsWith("/news/") ||
    pathname.startsWith("/interview/") ||
    scrolled;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "p-2 transition",
          isDarkText ? "text-black hover:text-blue-600" : "text-white"
        )}
      >
        <Search size={20} />
      </button>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-start justify-center p-4 pt-20">
          <Dialog.Panel className="w-full max-w-xl rounded-xl shadow-lg bg-white p-6 space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="サイト内を検索"
                className="flex-1 outline-none text-lg text-gray-800 placeholder-gray-400"
              />
              <button
                onClick={() => {
                  setQuery("");
                  setOpen(false);
                }}
                aria-label="Close"
              >
                <X className="text-gray-400 hover:text-gray-600" />
              </button>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2">
              {results.length === 0 && query ? (
                <p className="text-gray-500 text-sm">
                  一致する項目が見つかりません
                </p>
              ) : (
                results.map((item, i) => (
                  <Link
                    key={i}
                    href={
                      item.slug?.startsWith("/")
                        ? item.slug
                        : item.link || `/news/${item.slug}`
                    }
                    className="block p-3 border rounded-md hover:bg-blue-50 transition"
                    onClick={() => setOpen(false)}
                  >
                    <p className="font-bold text-blue-700">
                      {item.title || item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.summary || item.university}
                    </p>
                  </Link>
                ))
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
