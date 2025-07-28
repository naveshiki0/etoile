"use client";

import Image from "next/image";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  dataGrade,
  dataGender,
  dataIntern,
  dataFaculty,
  options,
  bluePalette,
} from "@/data/about";
import { Play, Award, Sun, BadgeCheck, Search, BookOpen } from "lucide-react";
[dataGrade, dataGender, dataIntern, dataFaculty].forEach((data) => {
  data.datasets[0].backgroundColor = bluePalette;
});

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AboutPage() {
  const values = [
    {
      title: "圧倒する",
      subtitle: "誰にも真似できないほどの成果で、周囲を魅了し突き抜ける。",
      body: `私たちは、自分の限界を超えて成果を出すことにこだわります。困難を乗り越える力と覚悟こそが、他者を惹きつけ、信頼を生むのです。圧倒的な成果によって、社会に存在価値を示します。圧倒とは、単に数値的な成績だけではありません。発想力、実行力、スピード、熱量、そのすべてで「自分にしかできない」領域に到達すること。どんな場面でも“エトワールらしさ”を持って周囲を巻き込み、突き抜ける存在であり続けます。`,
    },
    {
      title: "赫き輝かせる",
      subtitle: "自分が輝くだけでなく、仲間やチーム全体も照らし導く。",
      body: `「赫（あか）く輝く」とは、熱を持って照らすこと。個の光が集まり、チーム全体を照らすことで、本当の輝きが生まれると私たちは考えています。自分の成果や成長を誇るだけではなく、仲間を信じ、支え合い、互いの成功を全力で祝福する文化を育みます。個の力とチームの力を両立させることが、私たちの強さです。`,
    },
    {
      title: "誇れる自分であれ",
      subtitle: "日々の選択と行動に誇りを持ち、自分自身に胸を張る。",
      body: `大切なのは、他人の評価ではなく、自分自身に対する納得感。どんなときも「自分は正しい選択をした」と胸を張れるような行動を選び続けることが、人生を大きく変えていきます。仕事でも、生活でも、小さな積み重ねがやがて信念になる。その積み重ねが「誇れる自分」という土台を作り、信頼される存在につながるのです。`,
    },
    {
      title: "本質思考",
      subtitle: "表面的な現象ではなく、物事の根っこを捉える。",
      body: `表面的な問題や数字に振り回されず、「なぜ？」を繰り返して真の原因を突き止める。それが私たちの考える「本質思考」です。問題を深く掘り下げ、再現性ある仕組みを生み出すこと。答えを与えられるのではなく、自ら問い、考え、行動する。その力があれば、どんな環境でも成長できると信じています。`,
    },
    {
      title: "基礎基本を最大の武器に",
      subtitle: "当たり前を誰よりも高いレベルで徹底する。",
      body: `私たちは、華やかさやトレンドよりも、「基礎」を何よりも重視します。挨拶、時間厳守、準備、報連相――これらを徹底できる人が、最終的に一番強い。地味で目立たないことこそ、習慣化し、磨き続ける。基礎を極めることが、どんな挑戦にも耐えられる「武器」になるのです。`,
    },
  ];
  const icons = [Award, Sun, BadgeCheck, Search, BookOpen];

  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <section className="relative h-[900px] overflow-hidden">
        <div className="relative w-full h-[900px]">
          <Image
            src="/about/mv.jpg"
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
              About
            </h1>
            <div className="flex items-center pl-3 md:pl-5 mt-8">
              <div className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
                エトワールについて
              </div>
            </div>
          </div>
        </div>
      </section>
      <nav className="sticky top-0 z-30 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
        <ul className="flex justify-center items-center space-x-10 py-4 text-lg font-medium text-blue-800 tracking-wide">
          {[
            { label: "企業理念", href: "#philosophy" },
            { label: "メンバー構成", href: "#composition" },
            { label: "代表挨拶", href: "#message" },
            { label: "会社概要", href: "#outline" },
          ].map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative transition-colors duration-200 hover:text-blue-500"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section
        id="philosophy"
        className="bg-white py-24 px-6 relative overflow-hidden"
      >
        <div className="max-w-8xl mx-auto px-6">
          {/* Title & Copy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            {/* 見出し */}
            <div className="ml-8">
              <span className="px-2">｜</span>
              <span>Policy</span>
              <span className="px-2">｜</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                Corporate philosophy
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Into Reality
              </h2>
            </div>
            {/* 本文1 */}
            <p className="text-gray-600 leading-relaxed">
              At LeafLife, we are passionate about transforming outdoor spaces
              into breathtaking gardens that tell a unique story. Our journey
              began over a decade ago, driven by a shared love for nature
            </p>
            {/* 本文2 */}
            <p className="text-gray-600 leading-relaxed">
              and design. Since then, we have dedicated ourselves to creating
              gardens that enhance your property. Our solid commitment to
              sustainability, innovation, and collaboration has been the
              foundation of our success.
            </p>
          </div>
          {/* Video / Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 動画サムネイル */}
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/about/video-thumb.jpg"
                alt="Video thumbnail"
                width={600}
                height={400}
                className="object-cover w-full h-64 md:h-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button className="p-4 bg-white rounded-full">
                  <Play className="w-6 h-6 text-gray-800" />
                </button>
              </div>
            </div>
            {/* 静止画カード */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#F8FAFC] p-6 rounded-xl shadow-sm">
                <Image
                  src="/about/about01.jpg"
                  alt="個の才能を磨き周りを魅了する"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  個の才能を磨き周りを魅了する
                </h4>
                <p className="text-gray-700 leading-loose text-sm">
                  エトワールの社名は「星」を意味します。星が集まり輝くように、個々の才能が周囲を照らし、信頼と尊敬を集める存在になることを目指します。
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-xl shadow-sm">
                <Image
                  src="/about/about02.jpg"
                  alt="自分で将来を創り出す"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  自分で将来を創り出す
                </h4>
                <p className="text-gray-700 leading-loose text-sm">
                  他人任せのキャリアではなく、自ら考え選択する力を育てます。常識を疑い、新たな価値観を創造することで、自分らしい未来を切り拓きます。
                </p>
              </div>

              <div className="bg-[#F8FAFC] p-6 rounded-xl shadow-sm">
                <Image
                  src="/about/about02.jpg"
                  alt="挑戦と成長を支援する"
                  width={120}
                  height={120}
                  className="mb-4"
                />
                <h4 className="text-xl font-bold text-blue-800 mb-4">
                  挑戦と成長を支援する
                </h4>
                <p className="text-gray-700 leading-loose text-sm">
                  変化を恐れず、挑戦し続ける個人の成長を応援します。継続的に能力を高められる環境づくりこそが、真の自立と貢献を可能にします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-blue-900 text-white py-16">
        {/* container や max-w-screen-2xl などに変える */}
        <div className="container mx-auto px-6 space-y-12">
          {/* ── 上段：ラベル + 見出し ── */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center text-sm uppercase font-medium mb-2">
              <span className="px-2">｜</span>
              <span>VALUES</span>
              <span className="px-2">｜</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              We Are Different In Every Ways
            </h2>
          </div>

          {/* ── 下段：写真とテキスト並び ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            {/* 写真（左側） */}
            <div className="md:col-span-7">
              <Image
                src="/about/mv.jpg"
                alt="Feature"
                width={800}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
              />
            </div>

            {/* テキスト一覧（右側） */}
            <div className="md:col-span-5 flex flex-col space-y-10">
              {values.map(({ title, subtitle }, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3 bg-white bg-opacity-20 rounded-md">
                      <Icon className="w-8 h-12 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{title}</h4>
                      <p className="text-sm mt-2 text-white/90">{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="composition" className="py-24 bg-[#F8FAFC] scroll-mt-24 ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
              メンバー構成
            </h2>
            <p className="text-gray-500 text-lg">Composition</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
            {[
              { title: "学年", data: dataGrade },
              { title: "男女比", data: dataGender },
              { title: "インターン経験", data: dataIntern },
              { title: "学部", data: dataFaculty },
            ].map(({ title, data }) => (
              <div key={title} className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  {title}
                </h3>
                <Pie data={data} options={options} />
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-6xl mx-auto">
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              出身大学
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-lg tracking-wide leading-relaxed">
              {[
                "名古屋大学",
                "神戸大学",
                "関西大学",
                "関西学院大学",
                "同志社大学",
                "立命館大学",
                "立教大学",
                "名城大学",
                "中京大学",
                "京都産業大学",
                "近畿大学",
                "龍谷大学",
                "愛知大学",
                "摂南大学",
                "神戸学院大学",
                "京都橘大学",
                "他",
              ].map((uni) => (
                <span
                  key={uni}
                  className="bg-blue-50 text-blue-700 rounded-full px-4 py-2 shadow-sm select-none"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="message" className="scroll-mt-24 py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-extrabold text-blue-900">代表挨拶</h2>
            <p className="text-gray-500 text-lg">Message</p>
          </div>

          <div className="md:flex items-start gap-12 animate-fade-in">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/about/ceo.jpg"
                alt="代表写真"
                width={758}
                height={954}
                className="rounded-3xl shadow-xl"
              />
            </div>
            <div className="md:w-1/2 text-lg text-gray-700 space-y-6">
              <p>
                私たちは「carve out a new
                future（自分の未来は自分で切り開く）」をvisionに掲げ、“夢”や”目標“に向かって歩み出すことができる本質的な力を全社員が獲得できるように事業に日々精進しております。
              </p>
              <p>
                表面上のスキルではなく問題の根本を自ら考え、自信を持って行動に移せることはクライアントの皆様にとっても高い価値が提供できると考えております。
              </p>
              <p>
                その為には学生目線で社会を捉えると主に、毎日の事業を通して社員の実力を高め、関わる皆様の理想的な人生の実現に向けて引き続き、全力で取り組んで参ります。
              </p>
              <p className="mt-6 text-right font-semibold text-blue-900">
                代表取締役 大槻将樹
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="outline" className="scroll-mt-24 py-28 bg-blue-900">
        <div className="max-w-3xl mx-auto px-6">
          {/* 見出し */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white">会社概要</h2>
            <p className="text-white/80 text-lg">Outline</p>
          </div>

          {/* カード */}
          <div className=" rounded-2xl shadow-lg overflow-hidden">
            <dl className="divide-y divide-gray-200">
              {[
                { label: "社名", value: "株式会社エトワール" },
                { label: "設立", value: "2022年10月11日" },
                {
                  label: "所在地",
                  value: "〒611-0042 京都府宇治市小倉町南堀池79-8",
                },
                { label: "資本金", value: "百万円" },
                { label: "代表取締役", value: "大槻将樹" },
                { label: "従業員数", value: "100名" },
                {
                  label: "事業内容",
                  value: "イベント事業、インターン事業、就活支援",
                },
              ].map(({ label, value }, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 py-4"
                >
                  <dt className="text-sm uppercase text-white">{label}</dt>
                  <dd className="mt-1 md:mt-0 md:col-span-2 text-white font-medium">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
