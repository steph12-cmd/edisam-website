"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryCategories, galleryItems } from "@/lib/site";

type Category = (typeof galleryCategories)[number];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>("All");
  const items =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div>
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Gallery categories"
      >
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === c
                ? "bg-maroon-700 text-white"
                : "bg-white text-brown-700 hover:bg-cream-200"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Masonry: every photo keeps its own shape, nothing is cropped */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {items.map((item) => (
          <figure
            key={item.title}
            className="group mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-cream-200"
          >
            <Image
              src={item.photo.src}
              alt={item.alt}
              width={item.photo.width}
              height={item.photo.height}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="h-auto w-full transition duration-500 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}
