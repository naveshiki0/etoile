import Link from "next/link";
import Image from "next/image";
import { NewsItem } from "@/types/news";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className="block rounded-xl overflow-hidden shadow hover:shadow-lg bg-white transition group"
    >
      <div className="relative w-full h-52">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="text-sm text-gray-500 flex justify-between">
          <span>{item.date}</span>
          <span className="text-blue-600 font-medium">#{item.category}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 group-hover:underline">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">{item.content}</p>
      </div>
    </Link>
  );
}
