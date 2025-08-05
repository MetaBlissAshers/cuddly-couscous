"use client";

import { useState, useEffect } from "react";
import { Video } from "../lib/db";
import { VideoCard } from "./VideoCard";
import { JSAdd } from "./JSAdd";

export function PaginatedVideoList({
  allVideos,
  pageSize,
}: {
  allVideos: Video[];
  pageSize: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const lowerQuery = searchQuery.toLowerCase();

  const filteredVideos = allVideos.filter((video) => {
    if (lowerQuery.trim().length === 0) return true;

    const queryWords = lowerQuery
      .split(/[, ]+/)
      .map((w) => w.trim())
      .filter((w) => w !== "");

    const videoWords = [
      ...video.title
        .toLowerCase()
        .split(/\s+/)
        .map((w) => w.trim())
        .filter((w) => w !== ""),
      ...video.models
        .toLowerCase()
        .split(/[, ]+/)
        .map((w) => w.trim())
        .filter((w) => w !== ""),
      ...video.tags
        .toLowerCase()
        .split(/[, ]+/)
        .map((w) => w.trim())
        .filter((w) => w !== ""),
    ];

    return queryWords.every((q) => videoWords.some((v) => v.includes(q)));
  });

  const totalPages = Math.ceil(filteredVideos.length / pageSize);
  const currentVideos = filteredVideos.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const getPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (startPage == 1) {
      endPage = 3;
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by title, category, or model"
          className="border-velvet-plum bg-cream-white text-velvet-plum w-full max-w-md rounded border p-2"
        />
      </div>
      <div className="bg-cream-white sticky top-0 z-10 flex items-center justify-center space-x-2 pt-2 pb-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-velvet-plum hover:bg-soft-rose text-cream-white rounded px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded px-4 py-2 ${currentPage === page ? "bg-soft-rose text-cream-white border-golden-amber border-2 font-bold" : "bg-velvet-plum hover:bg-soft-rose text-cream-white"}`}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-velvet-plum hover:bg-soft-rose text-cream-white rounded px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <div className="xlg:grid-cols-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {currentVideos.map((video, index) => (
          <div key={video.id}>
            <VideoCard
              key={video.id}
              video={video}
              testId={`video-card-${index}`}
            />
            {index % 7 === 0 && index !== 0 && (
              <JSAdd
                zoneId="5684612"
                className="eas6a97888e37"
                rePlayInMS={1000}
              />
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-velvet-plum hover:bg-soft-rose text-cream-white rounded px-4 py-2 disabled:opacity-50"
        >
          Previous
        </button>
        {getPageNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`rounded px-4 py-2 ${currentPage === page ? "bg-soft-rose text-cream-white border-golden-amber border-2 font-bold" : "bg-velvet-plum hover:bg-soft-rose text-cream-white"}`}
          >
            {page}
          </button>
        ))}
        <button
          data-test-id="next-btn"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-velvet-plum hover:bg-soft-rose text-cream-white rounded px-4 py-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
