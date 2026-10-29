"use client";

import { useState } from "react";
import Placeholder from "@/components/Placeholder";
import { galleryCategories, galleryItems } from "@/lib/site";

type Category = (typeof galleryCategories)[number];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const items =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Gallery categories">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === c
                ? "bg-brown-700 text-white"
                : "bg-white text-brown-700 hover:bg-cream-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => (
          <figure
            key={item.title}
            className={`group overflow-hidden rounded-2xl ${
              i % 5 === 0 ? "md:row-span-2" : ""
            }`}
          >
            <Placeholder
              label={item.title}
              className={`w-full transition duration-500 group-hover:scale-105 ${
                i % 5 === 0 ? "h-full min-h-[16rem]" : "aspect-square"
              }`}
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
