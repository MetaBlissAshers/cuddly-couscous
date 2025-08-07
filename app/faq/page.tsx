import React from "react";
import { LegalPageLayout } from "../components/LegalPageLayout";

export default function FAQPage() {
  return (
    <LegalPageLayout title="Frequently Asked Questions">
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-velvet-plum mb-2">
            Is FreeHQPornXXX free to use?
          </h2>
          <p>
            Yes! FreeHQPornXXX is completely free to use. You can watch high
            quality porn videos without paying a cent.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-velvet-plum mb-2">
            Do you host the videos?
          </h2>
          <p>
            No. FreeHQPornXXX acts as an index and search engine for adult
            content. We embed videos from third-party sources and do not host
            content on our own servers. This ensures we can provide a vast
            library of content without hosting the files ourselves.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-velvet-plum mb-2">
            How often is the content updated?
          </h2>
          <p>
            We update our library daily with the freshest and hottest content
            from around the web. We strive to keep our collection up-to-date
            with the latest releases.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-velvet-plum mb-2">
            How can I report a broken video or bad content?
          </h2>
          <p>
            If you find a broken video or content that violates our terms, please
            contact us at{" "}
            <a
              href="mailto:support@freehqpornxxx.com"
              className="text-velvet-plum hover:underline"
            >
              support@freehqpornxxx.com
            </a>
            . We appreciate your help in keeping our site clean and functional.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-velvet-plum mb-2">
            Is my privacy protected?
          </h2>
          <p>
            Yes, we take user privacy seriously. We do not collect unnecessary
            personal information. Please refer to our Privacy Policy for more
            details on how we handle data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-velvet-plum mb-2">
            Why do I see ads?
          </h2>
          <p>
            Running a website with high traffic requires significant resources.
            Ads help us cover the costs of servers and maintenance so we can
            keep the service free for you. We try to ensure ads are not
            intrusive.
          </p>
        </div>
      </section>
    </LegalPageLayout>
  );
}
