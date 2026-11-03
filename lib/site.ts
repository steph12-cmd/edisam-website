// Central place for all school content. Replace the placeholder values
// (phone, email, address, fees, staff names) with real details.

export const siteConfig = {
  name: "Edisam School",
  shortName: "Edisam",
  tagline: "Where little minds begin to shine",
  description:
    "Edisam School is a nursery and primary school in Kumasi, Ghana, nurturing confident, curious and caring children.",
  url: "https://www.edisamschool.com", // TODO: replace with your real domain
  phone: "+233 55 650 1264", // TODO
  phoneHref: "tel:+233 55 650 1264", // TODO
  email: "info@edisamschool.com", // TODO
  whatsapp: "+233556501264", // TODO: international format, no + or spaces
  address: "P.O. Box KJ 221 Kumasi", // TODO: add street / area
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 5:00 PM" },
    { days: "Saturday & Sunday", time: "Closed" },
  ],
  socials: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export const programmes = [
  {
    title: "Nursery & Kindergarten",
    ages: "Ages 2 – 5",
    icon: "🧸",
    blurb:
      "Play-based learning that builds language, number sense, motor skills and social confidence in a warm, safe setting.",
    points: ["Phonics & early reading", "Numbers & shapes", "Creative play & music"],
  },
  {
    title: "Lower Primary",
    ages: "Primary 1 – 3 · Ages 6 – 8",
    icon: "📚",
    blurb:
      "Strong foundations in literacy and numeracy, taught through stories, hands-on activities and encouraging teachers.",
    points: ["English & Ghanaian Language", "Mathematics", "Our World, Our People"],
  },
  {
    title: "Upper Primary",
    ages: "Primary 4 – 6 · Ages 9 – 11",
    icon: "🔬",
    blurb:
      "Deeper thinking, science and ICT skills, and leadership opportunities that prepare pupils for junior high school.",
    points: ["Science & Computing", "Creative Arts", "Leadership & service"],
  },
];

export const values = [
  { icon: "💛", title: "Care", text: "Every child is known, valued and looked after." },
  { icon: "🌱", title: "Growth", text: "We celebrate progress, effort and curiosity." },
  { icon: "🤝", title: "Respect", text: "Kindness and good manners in all we do." },
  { icon: "⭐", title: "Excellence", text: "High standards, with joy in learning." },
];

export const activities = [
  "Football",
  "Music & Drama",
  "Art & Craft",
  "Computing Club",
  "Cultural Dance",
  "Spelling Bee",
  "Library Time",
  "Sports Day",
];

export const stats = [
  { value: "Ages 2–11", label: "Nursery to Primary 6" },
  { value: "Small", label: "Class sizes for personal care" },
  { value: "Safe", label: "Secure, supervised campus" },
  { value: "Caring", label: "Qualified, dedicated teachers" },
];

export const news = [
  {
    slug: "new-term-begins",
    category: "Announcement",
    date: "2026-09-08",
    title: "New term begins — welcome back!",
    excerpt:
      "Pupils returned this week with big smiles and new books. Read the term calendar and key reminders for parents.",
  },
  {
    slug: "inter-house-sports",
    category: "Event",
    date: "2026-11-14",
    title: "Annual Inter-House Sports Day",
    excerpt:
      "Join us for a day of races, relays and school spirit. Parents and guardians are warmly invited to cheer on the pupils.",
  },
  {
    slug: "open-day",
    category: "Admissions",
    date: "2026-11-21",
    title: "Open Day for prospective parents",
    excerpt:
      "Tour the classrooms, meet our teachers and learn how we support every child. Book your visit through the admissions page.",
  },
  {
    slug: "cultural-day",
    category: "Event",
    date: "2026-12-05",
    title: "Cultural Day celebration",
    excerpt:
      "Pupils will showcase Ghanaian music, dance and traditional dress in a colourful celebration of heritage.",
  },
  {
    slug: "reading-week",
    category: "Academics",
    date: "2026-10-12",
    title: "Reading Week was a success",
    excerpt:
      "From story circles to book swaps, pupils spent a joyful week discovering the magic of books.",
  },
  {
    slug: "end-of-term-concert",
    category: "Event",
    date: "2026-12-12",
    title: "End-of-term concert and prize giving",
    excerpt:
      "An afternoon of performances and awards to celebrate the achievements of the term.",
  },
];

export const staff = [
  { name: "Proprietor / Director", role: "School Leadership" },
  { name: "Head Teacher", role: "Academic Leadership" },
  { name: "Head of Nursery", role: "Early Years" },
  { name: "Head of Primary", role: "Primary Years" },
];

export const admissionSteps = [
  { title: "Enquire", text: "Send an enquiry online, call us or visit the school office." },
  { title: "Visit", text: "Tour the school and meet our teachers and leadership team." },
  { title: "Assessment", text: "A friendly, informal chat or short assessment to find the right class." },
  { title: "Documents", text: "Submit the required documents and complete the registration form." },
  { title: "Welcome", text: "Pay fees, receive your uniform list and join the Edisam family." },
];

export const documentsRequired = [
  "Completed registration form",
  "Birth certificate (copy)",
  "Two passport-sized photographs",
  "Immunisation / clinic record",
  "Previous school report (for Primary entry)",
  "Parent / guardian ID (copy)",
];

// Placeholder fees — replace with real amounts before publishing.
export const fees = [
  { level: "Nursery", admission: "GH₵ X,XXX", term: "GH₵ X,XXX" },
  { level: "Kindergarten", admission: "GH₵ X,XXX", term: "GH₵ X,XXX" },
  { level: "Primary 1 – 3", admission: "GH₵ X,XXX", term: "GH₵ X,XXX" },
  { level: "Primary 4 – 6", admission: "GH₵ X,XXX", term: "GH₵ X,XXX" },
];

export const faqs = [
  {
    q: "What ages do you accept?",
    a: "We welcome children from about 2 years old into Nursery, up to Primary 6.",
  },
  {
    q: "What is the school day like?",
    a: "Lessons run in the morning and afternoon with supervised break, lunch and activity periods. Extended care is available until 5:00 PM.",
  },
  {
    q: "Do you follow the Ghanaian curriculum?",
    a: "Yes. We teach the national curriculum and enrich it with creative arts, computing and character education.",
  },
  {
    q: "Can I visit before applying?",
    a: "Absolutely. Contact us to book a school tour or join one of our Open Days.",
  },
];

export const galleryCategories = ["All", "Classroom", "Sports", "Arts", "Events"] as const;

export const galleryItems = [
  { title: "Story time", category: "Classroom" },
  { title: "Maths in action", category: "Classroom" },
  { title: "Football practice", category: "Sports" },
  { title: "Sports day relay", category: "Sports" },
  { title: "Painting class", category: "Arts" },
  { title: "Music and drums", category: "Arts" },
  { title: "Cultural day", category: "Events" },
  { title: "Graduation", category: "Events" },
  { title: "Science corner", category: "Classroom" },
  { title: "Dance rehearsal", category: "Arts" },
  { title: "Field trip", category: "Events" },
  { title: "Playground fun", category: "Sports" },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
