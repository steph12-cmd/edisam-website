import Link from "next/link";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  crumb: string;
};

export default function PageHero({ title, subtitle, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-maroon-800 text-white">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 30%, #E8D9BA 0, transparent 35%), radial-gradient(circle at 85% 70%, #C9A27A 0, transparent 40%)",
        }}
      />
      <div className="container-x relative py-16 text-center sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-cream-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-cream-100">{crumb}</span>
        </nav>
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream-200 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
