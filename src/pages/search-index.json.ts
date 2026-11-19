
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

function cleanMarkdown(markdown: string): string {
  return markdown
    // Hapus blok kode
    .replace(/```[\s\S]*?```/g, " ")

    // Hapus gambar
    .replace(/!\[.*?\]\(.*?\)/g, " ")

    // Ambil teks dari tautan Markdown
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")

    // Hapus tag HTML
    .replace(/<[^>]*>/g, " ")

    // Hapus sintaks Markdown
    .replace(/[#>*_`~|]/g, " ")

    // Rapikan spasi
    .replace(/\s+/g, " ")
    .trim();
}

export const GET: APIRoute = async () => {
  const articles = await getCollection(
    "articles",
    ({ data }) => data.draft === false
  );

  const searchIndex = articles.map((article) => ({
    id: article.id,
    title: article.data.title,
    description: article.data.description,
    category: article.data.category,
    author: article.data.author,
    pubDate: article.data.pubDate.toISOString(),
    readingTime: article.data.readingTime,
    body: cleanMarkdown(article.body ?? "")
  }));

  return new Response(
    JSON.stringify(searchIndex),
    {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    }
  );
};
