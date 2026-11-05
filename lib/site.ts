// Central place for all school content. Replace the placeholder values
// (phone, email, address, fees, staff names) with real details.

import { photos, type Photo } from "./images";

export const siteConfig = {
  name: "Edisam School",
  shortName: "Edisam",
  tagline: "In God We Trust",
  description:
    "Edisam School is an Educational Complex in Kumasi, Ghana, nurturing confident, curious and caring children.",
  url: "https://www.edisamschool.com", // TODO: replace with your real domain
  phone: "+233 55 650 1264" + ", " + "+233 24 375 6811", // TODO
  phoneHref: "tel:+233556501264", // TODO
  email: "info@edisamschool.com", // TODO
  whatsapp: "233556501264", // TODO: international format, no + or spaces
  address: "P.O. Box KJ 221 Kumasi", // TODO: add street / area
  hours: [
    { days: "Monday – Friday", time: "7:00 AM – 3:00 PM" },
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
    photo: photos.nurseryFriends as Photo,
    alt: "Four young pupils in checked uniform standing together",
    position: "50% 38%",
  },
  {
    title: "Lower Primary",
    ages: "Primary 1 – 3 · Ages 6 – 8",
    icon: "📚",
    blurb:
      "Strong foundations in literacy and numeracy, taught through stories, hands-on activities and encouraging teachers.",
    points: ["English & Ghanaian Language", "Mathematics", "Our World, Our People"],
    photo: photos.primaryGroup as Photo,
    alt: "A class of pupils in red PE kits posing together",
    position: "50% 50%",
  },
  {
    title: "Upper Primary, JHS 1",
    ages: "Primary 4 – 6, JHS 1 · Ages 9 – 12",
    icon: "🔬",
    blurb:
      "Deeper thinking, science and ICT skills, and leadership opportunities that prepare pupils for junior high school.",
    points: ["Science & Computing", "Creative Arts", "Leadership & service"],
    photo: photos.footballGroup as Photo,
    alt: "Older pupils gathered together on the football pitch",
    position: "50% 55%",
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
  { value: "Ages 2–12", label: "Nursery to JHS 1" },
  { value: "Conducive", label: "Class sizes for personal care" },
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
    photo: photos.campusCourtyard as Photo,
    alt: "The school courtyard and buildings",
  },
  {
    slug: "inter-house-sports",
    category: "Event",
    date: "2026-11-14",
    title: "Annual Inter-House Sports Day",
    excerpt:
      "Join us for a day of races, relays and school spirit. Parents and guardians are warmly invited to cheer on the pupils.",
    photo: photos.footballTeam as Photo,
    alt: "Pupils in football kits gathered on the pitch",
  },
  {
    slug: "open-day",
    category: "Admissions",
    date: "2026-11-21",
    title: "Open Day for prospective parents",
    excerpt:
      "Tour the classrooms, meet our teachers and learn how we support every child. Book your visit through the admissions page.",
    photo: photos.campusBuilding as Photo,
    alt: "The school building with the school bus outside",
  },
  {
    slug: "cultural-day",
    category: "Event",
    date: "2026-12-05",
    title: "Cultural Day celebration",
    excerpt:
      "Pupils will showcase Ghanaian music, dance and traditional dress in a colourful celebration of heritage.",
    photo: photos.culturalCrown as Photo,
    alt: "A girl in kente cloth and a gold crown at cultural day",
  },
  {
    slug: "reading-week",
    category: "Academics",
    date: "2026-10-12",
    title: "Reading Week was a success",
    excerpt:
      "From story circles to book swaps, pupils spent a joyful week discovering the magic of books.",
    photo: photos.pupilsGreenWall as Photo,
    alt: "Four young pupils in uniform in front of a green wall",
  },
  {
    slug: "end-of-term-concert",
    category: "Event",
    date: "2026-12-12",
    title: "End-of-term concert and prize giving",
    excerpt:
      "An afternoon of performances and awards to celebrate the achievements of the term.",
    photo: photos.culturalSpeaker as Photo,
    alt: "A girl in traditional dress speaking into a microphone",
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

export const galleryCategories = [
  "All",
  "Campus",
  "Pupils",
  "Sports",
  "Cultural Day",
  "Fun Day",
  "Outings",
] as const;

export type GalleryCategory = Exclude<(typeof galleryCategories)[number], "All">;

export type GalleryItem = {
  title: string;
  alt: string;
  category: GalleryCategory;
  photo: Photo;
};

// The first 8 items appear on the home page, so they are a mix of categories.
// Edit titles and categories here to match what each photo really shows.
export const galleryItems: GalleryItem[] = [
  { title: "Cultural day in kente", alt: "A young girl in a gold crown and kente cloth holding a microphone", category: "Cultural Day", photo: photos.culturalCrown },
  { title: "School courtyard", alt: "The Edisam school buildings and school bus across the open courtyard", category: "Campus", photo: photos.campusCourtyard },
  { title: "Team photo on the pitch", alt: "A large group of pupils in football kits on an artificial pitch", category: "Sports", photo: photos.footballTeam },
  { title: "Bouncy castle fun", alt: "A colourful inflatable slide and bouncy castle in the school yard", category: "Fun Day", photo: photos.bouncyCastle },
  { title: "Class group photo", alt: "Pupils in red PE kits posing together against a pink wall", category: "Pupils", photo: photos.primaryGroup },
  { title: "Pupils in uniform", alt: "Four young pupils in checked school uniform in front of a green wall", category: "Pupils", photo: photos.pupilsGreenWall },
  { title: "Prefects in kente sashes", alt: "Two pupil prefects wearing kente-style prefect sashes", category: "Pupils", photo: photos.prefectsPair },
  { title: "Playtime on the old jet", alt: "Pupils in school uniform playing on a yellow and grey jet display", category: "Outings", photo: photos.pupilsOnJet },
  { title: "Speaking at cultural day", alt: "A girl in traditional dress speaking into a microphone", category: "Cultural Day", photo: photos.culturalSpeaker },
  { title: "Wax-print outfit", alt: "A girl in a colourful wax-print outfit with her hand on her hip", category: "Cultural Day", photo: photos.culturalWaxPrint },
  { title: "Pitch-side group", alt: "Pupils gathered together on the football pitch", category: "Sports", photo: photos.footballGroup },
  { title: "Face painting", alt: "A boy with a painted face standing in front of the inflatable slide", category: "Fun Day", photo: photos.facePainting },
  { title: "School building", alt: "The three-storey school building with the school bus parked outside", category: "Campus", photo: photos.campusBuilding },
  { title: "Boys in red PE kits", alt: "A line of boys in red PE kits against a pink wall", category: "Pupils", photo: photos.boysRedKits },
  { title: "Traditional smock", alt: "A boy in a striped traditional smock", category: "Cultural Day", photo: photos.culturalSmock },
  { title: "Cotton candy", alt: "A boy holding cotton candy with his face painted blue", category: "Fun Day", photo: photos.cottonCandy },
  { title: "Boys' prefects", alt: "Two boy prefects wearing kente-style sashes", category: "Pupils", photo: photos.prefectsBoys },
  { title: "Cultural day outfit", alt: "A girl in a green top and wax-print skirt", category: "Cultural Day", photo: photos.culturalGreenDress },
  { title: "Pupil by the jet", alt: "A pupil in school uniform standing in front of the jet display", category: "Outings", photo: photos.outingPupilJet },
  { title: "Two friends", alt: "Two pupils in school uniform standing in front of the old buildings", category: "Pupils", photo: photos.pupilsFriends },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
