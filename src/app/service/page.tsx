"use client";
import Image from "next/image";
import NewsListSection from "@/components/listsection";
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

const data = [
  { name: "Jan", value: 50 },
  { name: "Feb", value: 80 },
  { name: "Mar", value: 120 },
  { name: "Apr", value: 200 },
];
const companies = [
  "楽天グループ株式会社",
  "富士通",
  "NEC",
  "野村証券",
  "三菱UFJモルガンスタンレー証券",
  "三菱電機",
  "ベイカレント・コンサルティング",
  "伊藤忠テクノソリューションズ",
  "NTTコムウェア",
  "住友林業",
  "森永乳業",
  "味の素AGF",
  "三菱商事プラスチック",
  "エン・ジャパン株式会社",
  "ファーストリテーリング",
  "DYM",
  "株式会社ノースサンド",
  "レイスグループ",
  "岡三証券",
  "レバレジーズ",
];

const services = [
  {
    id: "s01",
    subtitle: "Intern",
    title: "インターン事業",
    heading: "ガクチカにもなる長期インターン",
    image: "/service/intern.jpg",
    description:
      "この長期インターンに参加したくてエトワールに来てくれる子がほとんどです！ \n営業初心者でも安心して始められ、普通の大学生では経験できない成長が得られます。",
    points: [
      {
        text: "営業力・育成力・経営力の習得",
        icon: CheckCircle,
        desc: "実践で身につく3大スキル。社会人基礎力も格段にアップ。",
      },
      {
        text: "実践型フィードバック体制",
        icon: Star,
        desc: "失敗も糧に。先輩からの手厚い指導でスピード成長。",
      },
      {
        text: "学年・学部不問で挑戦可能",
        icon: Users,
        desc: "どんな背景でもチャンスは平等。",
      },
    ],
  },
  {
    id: "s02",
    subtitle: "Event",
    title: "イベント事業",
    heading: "大学生が1から作るイベント事業",
    image: "/service/event.jpg",
    description:
      "大学生サークル・学生団体などと連携し、\nスポーツイベント・各種イベントを主催。学生と企業を結びつける事業です。",
    points: [
      {
        text: "学生主体のイベント企画・運営",
        icon: Users,
        desc: "アイデアから実行まで学生主導で推進。",
      },
      {
        text: "企業連携によるプロモーション",
        icon: CheckCircle,
        desc: "スポンサー企業との共同企画で現場経験。",
      },
      {
        text: "年間開催数多数・実績豊富",
        icon: Star,
        desc: "蓄積されたノウハウと成功事例。",
      },
    ],
  },
  {
    id: "s03",
    subtitle: "Support",
    title: "就活支援",
    heading: "未来を切り拓く就活支援",
    image: "/service/support.jpg",
    description:
      "個別相談や自己分析支援などを通じて、\n学生のキャリア形成を支援。信頼と実績の支援体制を整えています。",
    points: [
      {
        text: "自己分析・ES添削・模擬面接",
        icon: Star,
        desc: "基本を徹底的に磨くことで、自分だけの強みを発見。",
      },
      {
        text: "キャリアコーチによる個別支援",
        icon: Users,
        desc: "あなたに合ったアドバイスで志望企業対策も万全。",
      },
      {
        text: "大手・ベンチャー問わず内定実績",
        icon: CheckCircle,
        desc: "安心の支援実績と業界ネットワーク。",
      },
    ],
  },
];
const newsItems = [
  {
    title: "新しい学生支援プログラムがスタート",
    date: "2025-06-12",
    tag: "ニュース",
    link: "/news/support-program-started",
  },
  {
    title: "インターン成果報告会を実施しました",
    date: "2025-05-28",
    tag: "イベント",
    link: "/news/intern-report-meeting",
  },
  {
    title: "AIマッチング機能を大幅アップデート",
    date: "2025-05-10",
    tag: "アップデート",
    link: "/news/ai-matching-update",
  },
];

export default function ServiceSection() {
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
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
          <div className="w-full">
            <Image
              src="/service/csr.jpg"
              alt="学生支援"
              width={800}
              height={500}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold text-blue-900 mb-4">
              学生支援プラットフォーム
            </h2>
            <p className="text-lg text-gray-700 mb-10">
              面談進捗・企業マッチング・フィードバックを一括管理。
              <br className="hidden md:block" />
              成長を可視化し、よりよい支援を。
            </p>
          </div>
        </div>

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
      <NewsListSection title="News" items={newsItems} linkToAll="/news" />
    </main>
  );
}
