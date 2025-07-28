"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import NewsListSection, { NewsTab } from "@/components/listsection";
import { allInterviews } from "@/data/interview";
import { newsItems } from "@/data/news";
import { services } from "@/data/service";
import {
  Briefcase,
  Users,
  GraduationCap,
  Star,
  Calendar,
  CheckCircle,
} from "lucide-react";

const images = ["mv01.jpg", "mv02.jpg", "mv03.jpg"];

const aboutItems = [
  {
    title: "インターン事業",
    desc: "実践的なプロジェクトで営業力・マネジメント力を体得。先輩社員と一緒にクライアント訪問を行い、実際の商談経験も積めます。",
    icon: Briefcase,
  },
  {
    title: "イベント事業",
    desc: "学生主体のイベント企画運営で企業連携を推進。大規模スポーツ大会から小規模セミナーまで、多彩なイベントを成功に導きます。",
    icon: Users,
  },
  {
    title: "就活支援事業",
    desc: "ES添削・模擬面接・企業研究ワークショップで万全のキャリアサポート。業界トップ企業出身のコーチから直接フィードバックを受けられます。",
    icon: GraduationCap,
  },
];

export default function AboutPage() {
  const [showIntro, setShowIntro] = useState(true);

  // Intro アニメーション制御
  useEffect(() => {
    const seen = sessionStorage.getItem("etoile_intro_shown");
    if (seen) return void setShowIntro(false);

    sessionStorage.setItem("etoile_intro_shown", "true");
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Interview データ整形
  const interviewItems = allInterviews.map((item) => ({
    title: item.title,
    date: item.date,
    category: item.category,
    imageUrl: item.image,
    link: `/interview/${item.slug}`,
  }));

  // News データ整形（先頭10件）
  const formattedNewsItems = newsItems.slice(0, 10).map((item) => ({
    title: item.title,
    date: item.date,
    category: item.category,
    imageUrl: item.thumbnail,
    link: `/news/${item.slug}`,
  }));

  // タブ用データ
  const newsTabs: NewsTab[] = [
    {
      key: "interview",
      label: "Interview",
      items: interviewItems,
      linkToAll: "/interview",
    },
    {
      key: "news",
      label: "News",
      items: formattedNewsItems,
      linkToAll: "/news",
    },
  ];

  return (
    <main className="bg-gray-200">
      {showIntro ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-blue-900 overflow-hidden">
          <div className="absolute w-[300px] h-[300px] animate-custom-ping border-2 border-blue-300 rounded-full opacity-30" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle,_#ccc_1px,_transparent_1px)]"
            style={{ backgroundSize: "20px 20px" }}
          />
          <div className="relative z-10 text-center animate-fadein">
            <Image
              src="/etoile_logo.svg"
              alt="ETOILE Logo"
              width={180}
              height={70}
              className="mx-auto drop-shadow-xl"
            />
            <p className="mt-4 text-blue-500 text-sm font-mono tracking-widest animate-flicker">
              我々とともに将来を創りに行こう
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* ヒーローセクション */}
          <section className="relative h-[900px] font-sans">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="absolute inset-0 z-0"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[900px]">
                    <Image
                      src={`/top/${img}`}
                      alt={`Hero ${i + 1}`}
                      fill
                      className="object-cover brightness-90"
                      priority={i === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute inset-0 bg-gray-400/20 z-10" />
            <div className="absolute inset-0 flex items-center justify-start z-20 px-4 md:px-10">
              <div className="w-full max-w-6xl ml-48 pl-4 space-y-6">
                <h1 className="text-white font-extrabold flex items-baseline gap-4 leading-none">
                  <span className="text-7xl md:text-8xl drop-shadow-lg">
                    我々
                  </span>
                  <span className="text-4xl md:text-5xl text-white/80 font-medium">
                    とともに
                  </span>
                </h1>
                <h2 className="text-white flex flex-wrap items-baseline gap-4 leading-tight">
                  <span className="text-7xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-500 animate-fade-in-once drop-shadow-sm">
                    将来
                  </span>
                  <span className="text-4xl md:text-5xl text-white/80 font-medium">
                    を
                  </span>
                  <span className="text-7xl md:text-8xl font-extrabold drop-shadow-lg">
                    創
                  </span>
                  <span className="text-4xl md:text-5xl text-white/80 font-medium">
                    りに行こう
                  </span>
                </h2>
              </div>
            </div>
            <div className="absolute bottom-10 w-full z-30 flex items-center justify-center px-6 pointer-events-none">
              <div className="flex items-center w-full max-w-5xl">
                <div className="flex-1 border-t border-white/30" />
                <span className="px-6 text-white/70 text-lg md:text-xl tracking-wider font-medium whitespace-nowrap">
                  Let’s build our future together.
                </span>
                <div className="flex-1 border-t border-white/30" />
              </div>
            </div>
          </section>

          {/* About セクション */}
          <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-8xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4 h-64 md:h-[600px] relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/about/mv.jpg"
                  alt="About Visual"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-8 flex flex-col space-y-16">
                <div className="text-center">
                  <h2 className="relative inline-block text-4xl md:text-5xl font-extrabold text-gray-900">
                    About
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-blue-600 rounded"></span>
                  </h2>
                  <p className="mt-4 text-lg font-medium text-gray-800">
                    Three Pillars of Growth
                  </p>
                  <p className="mt-2 max-w-2xl mx-auto text-gray-700">
                    実践型インターン・学生主体イベント・就活支援で主体的成長を後押しします。
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {aboutItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col items-center"
                    >
                      <div className="bg-blue-100 p-4 rounded-full mb-4">
                        <item.icon className="text-blue-600" size={32} />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-center">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center pt-7">
                  <div className="flex-1 h-px bg-gray-300" />
                  <Link
                    href="/about"
                    className="mx-6 px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
                  >
                    詳しく見る
                  </Link>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>
              </div>
            </div>
          </section>

          {/* Service セクション */}
          <section id="service" className="py-20 bg-gray-50">
            <div className="max-w-8xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-8 flex flex-col space-y-16">
                <div className="text-center">
                  <h2 className="relative inline-block text-4xl md:text-5xl font-extrabold text-gray-900">
                    Service
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-1 bg-blue-600 rounded" />
                  </h2>
                  <p className="mt-4 text-lg font-medium text-gray-800">
                    Empowering Your Future
                  </p>
                  <p className="mt-2 max-w-2xl mx-auto text-gray-700">
                    多彩な事業を通じて、学生のキャリアと可能性を最大化します。
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {services.map((s) => {
                    const Icon =
                      s.id === "s01"
                        ? CheckCircle
                        : s.id === "s02"
                        ? Calendar
                        : Star;
                    return (
                      <div
                        key={s.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-8 flex flex-col items-center text-center"
                      >
                        <div className="bg-blue-100 p-4 rounded-full mb-4">
                          <Icon className="text-blue-600" size={32} />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                          {s.title}
                        </h3>
                        <p className="text-gray-700 whitespace-pre-line">
                          {s.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center pt-7">
                  <div className="flex-1 h-px bg-gray-300" />
                  <Link
                    href="/service"
                    className="mx-6 px-8 py-3 border-2 border-gray-400 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
                  >
                    詳しく見る
                  </Link>
                  <div className="flex-1 h-px bg-gray-300" />
                </div>
              </div>
              <div className="md:col-span-4 h-64 md:h-[600px] relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/service/mv.jpg"
                  alt="Service Visual"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Interview/News タブ切替セクション */}
          <NewsListSection tabs={newsTabs} defaultTabKey="interview" />

          {/* 活動写真スクロール */}
          <section className="overflow-hidden p-0 m-0">
            <div className="whitespace-nowrap animate-scroll flex">
              {[...Array(2)].flatMap((_, idx) =>
                [
                  "/top/activity/slide01.jpg",
                  "/top/activity/slide02.jpg",
                  "/top/activity/slide03.jpg",
                  "/top/activity/slide04.jpg",
                  "/top/activity/slide05.jpg",
                  "/top/activity/slide06.jpg",
                  "/top/activity/slide07.jpg",
                  "/top/activity/slide08.jpg",
                ].map((src, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="inline-block w-64 h-80 relative shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`活動写真 ${i + 1}`}
                      fill
                      className="object-cover shadow"
                    />
                  </div>
                ))
              )}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
