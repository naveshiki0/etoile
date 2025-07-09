"use client";
import Image from "next/image";
import NewsListSection from "@/components/listsection";
import { newsItems } from "@/data/news";
import { data, companies, services } from "@/data/service";
import { BriefcaseBusiness } from "lucide-react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ServiceSection() {
  const formattedItems = newsItems.slice(0, 10).map((item) => ({
    title: item.title,
    date: item.date,
    tag: item.tag,
    imageUrl: item.thumbnail,
    link: `/news/${item.slug}`,
  }));
  return (
    <main className="bg-gradient-to-b from-white via-blue-50  to-white scroll-smooth">
      <section className="relative h-[1000px] overflow-hidden">
        <div className="relative w-full h-[1000px]">
          <Image
            src="/service/mv.jpg"
            alt=""
            fill
            className="object-cover object-right-top brightness-90"
          />

          <div
            className="absolute z-20 flex gap-16 pointer-events-none"
            style={{
              top: "500px",
              right: "-200px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-[20px] bg-blue-600 opacity-80 animate-lineGrow origin-top"
                style={{
                  height: "900px",
                  transform: "rotate(45deg)",
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="p-8 md:p-12 w-4/5 flex flex-col animate-slide-up">
            <h1 className="pl-3 md:pl-5 text-[6rem] font-bold leading-tight text-white drop-shadow-lg whitespace-nowrap">
              Service
            </h1>
            <div className="flex items-center pl-3 md:pl-5 mt-8">
              <div className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
                事業内容
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-30">
          <h2 className="text-5xl pt-6 font-extrabold text-blue-900">
            Our Services
          </h2>
          <p className="text-lg text-blue-600 mt-2">
            私たちが大学生に届ける3つの価値
          </p>
        </div>

        <div className="space-y-16">
          {services.map(
            (
              { id, title, subtitle, heading, image, description, points },
              index
            ) => (
              <div
                key={id}
                className={`flex flex-col-reverse md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 items-center">
                  <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-1">
                    {subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    {heading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-4">
                    {description}
                  </p>

                  <div className="w-auto grid grid-cols-1 sm:grid-cols-1 gap-4">
                    {points.map(({ text, icon: Icon, desc }, i) => (
                      <div
                        key={i}
                        className="bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-lg p-5 transition"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="text-blue-600 w-3 h-3" />
                          <h4 className="text-base font-semibold text-blue-900">
                            {text}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-normal">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="md:w-1/2 pt-5">
                  <div className="overflow-hidden shadow-xl group">
                    <Image
                      src={image}
                      alt={title}
                      width={200}
                      height={200}
                      className="w-full  object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-8">
            支援実績の可視化
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={3}
              />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>{" "}
      <section className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4 flex justify-center items-center gap-2">
              <BriefcaseBusiness className="w-8 h-8 text-blue-700" />
              インターン生内定企業
            </h2>
            <p className="text-lg text-gray-700">
              実際に成果を出し、多くの優良企業へ内定しています。
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="bg-white shadow-lg rounded-xl p-4 flex items-center justify-center text-center text-blue-800 text-sm font-semibold hover:shadow-xl transition-all border border-blue-100"
              >
                {company}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">
              ※ 一部抜粋。その他にも多数の実績があります。
            </p>
          </div>
        </div>
      </section>{" "}
      <div>
        <NewsListSection
          title="News"
          subtitle="社内ニュース"
          items={formattedItems}
          linkToAll="/news"
        />
      </div>
    </main>
  );
}
