import { getVideoById } from "../../lib/db";
import { getAllVideoIds } from "../../lib/db";
import { VideoPlayer } from "../../components/VideoPlayer";
import type { Metadata } from "next";
import Link from "next/link";
// import { JSAdd } from "../../components/JSAdd";
// import { JucicyAds2 } from "../../components/JucicyAds2";
import { JucicyAds } from "@/app/components/JucicyAds";
import { AdsteraAd } from "@/app/components/AdsteraAd";

type Params = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const video = await getVideoById(id);

  const siteUrl = process.env.SITE_URL || "https://freehqpornxxx.com";
  const currentUrl = new URL(`/videos/${id}`, siteUrl).toString();

  if (!video) {
    return { title: "Video not found" };
  }

  return {
    title: video.title,
    description: `Watch ${video.title} - Duration: ${video.duration}, Models: ${video.models}, Tags: ${video.tags}`,
    openGraph: {
      title: video.title,
      description: `Watch ${video.title}`,
      type: "video.other",
      url: currentUrl,
      // Add more if thumbnail or direct video URL is available
      images: [{ url: video.thumbnail_url }],
    },
  };
}

function convertToIsoDuration(duration: string): string {
  const parts = duration.split(":").map(Number);
  let iso = "PT";
  if (parts.length === 3) {
    iso += `${parts[0]}H${parts[1]}M${parts[2]}S`;
  } else if (parts.length === 2) {
    iso += `${parts[0]}M${parts[1]}S`;
  } else {
    return "";
  }
  return iso;
}

