import { getAllArticles, getArticle } from "@/lib/api";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { draftMode } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allArticles = await getAllArticles();

  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function KnowledgeArticlePage({
  params,
}) {
  const { isEnabled } = draftMode();
  const article = await getArticle(params.slug, isEnabled);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              {article.title}
            </h1>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              {article.summary}
            </p>
          </div>
          <div className="space-y-8 lg:space-y-10">
            <Image
              alt="Article Image"
              className="aspect-video w-full overflow-hidden rounded-xl object-cover"
              height="365"
              src={article.articleImage.url}
              width="650"
            />
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <div className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
                  {documentToReactComponents(article.details.json)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
