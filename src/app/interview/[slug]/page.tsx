"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { allInterviews } from "@/data/interview";

export default function Page() {
  const { slug } = useParams() as { slug: string };
  const interview = allInterviews.find((item) => item.slug === slug);

  if (!interview) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          記事が見つかりません
        </h1>
      </div>
    );
  }

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
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="prose prose-blue max-w-none text-gray-800 text-lg leading-relaxed">
          {interview.content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
