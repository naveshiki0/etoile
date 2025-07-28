import Link from "next/link";
import Image from "next/image";

interface InterviewItem {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  name?: string;
  university?: string;
}

export default function InterviewCard({ item }: { item: InterviewItem }) {
  return (
    <Link
      href={`/interview/${item.slug}`}
      className="block bg-gray-100/20 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition border"
    >
      <div className="relative w-full h-56">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="p-4">
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
          {item.category}
        </span>
        <time className="block text-sm text-gray-500">{item.date}</time>
        <h3 className="font-semibold text-lg text-gray-900 mt-1 line-clamp-2">
          {item.title}
        </h3>
        {item.name && item.university && (
          <p className="text-sm text-gray-600 mt-1">
            {item.name}（{item.university}）
          </p>
        )}
      </div>
    </Link>
  );
}
