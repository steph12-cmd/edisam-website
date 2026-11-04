import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { photos } from "@/lib/images";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import EnquiryForm from "@/components/EnquiryForm";
import {
  activities,
  formatDate,
  galleryItems,
  news,
  programmes,
  siteConfig,
  stats,
  values,
} from "@/lib/site";

export default function HomePage() {
  const marquee = [...activities, ...activities];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-cream-100">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cream-300/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brown-100/70 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-brown-600 shadow-sm">
              Nursery &amp; Primary School · Kumasi
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-maroon-800 sm:text-5xl lg:text-6xl">
              {siteConfig.name}
              <span className="mt-2 block text-brown-500">{siteConfig.tagline}.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brown-700">
              A warm, safe and inspiring place where children aged 2 to 15 learn,
              play and grow into confident, caring and curious young people.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/admissions" className="btn-primary">
                Apply for Admission
              </Link>
              <Link href="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl">
              <Image
                src={photos.heroClass.src}
                alt="Cheerful Edisam pupils in red PE kits posing together outside the school"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 rounded-2xl bg-white px-5 py-4 shadow-lg sm:-left-6">
              <p className="font-display text-2xl font-bold text-maroon-700">Nursery – JHS 1</p>
              <p className="text-xs uppercase tracking-widest text-brown-500">Admissions open</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-brown-100 bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-maroon-700">{s.value}</p>
              <p className="text-sm text-brown-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={photos.pupilsFriends.src}
                  alt="Two Edisam pupils in school uniform standing in front of the old buildings"
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative mt-10 aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={photos.pupilsOnJet.src}
                  alt="Pupils in school uniform playing on a yellow and grey jet display"
                  fill
                  sizes="(min-width: 1024px) 25vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title="Learning begins with love"
            />
            <p className="-mt-6 mb-6 leading-relaxed text-brown-700">
              At {siteConfig.name}, we give every child a supportive and inspiring
              environment to learn, explore and grow. Our goal goes beyond
              academic results. We nurture confident, creative and responsible
              children with the knowledge, skills and values to succeed.
            </p>
            <h3 className="mb-3 font-display text-xl font-semibold text-maroon-800">
              Beyond the classroom
            </h3>
            <ul className="mb-8 space-y-2 text-brown-700">
              {["Sports and physical development", "Technology and innovation", "Performing arts and music"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-maroon-700 text-xs text-white">
                      ✓
                    </span>
                    {t}
                  </li>
                )
              )}
            </ul>
            <Link href="/about" className="btn-primary">
              More About Us
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMMES */}
      <section className="bg-cream-100 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Programmes"
            title="Excellence at every stage"
            text="From a child's very first classroom to the end of primary school, we guide each step with care."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {programmes.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-brown-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.photo.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: p.position }}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-widest text-brown-500">
                      {p.ages}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold text-maroon-800">
                      {p.icon} {p.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-brown-700">{p.blurb}</p>
                    <Link
                      href="/academics"
                      className="mt-5 text-sm font-bold text-brown-700 hover:text-maroon-800"
                    >
                      Explore →
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Whole-Child Growth"
            title="Joyful curiosity, strong character"
            text="We let children be children while building the habits and values that last a lifetime."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl bg-cream-100 p-7 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-maroon-800">{v.title}</h3>
                  <p className="mt-2 text-sm text-brown-700">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITIES MARQUEE */}
      <section className="overflow-hidden bg-maroon-800 py-6" aria-label="School activities">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {marquee.map((a, i) => (
            <span key={`${a}-${i}`} className="font-display text-2xl text-cream-200">
              {a} <span className="ml-10 text-brown-300">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Gallery"
            title="Life at Edisam"
            text="A peek into the classrooms, playgrounds and celebrations that make our school special."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryItems.slice(0, 8).map((g) => (
              <div key={g.title} className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={g.photo.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/gallery" className="btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="bg-cream-100 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="News & Events" title="What's happening at school" />
          <div className="grid gap-6 md:grid-cols-3">
            {news.slice(0, 3).map((n, i) => (
              <Reveal key={n.slug} delay={i * 100}>
                <article className="h-full rounded-3xl border border-brown-100 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="rounded-full bg-cream-200 px-3 py-1 font-bold text-brown-700">
                      {n.category}
                    </span>
                    <time dateTime={n.date} className="text-brown-500">
                      {formatDate(n.date)}
                    </time>
                  </div>
                  <h3 className="font-display text-xl font-bold text-maroon-800">{n.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brown-700">{n.excerpt}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/news" className="btn-outline">
              All News &amp; Events
            </Link>
          </div>
        </div>
      </section>

      {/* ENQUIRY */}
      <section className="py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Get In Touch"
              title="Have a question? We'd love to hear from you"
              text="Send us a message and our team will respond as quickly as possible. You can also call or visit the school during opening hours."
            />
            <ul className="space-y-3 text-brown-700">
              <li>📞 <a href={siteConfig.phoneHref} className="font-semibold hover:text-maroon-800">{siteConfig.phone}</a></li>
              <li>✉️ <a href={`mailto:${siteConfig.email}`} className="font-semibold hover:text-maroon-800">{siteConfig.email}</a></li>
              <li>📍 {siteConfig.address}</li>
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <EnquiryForm compact />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
