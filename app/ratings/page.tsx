import React from "react";
import { LegalPageLayout } from "../components/LegalPageLayout";

export default function RatingsPage() {
  return (
    <LegalPageLayout title="Ratings & Curation">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-velvet-plum">
          How We Rate Content
        </h2>
        <p>
          At FreeHQPornXXX, we strive to bring you the best content available.
          Our rating system is based on a combination of user feedback and
          internal quality checks.
        </p>

        <h2 className="text-xl font-semibold text-velvet-plum mt-6">
          User Ratings
        </h2>
        <p>
          We rely heavily on our community to help us surface the best content.
          Users can like or dislike videos, and these interactions directly
          influence the visibility of videos on our platform. The more positive
          ratings a video receives, the higher it will appear in our lists.
        </p>

        <h2 className="text-xl font-semibold text-velvet-plum mt-6">
          Quality Standards
        </h2>
        <p>
          Our team also reviews content to ensure it meets our quality
          standards. We look for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>High Definition (HD) resolution (720p, 1080p, and 4K).</li>
          <li>Good audio quality.</li>
          <li>Professional production value or high-quality amateur content.</li>
          <li>Accurate metadata (titles, tags, descriptions).</li>
        </ul>

        <h2 className="text-xl font-semibold text-velvet-plum mt-6">
          Community Safety
        </h2>
        <p>
          We strictly prohibit illegal content. All content is monitored to
          ensure compliance with our Terms of Service and applicable laws. If a
          video is reported and found to be in violation, it is immediately
          removed.
        </p>
      </section>
    </LegalPageLayout>
  );
}
