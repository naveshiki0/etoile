"use client";
import Image from "next/image";
import { data, companies } from "@/data/service";
import { Star, Users, CheckCircle, BriefcaseBusiness } from "lucide-react";
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
  return (
    <main className="bg-gray-59 scroll-smooth">
      <section className="relative h-[900px] overflow-hidden">
        <div className="relative w-full h-[900px]">
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
      </section>{" "}
      <section id="company" className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">our service</h2>
          <p className="text-gray-600 mb-8"></p>
        </div>
      </section>
      <section className="py-20 bg-blue-900 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-200 font-semibold mb-1 ml-5">
                | Intern |
              </p>
              <h3 className="text-4xl font-bold mb-4">
                -ガクチカにもなる長期インターン-
              </h3>
              <p className="leading-relaxed whitespace-pre-wrap text-white/90 mb-4">
                この長期インターンに参加したくてエトワールに来てくれる子がほとんどです！
                営業初心者でも安心して始められ、普通の大学生では経験できない成長が得られます。
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-white border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    主な事業内容
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  商業施設での販促イベントブースにて、携帯キャリア乗り換えやプラン替えが主な業務内容です。
                  売る商材は大手携帯キャリアなので、無理な売り込みは必要なく、お客様が本当に必要とする内容をヒヤリングし、商談することができます。
                </p>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    研修制度
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  マネジメント研修や、大学生同士のロープレなど共に成長し切磋琢磨し合える環境が整っています。
                  ランキングや表彰制度も取り入れており、頑張れば頑張るほど昇給できます。
                  また、現役社会人の社員さんと一緒に稼働するため、社会人力や人間力の勉強にもなります。
                </p>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    充実した学生生活
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  エトワールは⼤⽣同⼠プライベートでもしょっちゅう遊ぶほど仲がいいです！なじめるか心配なそこの君！⼤丈夫です！
                  現在新しく入ってくれる学生もいたり、先輩、同期とわるがいので自然と仲良くなれます。
                  また他大学⽣との人脈もつくれちゃいます！
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold mb-4 flex justify-center items-center gap-2">
                <BriefcaseBusiness className="w-8 h-8 text-white" />
                インターン生内定企業
              </h2>
              <p className="text-lg text-white/80">
                実際に成果を出し、多くの優良企業へ内定しています。
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {companies.map((company, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 border border-white/40 rounded-full text-lg text-white/80 hover:bg-white hover:text-blue-900 transition"
                >
                  {company}
                </span>
              ))}
            </div>

            <div className="text-center">
              <p className="text-sm text-white/50 pt-4">
                ※ 一部抜粋。その他にも多数の実績があります。
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-900 py-8">
        <div className="max-w-full mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            <hr className="flex-1 border-t border-white/50" />
            <svg
              className="w-6 h-6 text-white/80"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-6-6h12l-6 6z" />
            </svg>
            <hr className="flex-1 border-t border-white/50" />
          </div>
        </div>
      </div>
      <section className="py-20 bg-blue-900 px-6 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-blue-200 font-semibold mb-1 ml-5">
                | Event |
              </p>
              <h3 className="text-4xl font-bold mb-4">
                -大学生が1から作るイベント事業-
              </h3>
              <p className="leading-relaxed whitespace-pre-wrap text-white/90 mb-4">
                大学生サークル・学生団体などと連携し、
                スポーツイベント・各種イベントを主催。
                <br />
                学生と企業を結びつける事業です。
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-white border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    実例
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  実例としては、同志社サッカーサークルと連携したスポーツイベントの開催、有名アーティストをゲストとして招いた音楽イベントの開催があります。成長中の事業で実例が少なくはありますが、一緒に作り上げてくれる仲間を募集してます！
                </p>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    身につく能力
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  ０➡１の能力、交渉力、企画、実行力、集客力など、営業インターンとはまた違った能力が身に付きます。また、企業様に交渉しイベントを作り上げたという経験は有力なガクチカのエピソードにもなります。
                </p>
              </div>

              <div className="bg-white border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    達成感
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  企画から実行までに携わり、長い時間をかけて構築していくので、やりがいや達成感を得られやすいです。その分責任感を持って取り組む必要があります。もちろん、すべて1人で担うのではなく、心強い先輩や社長がサポートしてくれるのでご安心ください！挑戦したい人は是非、1度ご連絡ください！サポートします！
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/service/event.jpg"
              alt="内定企業ロゴ"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>{" "}
      <div className="bg-blue-900 py-8">
        <div className="max-w-full mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            <hr className="flex-1 border-t border-white/50" />
            <svg
              className="w-6 h-6 text-white/80"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-6-6h12l-6 6z" />
            </svg>
            <hr className="flex-1 border-t border-white/50" />
          </div>
        </div>
      </div>
      <section className="pt-24 pb-10 px-6  bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest font-semibold mb-1 ml-5">
                | Support |
              </p>
              <h3 className="text-4xl font-bold">-未来を切り拓く就活支援-</h3>
              <p className="leading-relaxed whitespace-pre-wrap">
                個別相談や自己分析支援などを通じて、 学生のキャリア形成を支援。
                <br />
                信頼と実績の支援体制を整えています。
              </p>
            </div>
            <div className="grid gap-4">
              <div className="bg-blue-50 border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Star className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    自己分析・ES添削・模擬面接
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  基本を徹底的に磨くことで、自分だけの強みを発見。
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    キャリアコーチによる個別支援
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  あなたに合ったアドバイスで志望企業対策も万全。
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl shadow-md p-5">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="text-blue-600 w-4 h-4" />
                  <h4 className="text-base font-semibold text-blue-900">
                    大手・ベンチャー問わず内定実績
                  </h4>
                </div>
                <p className="text-sm text-gray-800">
                  安心の支援実績と業界ネットワーク。
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#fff"
                  strokeWidth={4}
                />
                <CartesianGrid
                  stroke="rgba(255,255,255,0.3)"
                  strokeDasharray="5 5"
                />
                <XAxis dataKey="name" stroke="rgba(255,255,255,0.8)" />
                <YAxis stroke="rgba(255,255,255,0.8)" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e3a8a", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                  itemStyle={{ color: "#fff" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <div className="bg-blue-900 py-8">
        <div className="max-w-full mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            <hr className="flex-1 border-t border-white/50" />
            <svg
              className="w-6 h-6 text-white/80"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-6-6h12l-6 6z" />
            </svg>
            <hr className="flex-1 border-t border-white/50" />
          </div>
        </div>
      </div>
    </main>
  );
}
