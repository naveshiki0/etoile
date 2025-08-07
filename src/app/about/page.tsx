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
  values,
  icons,
  universityInfo,
  companyInfo,
} from "@/data/about";
[dataGrade, dataGender, dataIntern, dataFaculty].forEach((data) => {
  data.datasets[0].backgroundColor = bluePalette;
});

ChartJS.register(ArcElement, Tooltip, Legend);

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <section className="relative h-[600px] md:h-[900px] overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/about/mv.jpg"
            alt=""
            fill
            className="object-cover object-right-top brightness-90"
          />
          <div
            className="absolute z-20 hidden md:flex gap-16 pointer-events-none"
            style={{ top: "500px", right: "-200px" }}
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
            <h1 className="pl-3 md:pl-5 text-5xl md:text-[6rem] font-bold leading-tight text-white drop-shadow-lg whitespace-nowrap">
              About
            </h1>

            <div className="flex items-center pl-3 md:pl-5 mt-4 md:mt-8">
              <div className="text-2xl md:text-5xl font-bold text-white drop-shadow-lg">
                エトワールについて
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white">
        <nav className="bg-white border-t border-gray-200 py-8 flex flex-wrap justify-center items-center gap-10 text-lg md:text-xl font-bold text-blue-900 tracking-wide">
          <a
            href="#mission"
            className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200"
          >
            <span>Mission</span>
            <span className="text-sm">▼</span>
          </a>
          <span className="hidden md:block w-px h-6 bg-gray-300" />
          <a
            href="#vision"
            className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200"
          >
            <span>Vision</span>
            <span className="text-sm">▼</span>
          </a>
          <span className="hidden md:block w-px h-6 bg-gray-300" />
          <a
            href="#values"
            className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200"
          >
            <span>Values</span>
            <span className="text-sm">▼</span>
          </a>
          <span className="hidden md:block w-px h-6 bg-gray-300" />
          <a
            href="#composition"
            className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200"
          >
            <span>Composition</span>
            <span className="text-sm">▼</span>
          </a>
          <span className="hidden md:block w-px h-6 bg-gray-300" />
          <a
            href="#message"
            className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200"
          >
            <span>Message</span>
            <span className="text-sm">▼</span>
          </a>
          <span className="hidden md:block w-px h-6 bg-gray-300" />
          <a
            href="#outline"
            className="flex items-center space-x-2 hover:text-blue-700 transition-colors duration-200"
          >
            <span>Outline</span>
            <span className="text-sm">▼</span>
          </a>
        </nav>
      </section>
      <section id="mission" className="bg-blue-900 py-24 px-6">
        <div className="container mx-auto px-6 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:items-stretch items-center">
            <div className="space-y-6">
              <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="inline-flex items-center text-sm uppercase font-medium text-white">
                  <span className="px-2">｜</span>
                  <span>MISSION</span>
                  <span className="px-2">｜</span>
                </div>
                <h2 className="text-xl md:text-4xl font-bold text-white">
                  -個の才能を磨き、周りを魅了する-
                </h2>
              </div>
              <p className="text-xl text-gray-100 leading-relaxed py-5">
                個の才能を磨き、周りを魅了する。全ての人に、可能性がある。
                <br />
                全ての人は、自分だけの輝きを持っており、その輝き方は一人ひとり違う。
                <br />
                だから、誰かと比べる必要は一切ない。
                <br />
                まずは、自分自身の才能を磨き上げることだけに集中して欲しい。
                <br />
                その未完成ゆえの強い輝きこそが、何よりも人の心を打ち、周りを強く惹きつける。
              </p>
              <p className="text-xl text-gray-100 leading-relaxed">
                一人の真剣な挑戦は「自分もやっていいんだ」という、
                周りの人への勇気の証明になる。
                <br />
                そうして、同じ志を持つ仲間が、自然とあなたの周りに集まってくる。
                <br />
                私たちは、その繋がりが生まれる「場」そのものを創り出すことで、
                個人の輝きを、社会を照らすチームの輝きへと昇華させていきます。
              </p>
            </div>

            <div className="flex flex-col justify-between">
              <div className="w-full h-1 bg-white rounded-lg" />
              <div className="mt-4">
                <Image
                  src="/about/mission.jpg"
                  alt="Mission Visual"
                  width={600}
                  height={320}
                  className="w-full h-68 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
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
      <section id="vision" className="bg-blue-900 py-24 px-6">
        <div className="container mx-auto px-6 space-y-12">
          <div className="text-white text-center md:text-left">
            <div className="inline-flex items-center text-sm uppercase font-medium mb-2">
              <span className="px-2">｜</span>
              <span>VISION</span>
              <span className="px-2">｜</span>
            </div>
            <h2 className="text-xl md:text-4xl font-bold">
              -若者の挑戦を支える、才能の源泉になる-
            </h2>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/about/vision.jpg"
              alt="Vision Visual"
              width={1200}
              height={300}
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-6 text-white leading-relaxed text-xl mx-auto">
            <p>
              誰もが心に火種をもっている。 「何かを成し遂げたい」という衝動
              「もっと知りたい」という好奇心 「自分を変えたい」という願い
              しかし、その尊い火種は「どうせ無理だ」という諦めや、
              <br />
              失敗への恐れ、社会の同調圧力によって
              誰にも気づかれないまま消えてしまいそうになる
            </p>
            <p>
              私たちは単なる『支援機関』にはならない。
              まず、私たち自身が誰よりも熱量の高い挑戦者であり続ける。
              現状に満足せず常に学び、成長し、大胆に行動する。
              <br />
              その挑戦から生まれる熱と経験から得られる知こそが、
              次世代の才能が次々と湧き出る「源泉」となる
            </p>
            <p>
              『一人の若者の成功は、次の挑戦者への道標となる』
              その無数の挑戦の光が集まり、
              社会全体を照らす大きな希望の光へと変わっていく。
            </p>
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
      <section className="bg-blue-900 text-white py-16" id="values">
        <div className="container mx-auto px-6 space-y-12">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center text-sm uppercase font-medium mb-2">
              <span className="px-2">｜</span>
              <span>VALUES</span>
              <span className="px-2">｜</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold pt-5">
              -私たちの価値観・行動指針-
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-stretch">
            <div className="md:col-span-7 h-full">
              <Image
                src="/about/value.jpg"
                alt="Feature"
                width={800}
                height={600}
                className="rounded-xl w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-5 flex flex-col space-y-10 h-full">
              {values.map(({ title, body }, idx) => {
                const Icon = icons[idx];
                return (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="p-3 bg-white bg-opacity-20 rounded-md">
                      <Icon className="w-8 h-12 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold">{title}</h4>
                      <p className="text-sm mt-2 text-white/90">{body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <div className="relative -mt-px">
        <div className="bg-white h-20"></div>
        <div
          className="absolute top-0 left-0 w-full overflow-hidden leading-none"
          style={{ transform: "translateY(-1px)" }}
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <polygon points="0,0 1200,0 0,120" fill="#1e3a8a" />
          </svg>
        </div>
      </div>
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
              {universityInfo.map((uni) => (
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
      <section id="message" className="scroll-mt-24 py-20 bg-[#F8FAFC]">
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
                <strong className="text-lg">
                  「どうせ無理」という言葉を、この世界からなくしたい。
                </strong>
              </p>
              <p>
                私たちがこの組織を始めた原点は、私自身が学生時代に体験した、
                <br />
                一つの強い「違和感」にあります。
                <br />
                私自身、本当の意味で成長を促してくれる企業に出会うことはできませんでした。
              </p>
              <p>
                目にしたのは、フルコミッションで心折れる仲間や、単なる労働力としてしか見られないインターンの現実。
                <br />
                才能と情熱を持った学生が、挑戦を諦めてしまう環境は、あまりにも多すぎたのです。
              </p>
              <p>
                だからこそ、私たちは決意しました。
                <br />
                全ての人は、自分だけの輝きを持つ「星」であると信じ、その可能性に真正面から向き合う組織を創り上げると。
              </p>
              <p>
                私たちが目指すのは、単に営業スキルを教えるだけの会社ではありません。
                <br />
                志を同じくする仲間と手を取り、私たち自身が挑戦者として成長し続けることで、
                <br />
                若者のための「未来を切り拓くプラットフォーム」を構築することです。
              </p>
              <p>
                学生時代の挑戦や努力、そして葛藤の全てが、
                <br />
                その人の人生を豊かにする、何物にも代えがたい輝きとなると、私たちは本気で信じています。
              </p>
              <p>
                もし、あなたが今の社会のモノサシに息苦しさを感じていたり、
                <br />
                自分の内に眠る情熱の使い道を探しているなら、ぜひ一度、私たちのコミュニティの扉を叩いてみてください。
              </p>
              <p>
                関わる全ての人々と共に、未来を切り拓いていく。
                <br />
                私たちの挑戦に、終わりはありません。
              </p>
              <p className="mt-6 text-right text-xl font-bold text-blue-900 underline underline-offset-4 decoration-2 decoration-blue-800">
                代表取締役 大槻将樹
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="outline" className="scroll-mt-24 py-28 bg-blue-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white">会社概要</h2>
            <p className="text-white/80 text-lg">Outline</p>
          </div>
          <div className=" rounded-2xl shadow-lg overflow-hidden">
            <dl className="divide-y divide-gray-200">
              {companyInfo.map(({ label, value }, i) => (
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
