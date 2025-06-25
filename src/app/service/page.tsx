"use client";
import Image from "next/image";
import { Star, Users, CheckCircle } from "lucide-react";

const services = [
  {
    id: "s01",
    subtitle: "Intern",
    title: "インターン事業",
    heading: "ガクチカにもなる長期インターン",
    image: "/service/img01.jpg",
    description:
      "この長期インターンに参加したくてエトワールに来てくれる子がほとんどです！営業初心者でも安心して始められ、普通の大学生では経験できない成長が得られます。",
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
    image: "/service/img05.jpg",
    description:
      "大学生サークル・学生団体などと連携し、スポーツイベント・各種イベントを主催。学生と企業を結びつける事業です。",
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
    image: "/service/img09.jpg",
    description:
      "個別相談や自己分析支援などを通じて、学生のキャリア形成を支援。信頼と実績の支援体制を整えています。",
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

export default function ServiceSection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-blue-900">
            Our Services
          </h2>
          <p className="text-lg text-blue-600 mt-2">
            私たちが大学生に届ける3つの価値
          </p>
        </div>

        <div className="space-y-32">
          {services.map(
            (
              { id, title, subtitle, heading, image, description, points },
              index
            ) => (
              <div
                key={id}
                className={`flex flex-col-reverse md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text + Points */}
                <div className="md:w-1/2">
                  <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-2">
                    {subtitle}
                  </p>
                  <h3 className="text-3xl font-bold text-blue-800 mb-4">
                    {heading}
                  </h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-wrap mb-6">
                    {description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {points.map(({ text, icon: Icon, desc }, i) => (
                      <div
                        key={i}
                        className="bg-white border border-blue-100 rounded-xl shadow-md hover:shadow-lg p-5 transition"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="text-blue-600 w-5 h-5" />
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

                {/* Image */}
                <div className="md:w-1/2">
                  <div className="rounded-3xl overflow-hidden shadow-xl group">
                    <Image
                      src={image}
                      alt={title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
