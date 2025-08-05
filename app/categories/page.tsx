import { getAllTags, getAllCategories } from "../lib/db";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-static";

export default async function Categories() {
  const tags = await getAllTags();
  const categories = await getAllCategories();
  const thumbnailMap = new Map(
    categories.map((c) => [
      c.category_name.toLowerCase(),
      c.category_thumbnail_url,
    ]),
  );

  return (
    <div>
      <h1 className="text-soft-rose mb-4 justify-self-center text-3xl font-bold">
        Categories
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {tags.map((tag) => {
          const thumb =
            thumbnailMap.get(tag.toLowerCase()) || "/placeholder.png"; // Use a placeholder if no thumbnail
          return (
            <Link
              key={tag}
              href={`/categories/${tag.toLowerCase().replaceAll(" ", "-")}`}
            >
              <div className="rounded border p-4 shadow">
                <div className="relative mb-2 h-48 w-full">
                  <Image src={thumb} alt={tag} fill className="object-cover" />
                </div>
                <h2 className="text-slate-gray text-center text-xl font-semibold">
                  {tag}
                </h2>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
