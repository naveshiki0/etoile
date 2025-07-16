"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import NewsListSection from "@/components/listsection";
import { allInterviews } from "@/data/interview";

const images = ["mv01.jpg", "mv02.jpg", "mv03.jpg"];

const interviewItems = allInterviews.map((item) => ({
  title: item.title,
  date: item.date,
  category: item.category,
  imageUrl: item.image,
  link: `/interview/${item.slug}`,
}));

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("etoile_intro_shown");

    if (hasSeenIntro) {
      setShowIntro(false);
      return;
    }

    sessionStorage.setItem("etoile_intro_shown", "true");
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white">
      {showIntro ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-blue-900 overflow-hidden">
          <div className="absolute w-[300px] h-[300px] animate-ping border-2 border-blue-800 rounded-full opacity-30" />
          <div className="absolute w-[200px] h-[200px] animate-ping-slow border border-blue-900 rounded-full opacity-40" />

          <div className="absolute inset-0 bg-[url('/top/intro-grid.png')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 text-center animate-fadein">
            <Image
              src="/etoile_logo.svg"
              alt="ETOILE Logo"
              width={180}
              height={70}
              className="mx-auto drop-shadow-xl"
            />
            <p className="mt-4 text-blue-500 text-sm font-mono tracking-widest animate-flicker">
              WELCOME TO ETOILE
            </p>
          </div>
        </div>
      ) : (
        <>
          <section className="relative h-[900px]">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="absolute inset-0 z-0"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[900px]">
                    <Image
                      src={`/top/${img}`}
                      alt={`Hero Image ${i + 1}`}
                      fill
                      className="object-cover brightness-90"
                      priority={i === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute inset-0 bg-blue-600/20 z-10" />

            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="p-8 md:p-12 w-4/5 flex flex-col animate-slide-up">
                <h1 className="p-3 md:p-5 text-2xl md:text-7xl font-bold leading-tight text-white drop-shadow-lg whitespace-nowrap">
                  <span className="ml-4 text-2xl md:text-[8rem] font-bold text-white drop-shadow-lg">
                    我々
                  </span>
                  とともに
                </h1>

                <div className="flex items-center p-3 md:p-5">
                  <div className="flex items-center space-x-2">
                    <div className="bg-white rounded-2xl px-2 py-1 relative -mt-6 shadow">
                      <Image
                        src="/top/mv-future.png"
                        alt=""
                        width={250}
                        height={250}
                        className="block"
                      />
                    </div>
                    <div className="text-2xl md:text-7xl font-bold text-white drop-shadow-lg">
                      を
                      <span className="ml-4 text-2xl md:text-[7rem] font-bold text-white drop-shadow-lg">
                        創
                      </span>
                      りに行こう
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 w-full overflow-hidden z-30 pointer-events-none">
              <div className="inline-block animate-scroll-svg text-blue-600/40 font-bold text-[9rem] tracking-wide whitespace-nowrap">
                <span className="mx-6">Let’s build our future together.</span>
                <span className="mx-6">Let’s build our future together.</span>
              </div>
            </div>
          </section>

          <section className="service relative bg-white mt-20 mb-12 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="ml-16 text-4xl font-bold text-blue-800 border-b-4 border-blue-500 inline-block">
                About
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/2 fade-in-up">
                  <Image
                    src="/top/loglass_about.png"
                    alt="サービス画像"
                    width={900}
                    height={700}
                    className="w-full object-cover rounded"
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-5">
                  {["インターン事業", "イベント事業", "就活支援事業"].map(
                    (aboutTitle, i) => (
                      <div className="fade-in-up" key={i}>
                        <div className="flex items-center space-x-2">
                          <div className="bg-white rounded relative">
                            <Image
                              src="/top/star.png"
                              alt=""
                              width={20}
                              height={20}
                              className="block"
                            />
                          </div>
                          <h3 className="text-3xl font-black text-gray-800">
                            {aboutTitle}
                          </h3>
                        </div>
                        <p className="text-2xl text-gray-700 font-semibold">
                          {i === 0
                            ? "営業力・育成力・マネジメント力を養う事業"
                            : i === 1
                            ? "サークルと連携したマッチング型イベント事業"
                            : "主体的に動ける人材を育てる支援事業"}
                        </p>
                      </div>
                    )
                  )}

                  <div className="fade-in-up">
                    <Link
                      href="/service"
                      className="inline-block bg-black text-white text-sm py-2 px-6 rounded-2xl hover:bg-blue-700"
                    >
                      詳しく見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="service relative bg-white mt-20 mb-12 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="ml-16 text-4xl font-bold text-blue-800 border-b-4 border-blue-500 inline-block">
                Service
              </h2>

              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/2 fade-in-up">
                  <Image
                    src="/top/loglass_about.png"
                    alt="サービス画像"
                    width={900}
                    height={700}
                    className="w-full object-cover rounded"
                  />
                </div>

                <div className="w-full lg:w-1/2 space-y-5">
                  {["インターン事業", "イベント事業", "就活支援事業"].map(
                    (ServiceTitle, i) => (
                      <div className="fade-in-up" key={i}>
                        <div className="flex items-center space-x-2">
                          <div className="bg-white rounded relative">
                            <Image
                              src="/top/star.png"
                              alt=""
                              width={20}
                              height={20}
                              className="block"
                            />
                          </div>
                          <h3 className="text-3xl font-black text-gray-800">
                            {ServiceTitle}
                          </h3>
                        </div>
                        <p className="text-2xl text-gray-700 font-semibold">
                          {i === 0
                            ? "営業力・育成力・マネジメント力を養う事業"
                            : i === 1
                            ? "サークルと連携したマッチング型イベント事業"
                            : "主体的に動ける人材を育てる支援事業"}
                        </p>
                      </div>
                    )
                  )}

                  <div className="fade-in-up">
                    <Link
                      href="/service"
                      className="inline-block bg-black text-white text-sm py-2 px-6 rounded-2xl hover:bg-blue-700"
                    >
                      詳しく見る →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <NewsListSection
            title="Interview"
            items={interviewItems}
            linkToAll="/interview"
          />

          <section className="overflow-hidden bg-gray-50 p-0 m-0">
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
                ].map((src, index) => (
                  <div
                    key={`${idx}-${index}`}
                    className="inline-block w-64 h-80 relative shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`活動写真 ${index + 1}`}
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
