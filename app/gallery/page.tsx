import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Photos from classrooms, sports, arts and events at ${siteConfig.name}, Kumasi.`,
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="Our Gallery"
        subtitle="Moments of learning, play and celebration at Edisam School."
      />
      <section className="py-20">
        <div className="container-x">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