export default async function VideoPage({ params }: Params) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const video = await getVideoById(id);

  if (!video) {
    return <div>Video not found</div>;
  }

  const siteUrl = process.env.SITE_URL || "https://freehqpornxxx.com";
  const currentUrl = new URL(`/videos/${id}`, siteUrl).toString();

  const isoDuration = convertToIsoDuration(video.duration);
  const uploadDate = video.scraped_at.replace(" ", "T") + "+00:00";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: `Watch ${video.title} - Duration: ${video.duration}, Models: ${video.models}, Tags: ${video.tags}`,
    thumbnailUrl: video.thumbnail_url,
    uploadDate: uploadDate,
    duration: isoDuration,
    contentUrl: currentUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-row place-self-center">
        <div className="mr-4 hidden flex-shrink-0 flex-row xl:block">
          {/* <iframe
            id="video-ad-9"
            src="//a.magsrv.com/iframe.php?idzone=5683802&size=160x600"
            width="160"
            height="600"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
          ></iframe>
          <iframe
            id="video-ad-10"
            src="//a.magsrv.com/iframe.php?idzone=5684630&size=160x600"
            width="160"
            height="600"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
          ></iframe> */}
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-soft-rose mb-4 text-3xl font-bold">
              {video.title}
            </h1>

            <VideoPlayer src={video.iframe_src} />
            <p className="text-slate-gray">Duration: {video.duration}</p>
            <p className="text-slate-gray">
              Models:{" "}
              {video.models.split(",").map((model, index) => (
                <span key={index}>
                  {index > 0 && ", "}
                  <Link
                    href={`/models/${model.trim().toLowerCase().replaceAll(" ", "-")}`}
                    className="text-soft-rose hover:underline"
                  >
                    {model.trim()}
                  </Link>
                </span>
              ))}
            </p>
            <p className="text-slate-gray">
              Tags:{" "}
              {video.tags.split(",").map((tag, index) => (
                <span key={index}>
                  {index > 0 && ", "}
                  <Link
                    href={`/categories/${tag.trim().toLowerCase().replaceAll(" ", "-")}`}
                    className="text-soft-rose hover:underline"
                  >
                    {tag.trim()}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          {/* <JSAdd
            zoneId="5684468"
            className="eas6a97888e37"
            rePlayInMS={60000}
          /> */}
          {/* <div
          // className="pt-4 pb-4 sm:pr-50 lg:pr-0 lg:pl-50"
          >
            <div
              className="pb-4"
              id="video-ad-1"
              style={{
                width: "100%",
                margin: "auto",
                background: "rgba(0, 0, 0, 0.50)",
                position: "relative",
              }}
            >
              <div
                id="frame"
                style={{
                  width: "100%",
                  margin: "auto",
                  background: "rgba(0, 0, 0, 0.50)",
                  position: "relative",
                  zIndex: 99998,
                }}
              >
                <iframe
                  data-aa="2405774"
                  src="//acceptable.a-ads.com/2405774/?size=Adaptive"
                  style={{
                    border: "0",
                    padding: "0",
                    width: "70%",
                    height: "auto",
                    overflow: "hidden",
                  }}
                ></iframe>
              </div>
            </div>
            <div
              id="video-ad-2"
              style={{
                width: "100%",
                margin: "auto",
                background: "rgba(0, 0, 0, 0.50)",
                position: "relative",
              }}
            >
              <div
                id="frame"
                style={{
                  width: "100%",
                  margin: "auto",
                  background: "rgba(0, 0, 0, 0.50)",
                  position: "relative",
                  zIndex: 99998,
                }}
              >
                <iframe
                  data-aa="2405775"
                  src="//acceptable.a-ads.com/2405775/?size=Adaptive"
                  style={{
                    border: "0",
                    padding: "0",
                    width: "70%",
                    height: "auto",
                    overflow: "hidden",
                  }}
                ></iframe>
              </div>
            </div>
          </div> */}

          <div className="mt-4 flex flex-row">
            <div className="flex-col">
              <div id="video-ad-1"></div>
              <div id="video-ad-2"></div>
              <div id="video-ad-3"></div>
              <div id="video-ad-7"></div>

              {/* <iframe
                id="video-ad-1"
                src="//a.magsrv.com/iframe.php?idzone=5683812&size=300x250"
                width="300"
                height="250"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
              ></iframe>
              <iframe
                id="video-ad-2"
                src="//a.magsrv.com/iframe.php?idzone=5683820&size=300x250"
                width="300"
                height="250"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
              ></iframe>
              <iframe
                id="video-ad-3"
                src="//a.magsrv.com/iframe.php?idzone=5684646&size=300x250"
                width="300"
                height="250"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
              ></iframe> */}
            </div>
            <div className="hidden flex-col md:block">
              <div id="video-ad-4"></div>
              <div id="video-ad-5"></div>
              <div id="video-ad-6"></div>
              <div id="video-ad-8"></div>

              {/* <iframe
                id="video-ad-4"
                src="//a.magsrv.com/iframe.php?idzone=5684638&size=300x250"
                width="300"
                height="250"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
              ></iframe>
              <iframe
                id="video-ad-5"
                src="//a.magsrv.com/iframe.php?idzone=5684640&size=300x250"
                width="300"
                height="250"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
              ></iframe>
              <iframe
                id="video-ad-6"
                src="//a.magsrv.com/iframe.php?idzone=5684642&size=300x250"
                width="300"
                height="250"
                scrolling="no"
                marginWidth={0}
                marginHeight={0}
                frameBorder={0}
              ></iframe> */}
            </div>
          </div>
        </div>
        <div className="ml-4 hidden flex-shrink-0 flex-row lg:block">
          {/* <iframe
            id="video-ad-7"
            src="//a.magsrv.com/iframe.php?idzone=5683804&size=160x600"
            width="160"
            height="600"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
          ></iframe>
          <iframe
            id="video-ad-8"
            src="//a.magsrv.com/iframe.php?idzone=5684636&size=160x600"
            width="160"
            height="600"
            scrolling="no"
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
          ></iframe> */}
        </div>
        <JucicyAds
          divId="video-ad-1"
          width="300"
          height="250"
          zoneId="1098214"
        />
        <JucicyAds
          divId="video-ad-2"
          width="300"
          height="250"
          zoneId="1098215"
        />
        <JucicyAds
          divId="video-ad-3"
          width="300"
          height="250"
          zoneId="1098216"
        />
        <JucicyAds
          divId="video-ad-4"
          width="300"
          height="250"
          zoneId="1098217"
        />
        <JucicyAds
          divId="video-ad-5"
          width="300"
          height="250"
          zoneId="1098218"
        />
        <JucicyAds
          divId="video-ad-6"
          width="300"
          height="250"
          zoneId="1098219"
        />
        <JucicyAds
          divId="video-ad-8"
          width="300"
          height="250"
          zoneId="1098360"
        />
        <AdsteraAd
          divId="video-ad-7"
          width="300"
          height="250"
          zoneId="8856fddb09b862b553c595fb21d7c31e"
        />
        {/* <script type="text/javascript">juicy_adzone = '1098207';</script>
        <script
          type="text/javascript"
          src="https://poweredby.jads.co/js/jfc.js"
          charSet="utf-8"
        ></script> */}
        {/* <JucicyAds2 zoneId="1098206" divId="video-ad-0" /> */}
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const ids = await getAllVideoIds();
  return ids.map((id) => ({ id: id }));
}
