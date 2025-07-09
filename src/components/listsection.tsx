"use client";

import Link from "next/link";

interface NewsItem {
  title: string;
  date: string;
  tag: string;
  link: string;
}

interface NewsListSectionProps {
  title?: string;
  items: NewsItem[];
  linkToAll: string;
}

export default function NewsListSection({
  title,
  items,
  linkToAll,
}: NewsListSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-blue-800 border-b-4 border-blue-500 inline-block mb-10">
          {title}
        </h2>
        <div className="border-t-4 border-blue-500 bg-white shadow-lg rounded-lg p-6">
          <div className="space-y-6">
            {items.map(({ title, date, tag, link }) => (
              <Link
                href={link}
                key={title}
                className="block border-b pb-4 last:border-none"
              >
                <div className="text-sm text-gray-500 mb-1">
                  {date}
                  <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                    {tag}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 hover:underline">
                  {title}
                </h3>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href={linkToAll}
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
            >
              すべてのニュースを見る →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
