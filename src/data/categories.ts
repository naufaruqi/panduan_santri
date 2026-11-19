export const categoryNames = [
  "Al-Qur'an Hadis",
  "Ushul Fikih",
  "Akhlak Tasawuf",
  "Astro",
  "JavaScript",
  "Pemrograman",
  "Refleksi"
] as const;

export type CategoryName =
  typeof categoryNames[number];

export const categories = [
  {
    name: "Al-Qur'an Hadis",
    slug: "al-quran-hadis",
    group: "Pendidikan",
    description: "Kajian Al-Qur'an, hadis, dan ilmu-ilmu terkait."
  },
  {
    name: "Ushul Fikih",
    slug: "ushul-fikih",
    group: "Pendidikan",
    description: "Catatan kaidah dan metodologi penetapan hukum Islam."
  },
  {
    name: "Akhlak Tasawuf",
    slug: "akhlak-tasawuf",
    group: "Pendidikan",
    description: "Kajian akhlak, penyucian jiwa, dan pemikiran tasawuf."
  },
  {
    name: "Astro",
    slug: "astro",
    group: "Teknologi",
    description: "Tutorial dan catatan pengembangan website menggunakan Astro."
  },
  {
    name: "JavaScript",
    slug: "javascript",
    group: "Teknologi",
    description: "Catatan belajar bahasa pemrograman JavaScript."
  },
  {
    name: "Pemrograman",
    slug: "pemrograman",
    group: "Teknologi",
    description: "Catatan umum tentang dunia pemrograman."
  },
  {
    name: "Refleksi",
    slug: "refleksi",
    group: "Catatan",
    description: "Tulisan pemikiran dan refleksi pribadi."
  }
] satisfies {
  name: CategoryName;
  slug: string;
  group: string;
  description: string;
}[];

export const categoryGroups = [
  "Pendidikan",
  "Teknologi",
  "Catatan"
];

export function getCategoryByName(name: string) {
  return categories.find(
    (category) => category.name === name
  );
}

export function getCategoryBySlug(slug: string) {
  return categories.find(
    (category) => category.slug === slug
  );
}