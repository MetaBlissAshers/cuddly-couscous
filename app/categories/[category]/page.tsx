import { getVideos, getVideoCount, getAllTags } from "../../lib/db";
import { PaginatedVideoList } from "../../components/PaginatedVideoList";

export async function generateStaticParams() {
  const tags = await getAllTags();
  return tags.map((tag) => ({
    category: tag.toLowerCase().replaceAll(" ", "-"),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const categoryParam = resolvedParams.category;
  const allVideos = await getVideos(1, await getVideoCount());
  const category = categoryParam;
  const filteredVideos = allVideos.filter((v) =>
    v.tags
      .split(",")
      .map((t) => t.trim().toLowerCase().replaceAll(" ", "-"))
      .includes(category.toLowerCase().replaceAll(" ", "-")),
  );

  return (
    <div>
      <h1 className="text-soft-rose mb-4 justify-self-center text-3xl font-bold">
        {category.replaceAll("-", " ")} Videos
      </h1>
      <PaginatedVideoList allVideos={filteredVideos} pageSize={12} />
    </div>
  );
}
