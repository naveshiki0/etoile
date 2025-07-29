// "use client";

// import { useState, useRef, useEffect } from "react";
// import { Dialog } from "@headlessui/react";
// import { Search, X } from "lucide-react";
// import clsx from "clsx";
// import Fuse from "fuse.js";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { allInterviews } from "@/data/interview";
// import { newsItems } from "@/data/news";

// const staticPages = [
//   { title: "トップ", slug: "/", summary: "サイトのトップページ" },
//   { title: "会社概要", slug: "/about", summary: "エトワールについて" },
//   { title: "サービス", slug: "/service", summary: "私たちの提供するサービス" },
//   {
//     title: "お問い合わせ",
//     slug: "/contact",
//     summary: "ご相談・ご応募はこちら",
//   },
//   { title: "インタビュー", slug: "/interview", summary: "先輩の声をお届け" },
//   { title: "ニュース", slug: "/news", summary: "最新のお知らせ" },
// ] as const;

// type PageItem = (typeof staticPages)[number];
// type NewsItem = (typeof newsItems)[number];
// type InterviewItem = (typeof allInterviews)[number];
// type SearchItem = PageItem | NewsItem | InterviewItem;

// const data: SearchItem[] = [...newsItems, ...allInterviews, ...staticPages];

// const fuse = new Fuse<SearchItem>(data, {
//   keys: ["title", "summary", "name", "university", "category"],
//   threshold: 0.3,
// });

// export default function SearchBox() {
//   const [open, setOpen] = useState(false);
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchItem[]>([]);
//   const inputRef = useRef<HTMLInputElement>(null);
//   const pathname = usePathname();
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     if (query.trim() === "") {
//       setResults([]);
//     } else {
//       const found = fuse.search(query, { limit: 6 });
//       setResults(found.map((f) => f.item));
//     }
//   }, [query]);

//   useEffect(() => {
//     if (open && inputRef.current) inputRef.current.focus();
//   }, [open]);

//   const isDarkText =
//     pathname.startsWith("/news/") ||
//     pathname.startsWith("/interview/") ||
//     scrolled;

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setOpen((o) => !o)}
//         className={clsx(
//           "p-2 transition",
//           isDarkText ? "text-black hover:text-blue-600" : "text-white"
//         )}
//       >
//         <Search size={20} />
//       </button>

//       <Dialog
//         open={open}
//         onClose={() => setOpen(false)}
//         className="relative z-50"
//       >
//         <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
//         <div className="fixed inset-0 flex items-start justify-center p-4 pt-20">
//           <Dialog.Panel className="w-full max-w-xl rounded-xl shadow-lg bg-white p-6 space-y-4">
//             <div className="flex items-center space-x-2">
//               <Search className="text-gray-400" />
//               <input
//                 ref={inputRef}
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 placeholder="サイト内を検索"
//                 className="flex-1 outline-none text-lg text-gray-800 placeholder-gray-400"
//               />
//               <button
//                 onClick={() => {
//                   setQuery("");
//                   setOpen(false);
//                 }}
//                 aria-label="Close"
//               >
//                 <X className="text-gray-400 hover:text-gray-600" />
//               </button>
//             </div>
//             <div className="max-h-60 overflow-y-auto space-y-2">
//               {query && results.length === 0 ? (
//                 <p className="text-gray-500 text-sm">
//                   一致する項目が見つかりません
//                 </p>
//               ) : (
//                 results.map((item, i) => {
//                   const href = item.slug;
//                   const title = item.title;
//                   const desc =
//                     "summary" in item && item.summary
//                       ? item.summary
//                       : "category" in item && item.category
//                       ? item.category
//                       : "university" in item && item.university
//                       ? item.university
//                       : "";

//                   return (
//                     <Link
//                       key={i}
//                       href={href}
//                       className="block p-3 border rounded-md hover:bg-blue-50 transition"
//                       onClick={() => setOpen(false)}
//                     >
//                       <p className="font-bold text-blue-700">{title}</p>
//                       {desc && <p className="text-sm text-gray-500">{desc}</p>}
//                     </Link>
//                   );
//                 })
//               )}
//             </div>
//           </Dialog.Panel>
//         </div>
//       </Dialog>
//     </div>
//   );
// }
