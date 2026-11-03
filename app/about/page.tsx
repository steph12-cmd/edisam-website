import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { siteConfig, staff, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about the history, mission, vision and values of ${siteConfig.name} in Kumasi, Ghana.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="About Edisam School"
        subtitle="A caring community in Kumasi dedicated to helping every child flourish."
      />

      {/* History */}
      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Story" title="Our history" />
            <div className="-mt-6 space-y-4 leading-relaxed text-brown-700">
              <p>
                {siteConfig.name} was founded with a simple belief: every child
                deserves a strong start in a loving, well-ordered environment.
                {/* TODO: replace with the real founding story, year and founder */}
              </p>
              <p>
                What began as a small nursery in Kumasi has grown into a
                trusted nursery and primary school, known for caring teachers,
                good discipline and pupils who love to learn.
              </p>
              <p>
                We hold on to the values that made us who we are while
                embracing modern methods, so that each generation of pupils
                is ready for what comes next.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Placeholder label="School building / founders" className="aspect-[4/3] w-full rounded-3xl shadow-lg" />
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream-100 py-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-maroon-700 p-8 text-white">
              <p className="text-4xl">🎯</p>
              <h3 className="mt-3 font-display text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-relaxed text-cream-200">
                To provide quality, child-centred education in a safe and
                nurturing setting that develops the mind, character and talents
                of every pupil.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-4xl">🌟</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-maroon-800">Our Vision</h3>
              <p className="mt-3 leading-relaxed text-brown-700">
                To raise responsible, forward-thinking children who grow into
                confident leaders and positive contributors to Ghana and the
                world.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="What We Stand For" title="Our core values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-brown-100 bg-white p-7 text-center">
                  <div className="mb-3 text-4xl">{v.icon}</div>
                  <h3 className="font-display text-xl font-bold text-maroon-800">{v.title}</h3>
                  <p className="mt-2 text-sm text-brown-700">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-cream-100 py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our People"
            title="Leadership & staff"
            text="Every child is guided by teachers who know them by name."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {staff.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                  <Placeholder label="Photo" className="aspect-[4/5] w-full" />
                  <div className="p-5 text-center">
                    <h3 className="font-display text-lg font-bold text-maroon-800">{s.name}</h3>
                    <p className="text-sm text-brown-500">{s.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
