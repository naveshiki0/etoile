"use client";

import { useState } from "react";
import NewsCard from "@/components/newscard";
import { newsItems, categories, itemsPerPage } from "@/data/news";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = newsItems.filter((item) => {
    const matchCategory =
      selectedCategory === "すべて" || item.category === selectedCategory;

    const search = searchQuery.toLowerCase();
    const matchSearch =
      item.title.toLowerCase().includes(search) ||
      item.summary.toLowerCase().includes(search);

    return matchCategory && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedItems = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <div className="relative w-full bg-blue-900 text-white py-28 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">NEWS</h1>
        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
          エトワールの最新の取り組みやアップデート情報をお届けします。
        </p>
      </div>

      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="キーワードで検索"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="border border-gray-300 rounded-full px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-72"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <NewsCard key={item.slug} item={item} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">
                該当する記事は見つかりませんでした。
              </p>
            )}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded-full text-sm font-bold border ${
                    currentPage === i + 1
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-blue-500 hover:text-white transition"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
