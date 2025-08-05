import { getVideos, getVideoCount } from "./lib/db";

import { PaginatedVideoList } from "@/app/components/PaginatedVideoList";

export const dynamic = "force-static";

export default async function Home() {
  const allVideos = await getVideos(1, await getVideoCount()); // Fetch all videos statically
  return (
    <div>
      <h1 className="text-soft-rose mb-4 justify-self-center text-3xl font-bold">
        All Videos
      </h1>
      <PaginatedVideoList allVideos={allVideos} pageSize={12} />
    </div>
  );
}
