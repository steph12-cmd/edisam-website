import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import { formatDate, news, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "News & Events",
  description: `Latest news, announcements and upcoming events from ${siteConfig.name}, Kumasi.`,
};

export default function NewsPage() {
  const sorted = [...news].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <PageHero
        crumb="News"
        title="News & Events"
        subtitle="Stay up to date with life at Edisam School."
      />
      <section className="py-20">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((n, i) => (
            <Reveal key={n.slug} delay={(i % 3) * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-brown-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <Placeholder label={n.category} className="aspect-[16/10] w-full" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="rounded-full bg-cream-200 px-3 py-1 font-bold text-brown-700">
                      {n.category}
                    </span>
                    <time dateTime={n.date} className="text-brown-500">
                      {formatDate(n.date)}
                    </time>
                  </div>
                  <h2 className="font-display text-xl font-bold text-maroon-800">{n.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brown-700">{n.excerpt}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
