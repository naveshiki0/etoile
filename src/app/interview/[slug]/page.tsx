"use client";

import { useParams } from "next/navigation";
import { allInterviews } from "@/data/interview";
import ArticleDetail from "@/components/articledetail";

export default function Page() {
  const { slug } = useParams() as { slug: string };
  const interview = allInterviews.find((item) => item.slug === slug);

  if (!interview) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          記事が見つかりません
        </h1>
      </div>
    );
  }

  return (
    <ArticleDetail
      title={interview.title}
      date={interview.date}
      category={interview.category}
      name={interview.name}
      university={interview.university}
      image={interview.image}
      content={interview.content}
    />
  );
}
