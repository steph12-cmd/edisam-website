// Stand-in for photos. Replace with next/image when real photos are ready:
//   <Image src="/images/classroom.jpg" alt="..." fill className="object-cover" />
// (keep the parent `relative` and give it the same sizing classes).

type PlaceholderProps = {
  label?: string;
  className?: string;
};

export default function Placeholder({ label = "Photo", className = "" }: PlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`relative overflow-hidden bg-gradient-to-br from-cream-200 via-brown-100 to-brown-300 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #fff 0, transparent 40%), radial-gradient(circle at 80% 80%, #A06B3F 0, transparent 45%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center text-sm font-semibold text-brown-700/80">
        {label}
      </div>
    </div>
  );
}
