import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function CtaBand() {
  return (
    <section className="bg-maroon-700">
      <div className="container-x flex flex-col items-center justify-between gap-6 py-14 text-center md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-3xl font-bold text-white">
            Ready to join the {siteConfig.shortName} family?
          </h2>
          <p className="mt-2 text-cream-200">
            Admissions are open. Book a visit or send us your enquiry today.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center rounded-full bg-cream-100 px-6 py-3 text-sm font-semibold text-maroon-800 transition hover:bg-white"
          >
            Apply Now
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-cream-100 px-6 py-3 text-sm font-semibold text-cream-100 transition hover:bg-cream-100 hover:text-maroon-800"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
