import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import EnquiryForm from "@/components/EnquiryForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${siteConfig.name} in Kumasi, Ghana. Call, email, WhatsApp or visit us.`,
};

// Tip: for an exact pin, open your school on Google Maps > Share > Embed a map,
// and paste that iframe src into MAP_SRC below.
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1751.3515370219152!2d-1.6609686865286661!3d6.769613195615278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbbd006feaece1%3A0xac2c9ad01ccf2f6d!2sEdisam%20Educational%20Complex%2C%20Hemang-Botantia!5e0!3m2!1sen!2sng!4v1793802473309!5m2!1sen!2sng";

export default function ContactPage() {
  const cards = [
    { icon: "📍", title: "Address", body: siteConfig.address },
    { icon: "📞", title: "Phone", body: siteConfig.phone, href: siteConfig.phoneHref },
    { icon: "✉️", title: "Email", body: siteConfig.email, href: `mailto:${siteConfig.email}` },
    {
      icon: "🕘",
      title: "Opening hours",
      body: siteConfig.hours.map((h) => `${h.days}: ${h.time}`).join(" · "),
    },
  ];

  return (
    <>
      <PageHero
        crumb="Contact"
        title="Contact Us"
        subtitle="We're here to answer your questions and help you take the next step."
      />

      <section className="py-20">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div className="h-full rounded-3xl border border-brown-100 bg-white p-6 text-center shadow-sm">
                  <div className="mb-3 text-3xl">{c.icon}</div>
                  <h3 className="font-display text-lg font-bold text-maroon-800">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm text-brown-700 hover:text-maroon-800">
                      {c.body}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-brown-700">{c.body}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="mb-6 font-display text-3xl font-bold text-maroon-800">Send us a message</h2>
              <EnquiryForm />
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mb-6 font-display text-3xl font-bold text-maroon-800">Find us</h2>
              <div className="overflow-hidden rounded-3xl border border-brown-100 shadow-sm">
                <iframe
                  title={`Map showing ${siteConfig.name} in Kumasi, Ghana`}
                  src={MAP_SRC}
                  className="h-[420px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
