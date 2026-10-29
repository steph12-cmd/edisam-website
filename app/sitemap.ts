import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((l) => ({
    url: `${siteConfig.url}${l.href === "/" ? "" : l.href}`,
    lastModified: new Date(),
  }));
}
