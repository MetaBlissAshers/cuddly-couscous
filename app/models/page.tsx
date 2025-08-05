export const dynamic = "force-static";
import { getAllModels } from "../lib/db";
import Link from "next/link";
import Image from "next/image";
import { getAllModelDetails } from "../lib/db";

export default async function Models() {
  const models = await getAllModels();
  const modelDetails = await getAllModelDetails();
  const thumbnailMap = new Map(
    modelDetails.map((m) => [
      m.model_name.toLowerCase(),
      m.model_thumbnail_url,
    ]),
  );

  return (
    <div>
      <h1 className="text-soft-rose mb-4 justify-self-center text-3xl font-bold">
        Models
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {models.map((model) => {
          const thumb =
            thumbnailMap.get(model.toLowerCase()) || "/placeholder.png";
          return (
            <Link
              key={model}
              href={`/models/${model.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="rounded border p-4 shadow">
                <div className="relative mb-2 h-100 w-full">
                  <Image
                    src={thumb}
                    // overrideSrc={thumb}
                    alt={model}
                    fill
                    // sizes="50vw"
                    // height={192}
                    // width={214}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-slate-gray text-center text-xl font-semibold">
                  {model}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
