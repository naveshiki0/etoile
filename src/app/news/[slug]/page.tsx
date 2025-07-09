import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";

interface Props {
  params: { slug: string };
}

export default async function NewsDetailPage({ params }: Props) {
  const slug = params.slug;
  const news = newsItems.find((n) => n.slug === slug);

  if (!news) return notFound();

  return (
    <main className="max-w-3xl mx-auto py-20 px-6">
      <div className="mb-6 text-sm text-gray-500">
        {news.date}
        <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
          {news.tag}
        </span>
      </div>
      <h1 className="text-3xl font-bold text-blue-800 mb-8">{news.title}</h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </main>
  );
}
