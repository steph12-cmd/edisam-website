import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import EnquiryForm from "@/components/EnquiryForm";
import { admissionSteps, documentsRequired, faqs, fees, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions",
  description: `Apply to ${siteConfig.name} in Kumasi. See the admission process, required documents and fees for Nursery to Primary 6.`,
};

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        crumb="Admissions"
        title="Admissions"
        subtitle="Joining Edisam is simple. Here is how to get started."
      />

      {/* Steps */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="How to Apply" title="Five easy steps" />
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="h-full list-none rounded-3xl border border-brown-100 bg-white p-6 text-center shadow-sm">
                  <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-maroon-700 font-display text-xl font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="font-display text-xl font-bold text-maroon-800">{s.title}</h3>
                  <p className="mt-2 text-sm text-brown-700">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Documents + Fees */}
      <section className="bg-cream-100 py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-maroon-800">Documents required</h2>
              <ul className="mt-5 space-y-3">
                {documentsRequired.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-brown-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-maroon-700 text-[11px] text-white">
                      ✓
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-maroon-800">School fees</h2>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-brown-100 text-brown-500">
                      <th className="py-2 pr-4 font-semibold">Level</th>
                      <th className="py-2 pr-4 font-semibold">Admission</th>
                      <th className="py-2 font-semibold">Per term</th>
                    </tr>
                  </thead>
                  <tbody className="text-maroon-800">
                    {fees.map((f) => (
                      <tr key={f.level} className="border-b border-brown-100/60 last:border-0">
                        <td className="py-3 pr-4 font-semibold">{f.level}</td>
                        <td className="py-3 pr-4">{f.admission}</td>
                        <td className="py-3">{f.term}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
                
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ + Form */}
      <section className="py-20">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading align="left" eyebrow="FAQ" title="Common questions" />
            <div className="-mt-6 space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-brown-100 bg-white p-5 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-maroon-800">
                    {f.q}
                    <span className="ml-4 text-xl text-brown-500 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-brown-700">{f.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading align="left" eyebrow="Apply" title="Send an admission enquiry" />
            <div className="-mt-6">
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
