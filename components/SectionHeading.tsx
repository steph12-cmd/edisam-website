type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-sm font-bold uppercase tracking-[0.2em] ${
            light ? "text-brown-300" : "text-brown-500"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-brown-800"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-cream-200" : "text-brown-700"}`}>
          {text}
        </p>
      )}
    </div>
  );
}
