import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white  text-white pt-5">
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

      {/* <section className="relative h-[400px] ">
        <div className="relative w-full h-[400px]">
          <Image
            src="/about/contact.jpg"
            alt=""
            fill
            className="object-cover brightness-90"
          />
        </div>
        <div className="absolute inset-0 z-20 max-w-6xl mx-auto mt-20">
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
      </section> */}

      <section className=" py-24">
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
      <div className=" bg-gray-900 w-full px-6 py-12 grid gap-10 grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
        <div className="flex flex-col items-center space-y-6 text-center">
          <ul className="flex flex-wrap justify-center gap-x-6">
            <li>
              <Link href="/" className="hover:text-blue-600">
                トップ
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                会社概要
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-blue-600">
                サービス
              </Link>
            </li>
            <li>
              <Link href="/interview" className="hover:text-blue-600">
                インタビュー
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                お問い合わせ
              </Link>
            </li>
          </ul>
          <ul className="flex flex-wrap justify-center gap-x-6">
            <li>
              <Link href="/terms" className="hover:text-blue-600">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-600">
                プライバシーポリシー
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-white py-4 text-xs text-white">
        © {new Date().getFullYear()} YourCompany Inc. All rights reserved.
      </div>
    </footer>
  );
}
