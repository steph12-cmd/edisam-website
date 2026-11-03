import Image from "next/image";
import Link from "next/link";
import { navLinks, programmes, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-maroon-900 text-cream-200">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} crest`}
              width={410}
              height={430}
              className="h-16 w-auto"
            />
            <span className="font-display text-xl font-bold text-white">
              {siteConfig.name}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-cream-300">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-maroon-700 px-3 py-1 text-xs text-cream-200 transition hover:bg-cream-100 hover:text-maroon-800"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream-300 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">
            Our Levels
          </h3>
          <ul className="space-y-2 text-sm">
            {programmes.map((p) => (
              <li key={p.title}>
                <Link href="/academics" className="text-cream-300 hover:text-white">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-lg font-semibold text-white">
            Visit Us
          </h3>
          <ul className="space-y-2 text-sm text-cream-300">
            <li>📍 {siteConfig.address}</li>
            <li>
              <a href={siteConfig.phoneHref} className="hover:text-white">
                📞 {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                ✉️ {siteConfig.email}
              </a>
            </li>
          </ul>
          <h4 className="mb-2 mt-6 text-xs font-semibold uppercase tracking-widest text-cream-200">
            Opening Hours
          </h4>
          <ul className="space-y-1 text-sm text-cream-300">
            {siteConfig.hours.map((h) => (
              <li key={h.days}>
                {h.days}: <span className="text-white">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-maroon-800">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Kumasi, Ghana</p>
        </div>
      </div>
    </footer>
  );
}
