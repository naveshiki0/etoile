"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { allInterviews } from "@/data/interview";

export default function InterviewPage() {
  const categories = [
    "すべて",
    ...Array.from(new Set(allInterviews.map((i) => i.category))),
  ];
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredInterviews = allInterviews.filter((i) => {
    const matchCategory =
      selectedCategory === "すべて" || i.category === selectedCategory;
    const matchSearch = i.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Head>
        <title>メンバーインタビュー | 株式会社エトワール</title>
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="mb-8 text-2xl font-bold text-blue-800 border-b-4 border-blue-500 inline-block">
          Interview
        </h2>

        <div className="mb-10 flex flex-col md:flex-row gap-4 md:items-center">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1 text-sm rounded-full border ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border-gray-300"
                } hover:bg-blue-500 hover:text-white transition`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="タイトル検索"
            className="mt-2 md:mt-0 md:ml-auto border border-gray-300 px-4 py-2 rounded w-full md:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {filteredInterviews.map((item) => (
            <a
              key={item.slug}
              href={`/interview/${item.slug}`}
              className="group block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
                  {item.category}
                </span>
                <time className="block text-sm text-gray-500">{item.date}</time>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mt-1">
                  {item.title}
                </h2>
              </div>
            </a>
          ))}
        </div>

        {filteredInterviews.length === 0 && (
          <p className="text-center text-gray-500 mt-12">
            該当するインタビューが見つかりません。
          </p>
        )}
      </main>
    </>
  );
}
