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
    <main className="bg-gray-200">
      {showIntro ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white text-blue-900 overflow-hidden">
          <div className="absolute w-[300px] h-[300px] animate-custom-ping border-2 border-blue-300 rounded-full opacity-30" />
          <div className="absolute inset-0 bg-[url('/top/intro-grid.png')] bg-cover bg-center opacity-10" />

          <div className="relative z-10 text-center animate-fadein">
            <Image
              src="/etoile_logo.svg"
              alt="ETOILE Logo"
              width={180}
              height={70}
              className="mx-auto drop-shadow-xl"
            />
            <p className=" mt-4 text-blue-500 text-sm font-mono tracking-widest animate-flicker">
              我々とともに将来を創りに行こう
            </p>
          </div>
        </div>
      ) : (
        <>
          <section className="relative h-[900px] font-sans">
            {" "}
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
            <div className="absolute inset-0 bg-gray-400/20 z-10" />
            <div className="absolute inset-0 flex items-center justify-start z-20 px-4 md:px-10">
              <div className="w-full max-w-6xl ml-48 mr-auto pl-4 space-y-6 relative">
                {/* <div className="absolute -left-10 top-4 h-56 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-800 rounded-full shadow-lg animate-pulse" /> */}

                <h1 className="text-white font-extrabold flex items-baseline gap-4 leading-none">
                  <span className="text-7xl md:text-8xl drop-shadow-[2px_2px_4px_rgba(0,0,0,0.4)]">
                    我々
                  </span>
                  <span className="text-4xl md:text-5xl text-white/80 font-medium tracking-wider">
                    とともに
                  </span>
                </h1>

                <h2 className="text-white flex flex-wrap items-baseline gap-4 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-500 text-7xl md:text-8xl font-extrabold animate-fade-in-once drop-shadow-sm">
                    将来
                  </span>
                  <span className="text-4xl md:text-5xl text-white/80 font-medium">
                    を
                  </span>
                  <span className="text-7xl md:text-8xl text-white font-extrabold drop-shadow-[2px_2px_6px_rgba(0,0,0,0.3)]">
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
            {/* <div className="absolute bottom-0 w-full overflow-hidden z-30 pointer-events-none">
              <div className="inline-block animate-scroll-svg text-blue-600/40 font-bold text-[9rem] tracking-wide whitespace-nowrap">
                <span className="mx-6">Let’s build our future together.</span>
                <span className="mx-6">Let’s build our future together.</span>
              </div>
            </div> */}
          </section>

          <section className="service relative bg-gray-200 mt-20 mb-12 overflow-hidden">
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
                          <div className="bg-gray-200 rounded relative">
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
          <section className="service relative bg-gray-200 mt-20 mb-12 overflow-hidden">
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
                          <div className="bg-gray-200 rounded relative">
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

          <section className="overflow-hidden bg-gray-200 p-0 m-0">
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
