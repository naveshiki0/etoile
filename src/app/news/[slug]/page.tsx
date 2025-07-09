import { notFound } from "next/navigation";
import { newsItems } from "@/data/news";
import ArticleDetail from "@/components/articledetail";

interface Props {
  params: { slug: string };
}

export default async function NewsDetailPage({ params }: Props) {
  const slug = params.slug;
  const news = newsItems.find((n) => n.slug === slug);

  if (!news) return notFound();

  return (
    <ArticleDetail
      title={news.title}
      date={news.date}
      category={news.tag}
      image={news.thumbnail}
      content={stripHtmlTags(news.content)}
    />
  );
}

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
