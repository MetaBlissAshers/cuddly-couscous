import { getVideos, getVideoCount, getAllModels } from "../../lib/db";
import { PaginatedVideoList } from "../../components/PaginatedVideoList";

export async function generateStaticParams() {
  const models = await getAllModels();
  return models.map((model) => ({
    model: model.toLowerCase().replaceAll(" ", "-"),
  }));
}

export default async function ModelPage({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const resolvedParams = await params;
  const modelParam = resolvedParams.model;
  const allVideos = await getVideos(1, await getVideoCount());
  const model = modelParam;
  const filteredVideos = allVideos.filter((v) =>
    v.models
      .split(",")
      .map((m) => m.trim().toLowerCase().replaceAll(" ", "-"))
      .includes(model.toLowerCase().replaceAll(" ", "-")),
  );

  return (
    <div>
      <h1 className="text-soft-rose mb-4 justify-self-center text-3xl font-bold">
        {model.replaceAll("-", " ")} Videos
      </h1>
      <PaginatedVideoList allVideos={filteredVideos} pageSize={12} />
    </div>
  );
}
