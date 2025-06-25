import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "学生とともに創る",
    desc: "共創で生まれるイノベーション。",
    icon: "/top/innovation.png",
  },
  {
    title: "地域密着",
    desc: "京都・宇治を拠点に広く社会貢献。",
    icon: "/top/area.png",
  },
  {
    title: "実践型教育",
    desc: "体験を通じてスキルと人間性を育む。",
    icon: "/top/education.png",
  },
  {
    title: "企業連携",
    desc: "ビジネスの現場と学生が共に歩む。",
    icon: "/top/partnership.png",
  },
];

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative h-[800px] overflow-hidden animate-fade-in">
        <div className="absolute inset-0 md:right-0">
          <Image
            src="/top/hero.jpg"
            alt="エトワールの活動"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
          <div className="p-8 md:p-12 text-center w-full flex flex-col items-center animate-slide-up">
            <h1 className="text-2xl md:text-5xl font-bold leading-tight whitespace-nowrap overflow-hidden text-ellipsis">
              学生とともに、地域に根ざしたビジネスを創る。
            </h1>
            <p className="text-xs md:text-lg text-gray-700 mt-4 mb-6 whitespace-nowrap text-center animate-fade-in delay-200">
              株式会社エトワールは、京都・宇治を拠点に実践を通して“人が育ち、地域が育つ”教育・ビジネスを展開しています。
            </p>
            <Link
              href="/about"
              className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-700 transition animate-pop-in delay-300"
            >
              エトワールについて詳しく →
            </Link>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-16 py-24 text-center bg-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-gray-800">
          エトワールの特徴
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {" "}
          {features.map(({ title, desc, icon }) => (
            <div
              key={title}
              className="bg-gray-50 rounded-lg p-8 shadow hover:shadow-lg transition duration-300 transform hover:scale-105 animate-fade-in"
            >
              <Image
                src={icon}
                alt={title}
                width={100}
                height={100}
                className="mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-16 text-gray-800 animate-fade-in">
            事業内容
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                label: "インターン事業",
                desc: "実務経験を通じて学生が成長するプログラムを提供しています。",
              },
              {
                label: "イベント事業",
                desc: "地域や企業と連携した交流イベントを企画・運営しています。",
              },
              {
                label: "就活支援事業",
                desc: "プロジェクトを構想中です。",
              },
            ].map(({ label, desc }, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-3xl shadow-md border-t-4 border-blue-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 animate-fade-in"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {label}
                </h3>
                <p className="text-gray-600 text-xs whitespace-nowrap">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-blue-800 border-b-4 border-blue-500 inline-block mb-10">
            Interview
          </h2>
          <div className="border-t-4 border-blue-500 bg-white shadow-lg rounded-lg p-6">
            <div className="space-y-6">
              {[
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
              ].map(({ title, date, tag, link }) => (
                <Link
                  href={link}
                  key={title}
                  className="block border-b pb-4 last:border-none"
                >
                  <div className="text-sm text-gray-500 mb-1">
                    {date}
                    <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 hover:underline">
                    {title}
                  </h3>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/interview"
                className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
              >
                インタビューをもっと見る →
              </Link>
            </div>
          </div>
        </div>
      </section>

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

      <section className="overflow-hidden bg-gray-50">
        <div className="whitespace-nowrap animate-scroll flex">
          {[
            "/top/activity/slide01.jpg",
            "/top/activity/slide02.jpg",
            "/top/activity/slide03.jpg",
            "/top/activity/slide04.jpg",
            "/top/activity/slide05.jpg",
          ].map((src, index) => (
            <div
              key={index}
              className="inline-block w-64 h-80 relative shrink-0"
            >
              <Image
                src={src}
                alt={`活動写真 ${index + 1}`}
                fill
                className="object-cover rounded-lg shadow"
              />
            </div>
          ))}
          {[
            "/top/activity/slide01.jpg",
            "/top/activity/slide02.jpg",
            "/top/activity/slide03.jpg",
            "/top/activity/slide04.jpg",
            "/top/activity/slide05.jpg",
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

      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-3xl text-blue-800 font-black mb-6">Contact</div>
          <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-6">
            ご相談・ご応募はこちらから
          </h2>
          <p className="text-xl md:text-3xl font-semibold text-gray-800 mb-8 whitespace-nowrap">
            エトワールに関心のある方は、ぜひお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white text-lg px-8 py-4 rounded-full shadow-md hover:bg-gray-800 transition"
          >
            お問い合わせフォームへ →
          </Link>
        </div>
      </section>
    </main>
  );
}
