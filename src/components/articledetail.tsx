import Image from "next/image";

interface ArticleProps {
  title: string;
  date: string;
  category: string;
  image: string;
  content: string;
  name?: string;
  university?: string;
}

export default function ArticleDetail({
  title,
  date,
  category,
  image,
  content,
  name,
  university,
}: ArticleProps) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-10">
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
          {category}
        </span>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        <time className="text-sm text-gray-500">{date}</time>
        {name && university && (
          <p className="mt-2 text-gray-700 text-sm">
            {name}（{university}）
          </p>
        )}
      </div>

      <div className="mb-10">
        <div className="relative w-full aspect-[3/2] mb-6">
          <Image
            src={image}
            alt={name || title}
            fill
            className="rounded-lg object-contain"
          />
        </div>

        <div className="prose prose-blue max-w-none text-gray-800 text-lg leading-relaxed">
          {content.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
