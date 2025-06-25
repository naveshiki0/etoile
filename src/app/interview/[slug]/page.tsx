"use client";

import Image from "next/image";

// --- 型定義 ---
type Params = {
  slug: string;
};

type Interview = {
  title: string;
  date: string;
  name: string;
  university: string;
  category: string;
  image: string;
  content: string;
};

// --- 仮データ ---
const interviewData: Record<string, Interview> = {
  "intern-growth": {
    title: "エトワールでの飛躍：インターンから始まる成長と未来への挑戦",
    date: "2025-06-24",
    name: "加藤翔",
    university: "同志社大学 経済学部 経済学科 4回生",
    category: "インターン",
    image: "/images/kato.jpg",
    content: `インターンを始めた当初は右も左も分からなかった私ですが、周囲のサポートや挑戦の機会により大きく成長できました。\n自ら考え動く経験を通じて、自信とやりがいを手に入れました。`,
  },
  "design-lead": {
    title: "デザインの力で会社を変える。エトワールデザイナーの挑戦",
    date: "2025-06-15",
    name: "高橋美咲",
    university: "京都大学 文学部 3回生",
    category: "デザイン",
    image: "/images/takahashi.jpg",
    content: `デザインは単なる装飾ではなく、ユーザー体験そのものです。\nエトワールでは、実際のプロダクト開発に深く関わりながら、ユーザー視点を大切にしたデザインを実現しています。`,
  },
};

// --- メインページ ---
export default function Page({ params }: { params: Params }) {
  const interview: Interview = interviewData[params.slug];

  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-10">
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
          {interview.category}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {interview.title}
        </h1>
        <time className="text-sm text-gray-500">{interview.date}</time>
        <p className="mt-2 text-gray-700 text-sm">
          {interview.name}（{interview.university}）
        </p>
      </div>

      <div className="mb-10">
        <div className="relative w-full h-72 mb-6">
          <Image
            src={interview.image}
            alt={interview.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="prose prose-blue max-w-none text-gray-800 text-lg leading-relaxed">
          {interview.content.split("\n").map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
