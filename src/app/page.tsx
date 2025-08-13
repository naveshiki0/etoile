"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import NewsListSection, { NewsTab } from "@/components/listsection";
import { slideImg, images, aboutItems, serviceItems } from "@/data/top";
import { allInterviews } from "@/data/interview";
import { newsItems } from "@/data/news";

export default function AboutPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("etoile_intro_shown");
    if (seen) return void setShowIntro(false);
    sessionStorage.setItem("etoile_intro_shown", "true");
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const interviewItems = allInterviews.map((item) => ({
    title: item.title,
    date: item.date,
    category: item.category,
    imageUrl: item.image,
    link: `/interview/${item.slug}`,
  }));

  const formattedNewsItems = newsItems.slice(0, 10).map((item) => ({
    title: item.title,
    date: item.date,
    category: item.category,
    imageUrl: item.thumbnail,
    link: `/news/${item.slug}`,
  }));

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
          <div className="absolute w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] animate-custom-ping border-2 border-blue-300 rounded-full opacity-30" />
          <div
            className="absolute inset-0 bg-[radial-gradient(circle,_#ccc_1px,_transparent_1px)]"
            style={{ backgroundSize: "18px 18px" }}
          />
          <div className="relative z-10 text-center animate-fadein px-4">
            <Image
              src="/etoile_logo.svg"
              alt="ETOILE Logo"
              width={160}
              height={160}
              className="mx-auto drop-shadow-xl sm:w-[180px] sm:h-[180px]"
            />
            <p className="mt-4 text-blue-500 text-xs sm:text-sm font-mono tracking-widest animate-flicker">
              我々とともに将来を創りに行こう
            </p>
          </div>
        </div>
      ) : (
        <>
          <section className="relative h-[600px] md:h-[900px] font-sans">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="absolute inset-0 z-0"
            >
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className="relative w-full h-[600px] md:h-[900px]">
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

            <div className="absolute inset-0 flex items-center justify-start z-20 px-4 sm:px-6 md:px-10 pt-[env(safe-area-inset-top)]">
              <div className="w-full max-w-6xl ml-0 md:ml-48 pl-0 md:pl-4 space-y-3 sm:space-y-6 text-left">
                <h1 className="text-white font-extrabold flex flex-wrap justify-start items-baseline gap-2 sm:gap-3 md:gap-4 leading-none tracking-tight">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl drop-shadow-lg">
                    我々
                  </span>
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-medium">
                    とともに
                  </span>
                </h1>
                <h2 className="text-white flex flex-wrap justify-start items-baseline gap-2 sm:gap-3 md:gap-4 leading-tight tracking-tight">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-blue-500 drop-shadow-sm">
                    将来
                  </span>
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-medium">
                    を
                  </span>
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-lg">
                    創
                  </span>
                  <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-white/80 font-medium">
                    りに行こう
                  </span>
                </h2>
              </div>
            </div>

            <div
              className="
    absolute
    bottom-6 sm:bottom-10
    w-full
    z-30
    flex
    justify-center
    px-4 sm:px-6
    pointer-events-none
  "
            >
              <div className="flex items-center w-full max-w-5xl justify-center sm:justify-between">
                <div className="hidden sm:block flex-1 border-t border-white/30" />
                <span className="px-4 sm:px-6 text-xs sm:text-sm md:text-xl text-white/80 tracking-wider font-medium whitespace-nowrap text-center">
                  Let’s build our future together.
                </span>
                <div className="hidden sm:block flex-1 border-t border-white/30" />
              </div>
            </div>
          </section>

          <section id="about" className="py-14 sm:py-20 bg-blue-900">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
              <div className="md:col-span-4 h-48 sm:h-64 md:h-[600px] relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src="/about/mv.jpg"
                  alt="About Visual"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="md:col-span-8 flex flex-col space-y-10 sm:space-y-16">
                <div className="text-center px-2">
                  <h2 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                    About
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-36 h-1 bg-blue-600 rounded"></span>
                  </h2>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-white">
                    Three Pillars of Growth
                  </p>
                  <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-white/90">
                    実践型インターン・学生主体イベント・就活支援で主体的成長を後押しします。
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12">
                  {aboutItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow py-6 sm:py-14 px-4 sm:px-6 flex flex-col items-center"
                    >
                      <div className="bg-blue-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                        <item.icon className="text-blue-600" size={28} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1.5 sm:mb-2 text-center">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-900 text-center">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center pt-5 sm:pt-7">
                  <div className="hidden sm:block flex-1 h-px bg-gray-300" />
                  <Link
                    href="/about"
                    className="mx-auto sm:mx-6 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-400 text-white rounded-full font-medium hover:bg-gray-100/10 transition"
                  >
                    詳しく見る
                  </Link>
                  <div className="hidden sm:block flex-1 h-px bg-gray-300" />
                </div>
              </div>
            </div>
          </section>

          <section id="service" className="py-14 sm:py-20 bg-blue-900">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-10">
              <div className="flex flex-col-reverse md:grid md:grid-cols-12 gap-6 sm:gap-8">
                <div className="md:col-span-8 flex flex-col space-y-10 sm:space-y-16">
                  <div className="text-center px-2">
                    <h2 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
                      Service
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 sm:w-36 h-1 bg-blue-600 rounded" />
                    </h2>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg font-medium text-white">
                      Empowering Your Future
                    </p>
                    <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-white/90">
                      多彩な事業を通じて、学生のキャリアと可能性を最大化します。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-12">
                    {serviceItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow py-6 sm:py-8 px-4 sm:px-6 flex flex-col items-center"
                      >
                        <div className="bg-blue-100 p-3 sm:p-4 rounded-full mb-3 sm:mb-4">
                          <item.icon className="text-blue-600" size={28} />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1.5 sm:mb-2 text-center">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 text-center whitespace-pre-wrap">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center pt-5 sm:pt-7">
                    <div className="hidden sm:block flex-1 h-px bg-gray-300" />
                    <Link
                      href="/service"
                      className="mx-auto sm:mx-6 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-400 text-white rounded-full font-medium hover:bg-gray-100/10 transition"
                    >
                      詳しく見る
                    </Link>
                    <div className="hidden sm:block flex-1 h-px bg-gray-300" />
                  </div>
                </div>

                <div className="md:col-span-4 h-48 sm:h-64 md:h-[600px] relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src="/service/mv.jpg"
                    alt="Service Visual"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </section>

          <NewsListSection tabs={newsTabs} defaultTabKey="interview" />

          <section className="overflow-hidden p-0 m-0">
            <div className="whitespace-nowrap animate-scroll flex">
              {[...Array(2)].flatMap((_, idx) =>
                slideImg.map((src, i) => (
                  <div
                    key={`${idx}-${i}`}
                    className="inline-block w-40 h-56 sm:w-56 sm:h-72 lg:w-64 lg:h-80 relative shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`活動写真 ${i + 1}`}
                      fill
                      className="object-cover object-top"
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
