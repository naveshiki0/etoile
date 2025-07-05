"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

export default function InterviewPage() {
  const allInterviews = [
    {
      slug: "intern-growth",
      title: "エトワールでの飛躍：インターンでの成長と未来への挑戦",
      date: "2025-06-24",
      excerpt:
        "加藤翔さん（同志社大学経済学部4回）が、エトワールでのインターンを通じて学んだこととは？",
      category: "インターン",
      image: "/interview/person01.jpg",
    },
    {
      slug: "design-lead",
      title: "デザインの力で会社を変える。エトワールデザイナーの挑戦",
      date: "2025-06-15",
      excerpt:
        "プロダクトデザイナー高橋さんが語る、ユーザーに寄り添うデザインの哲学。",
      category: "デザイン",
      image: "/interview/person02.jpg",
    },
    {
      slug: "sales-career",
      title: "営業の最前線で鍛えた力。成長し続けるために必要なこと",
      date: "2025-06-10",
      excerpt:
        "営業部で活躍する佐藤美咲さんが語る、現場でのリアルな経験と成長の軌跡。",
      category: "インターン",
      image: "/interview/person03.jpg",
    },
    {
      slug: "team-culture",
      title: "仲間と築くカルチャー。エトワールのチームワークの本質",
      date: "2025-05-28",
      excerpt: "チームビルディングの現場から見えた、信頼と挑戦の文化とは？",
      category: "カルチャー",
      image: "/interview/person04.jpg",
    },
    {
      slug: "global-challenge",
      title: "世界を見据えて。海外事業担当者の挑戦と学び",
      date: "2025-05-12",
      excerpt:
        "グローバル展開を担う中村さんが語る、異文化環境での働き方と発見。",
      category: "海外展開",
      image: "/interview/person05.jpg",
    },
    {
      slug: "tech-vision",
      title: "テクノロジーで未来を創る。エンジニアが描くエトワールの可能性",
      date: "2025-04-30",
      excerpt: "エンジニアの山田さんが語る、開発現場とこれからのビジョン。",
      category: "テクノロジー",
      image: "/interview/person06.jpg",
    },
  ];

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

        {/* フィルタ・検索 */}
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

        {/* グリッド表示 */}
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
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
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
