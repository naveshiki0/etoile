"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface NewsItem {
  title: string;
  date: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface NewsTab {
  key: string;
  label: string;
  items: NewsItem[];
  linkToAll: string;
}

interface NewsListSectionProps {
  tabs: NewsTab[];
  defaultTabKey?: string;
}

export default function NewsListSection({
  tabs,
  defaultTabKey,
}: NewsListSectionProps) {
  const [activeKey, setActiveKey] = useState<string>(
    defaultTabKey ?? tabs[0].key
  );
  const activeTab = tabs.find((t) => t.key === activeKey)!;

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      slider.classList.add("cursor-grabbing");
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };
    const onMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const onMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, [activeKey]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <ul className="flex space-x-6 mt-4 md:mt-0 ">
            {tabs.map(({ key, label }) => (
              <li key={key}>
                <button
                  onClick={() => setActiveKey(key)}
                  className={`pb-2 text-4xl font-bold transition-colors ${
                    activeKey === key
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "border-b-2 border-transparent text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-2 cursor-grab select-none"
        >
          {activeTab.items.map(({ title, date, category, imageUrl, link }) => (
            <Link
              key={title}
              href={link}
              className="flex-shrink-0 w-[320px] bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{date}</p>
                <h3 className="font-semibold text-lg line-clamp-2 mb-2">
                  {title}
                </h3>
                <span className="inline-block text-xs px-2 py-0.5 bg-gray-100 border border-gray-400 rounded">
                  {category}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <Link
            href={activeTab.linkToAll}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition"
          >
            <span>すべて見る</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
