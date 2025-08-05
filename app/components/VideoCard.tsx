"use client";

import Link from "next/link";
import { Video } from "../lib/db";
import { useState, useEffect } from "react";
import Image from "next/image";

export function VideoCard({
  video,
  testId,
}: {
  video: Video;
  testId: string | undefined;
}) {
  const thumbnails = [
    video.thumbnail_url,
    ...(video.extra_thumbnails
      ? video.extra_thumbnails
          .split(",")
          .map((t) => t.trim())
          .filter((t) => t)
      : []),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isHovered && thumbnails.length > 1) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % thumbnails.length);
      }, 1000); // Cycle every 1 second
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, thumbnails.length]);

  const currentThumbnail = thumbnails[currentIndex];

  return (
    <Link href={`/videos/${video.id}`} data-test-id={testId}>
      <div className="relative rounded border p-4 shadow">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <div className="relative mb-2 h-48 w-full">
            <Image
              src={currentThumbnail}
              alt={video.title}
              fill
              className="object-cover"
            />
          </div>
          {thumbnails.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(
                    (prev) =>
                      (prev - 1 + thumbnails.length) % thumbnails.length,
                  );
                }}
                className="bg-velvet-plum bg-opacity-50 text-golden-amber absolute top-1/2 left-0 -translate-y-1/2 transform rounded-r p-2"
              >
                &lt;
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex((prev) => (prev + 1) % thumbnails.length);
                }}
                className="bg-velvet-plum bg-opacity-50 text-golden-amber absolute top-1/2 right-0 -translate-y-1/2 transform rounded-l p-2"
              >
                &gt;
              </button>
            </>
          )}
        </div>
        <h2 className="text-slate-gray text-xl font-semibold">{video.title}</h2>
      </div>
    </Link>
  );
}
