"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import NewsListSection from "@/components/listsection";

const images = ["mv01.jpg", "mv02.jpg", "mv03.jpg"];
const interviewItems = [
  {
    title: "学生メンバーが語るリアルな経験と成長",
    date: "2025-05-26",
    tag: "インタビュー",
    link: "/interview/student",
  },
  {
    title: "現役社員が語るやりがいとエトワールの文化",
    date: "2025-05-20",
    tag: "インタビュー",
    link: "/interview/staff",
  },
  {
    title: "地域連携プロジェクトを通じた学びとは",
    date: "2025-05-12",
    tag: "インタビュー",
    link: "/interview/ceo",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative h-[1000px] ">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="absolute inset-0 z-0"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[1000px]">
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
            <h1 className="p-3 md:p-5 text-2xl md:text-5xl font-bold leading-tight text-white drop-shadow-lg whitespace-nowrap">
              <span className="ml-4 text-2xl md:text-[4rem] font-bold text-white drop-shadow-lg">
                我々
              </span>
              とともに
            </h1>

            <div className="flex items-center p-3 md:p-5">
              <div className="flex items-center space-x-2">
                <div className="bg-white rounded px-2 py-1 relative -mt-6 shadow">
                  <Image
                    src="/top/mv-future.png"
                    alt=""
                    width={175}
                    height={175}
                    className="block"
                  />
                </div>

                <div className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
                  を
                  <span className="ml-4 text-2xl md:text-[5rem] font-bold text-white drop-shadow-lg">
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
            <span className="mx-6">Let’s build our future together.</span>
            <span className="mx-6">Let’s build our future together.</span>
          </div>
        </div>
      </section>
      {/* <section
        id="s01"
        className="relative bg-white py-16 about overflow-hidden"
      >
        <div className="absolute top-0 left-0 z-0 w-[624px] h-[926px] fade-in-up">
          <Image
            src="/top/img01.jpg"
            alt=""
            width={400}
            height={200}
            className="object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 z-0 w-[752px] h-[1131px] fade-in-up">
          <Image
            src="/top/img02.jpg"
            alt=""
            width={400}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in-up mb-6">
            <h2 className="text-[8rem] font-bold tracking-tight text-gray-800">
              About
            </h2>
            <span className="text-lg text-blue-600">エトワールについて</span>
          </div>
          <div className="fade-in-up text-xl font-semibold mb-4">
            「リアルなビジネスで成長する！
            <br />
            エトワールで未来を切り開こう」
          </div>
          <p className="fade-in-up text-gray-700 mb-6">
            エトワールは、学生がビジネスの最前線で実践的なスキルを身につけるための企業です。
            営業、育成、経営のリアルな経験を通じて、自己成長を実感できます。
            サポートし合いながら、楽しみつつ真剣に取り組む環境が整っており、
            自分の限界に挑戦し、将来の可能性を広げる絶好のチャンスです。
          </p>
          <div className="fade-in-up">
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              エトワールについて
            </Link>
          </div>
        </div>
      </section> */}
      <section className="service relative bg-white mt-20 mb-12 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="ml-16 text-2xl font-bold text-blue-800 border-b-4 border-blue-500 inline-block">
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
              <div className="fade-in-up">
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
                  <h3 className="text-xl font-black text-gray-800">
                    インターン事業
                  </h3>
                </div>
                <p className="text-gray-700 font-semibold">
                  大手通信キャリアのイベント営業を通じて、営業力・育成力・マネジメント力を養う事業を展開します。
                </p>
              </div>

              <div className="fade-in-up">
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
                  <h3 className="text-xl font-black text-gray-800">
                    イベント事業
                  </h3>
                </div>
                <p className="text-gray-700 font-semibold">
                  大学生サークルや学生団体と連携し、スポーツや各種イベントを通じて若年層と企業をつなぐ協賛型のマッチング事業を展開します。
                </p>
              </div>
              <div className="fade-in-up">
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
                  <h3 className="text-xl font-black text-gray-800">
                    就活支援事業
                  </h3>
                </div>
                <p className="text-gray-700 font-semibold">
                  キャリア設計をサポートするプログラムを提供し、早期から主体的に行動できる人材を育成する就活支援事業を展開します。
                </p>
              </div>

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
      {/* <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-center">インタビュー</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "学生インターンが語る、現場での学びとは",
                image: "/top/person01.jpg",
                date: "2024.11.20",
                description:
                  "京都での実務経験を通して、成長した学生のリアルな声をお届けします。",
                link: "/interview/student",
              },
              {
                title: "若手社員の挑戦とキャリア形成",
                image: "/top/person02.jpg",
                date: "2025.03.05",
                description:
                  "エトワールでの仕事がどのようにキャリアにつながっているのかを深掘り。",
                link: "/interview/staff",
              },
              {
                title: "代表が語る、エトワールの未来像",
                image: "/top/person03.jpg",
                date: "2025.06.01",
                description:
                  "代表の想いとビジョン、地域社会への貢献についてのメッセージ。",
                link: "/interview/ceo",
              },
            ].map(({ title, image, date, description, link }) => (
              <Link
                href={link}
                key={title}
                className="block bg-gray-50 rounded-lg shadow hover:shadow-lg transition overflow-hidden"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-1">{date}</p>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/interview"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              インタビュー一覧を見る →
            </Link>
          </div>
        </div>
      </section> */}
      <section className="overflow-hidden bg-gray-50  p-0 m-0">
        <div className="whitespace-nowrap animate-scroll flex">
          {[
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
              key={index}
              className="inline-block w-64 h-80 relative shrink-0"
            >
              <Image
                src={src}
                alt={`活動写真 ${index + 1}`}
                fill
                className="object-cover shadow"
              />
            </div>
          ))}
          {[
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
              key={`dup-${index}`}
              className="inline-block w-64 h-80 relative shrink-0"
            >
              <Image
                src={src}
                alt={`活動写真（複製） ${index + 1}`}
                fill
                className="object-cover shadow"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
