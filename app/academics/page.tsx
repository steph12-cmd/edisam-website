import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Placeholder from "@/components/Placeholder";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { activities, programmes, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academics",
  description: `Explore the nursery, kindergarten and primary programmes at ${siteConfig.name}, Kumasi.`,
};

const subjects = {
  "Nursery & Kindergarten": [
    "Language & Literacy",
    "Numeracy",
    "Creative Activities",
    "Our World, Our People",
    "Physical Development",
  ],
  "Lower Primary": [
    "English Language",
    "Mathematics",
    "Ghanaian Language",
    "Our World, Our People",
    "Creative Arts",
    "Physical Education",
  ],
  "Upper Primary": [
    "English Language",
    "Mathematics",
    "Science",
    "Computing (ICT)",
    "Religious & Moral Education",
    "History of Ghana",
  ],
} as const;

const schedule = [
  { time: "7:00 AM", item: "Arrival and morning assembly" },
  { time: "8:00 AM", item: "Core lessons" },
  { time: "10:00 AM", item: "Break and snack time" },
  { time: "10:30 AM", item: "Lessons and activities" },
  { time: "12:30 PM", item: "Lunch and rest" },
  { time: "1:30 PM", item: "Creative, sports or club time" },
  { time: "3:00 PM", item: "Closing and pick-up (extended care to 5:00 PM)" },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        crumb="Academics"
        title="Academics"
        subtitle="A balanced education that builds strong minds, good character and a love of learning."
      />

      {/* Approach */}
      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="Our Approach" title="Learning that is joyful and rigorous" />
            <p className="-mt-6 leading-relaxed text-brown-700">
              We follow Ghana&apos;s national curriculum and enrich it with
              hands-on activities, creative arts, computing and character
              education. Small classes let teachers notice each child&apos;s
              strengths and give extra support where it is needed.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Placeholder label="Pupils learning" className="aspect-[4/3] w-full rounded-3xl shadow-lg" />
          </Reveal>
        </div>
      </section>

      {/* Levels */}
      <section className="bg-cream-100 py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Levels" title="From first steps to Primary 6" />
          <div className="grid gap-6 md:grid-cols-3">
            {programmes.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <article className="h-full rounded-3xl border border-brown-100 bg-white p-7 shadow-sm">
                  <div className="text-4xl">{p.icon}</div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-maroon-800">{p.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-brown-500">{p.ages}</p>
                  <p className="mt-3 text-sm leading-relaxed text-brown-700">{p.blurb}</p>
                  <h4 className="mb-2 mt-5 text-sm font-bold text-maroon-800">Subjects</h4>
                  <ul className="space-y-1.5 text-sm text-brown-700">
                    {subjects[p.title as keyof typeof subjects]?.map((s) => (
                      <li key={s} className="flex items-center gap-2">
                        <span className="text-brown-500">•</span> {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Day */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="A Typical Day" title="Daily rhythm" />
            <ol className="-mt-6 space-y-4">
              {schedule.map((s) => (
                <li key={s.time} className="flex gap-4">
                  <span className="w-20 shrink-0 font-display text-lg font-bold text-brown-700">{s.time}</span>
                  <span className="border-l-2 border-brown-100 pl-4 text-brown-700">{s.item}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-brown-500">Sample timetable. Update with your real school hours.</p>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading align="left" eyebrow="Clubs & Activities" title="Activities children love" />
            <div className="-mt-6 flex flex-wrap gap-3">
              {activities.map((a) => (
                <span key={a} className="rounded-full bg-cream-200 px-5 py-2 text-sm font-semibold text-maroon-800">
                  {a}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
