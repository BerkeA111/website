export const SITE = {
  website: "https://www.berkeantar.com/",
  author: "Berke Antar",
  profile: "https://www.berkeantar.com/",
  desc: "Cybersecurity, Electronics & Research Notes",
  title: "BA Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000,

  // "THE PURGE": Arşiv sayfasını tekrar kapattık, temiz olsun.
  showArchives: false,

  showBackButton: true,

  // İŞTE DÜZELTTİĞİMİZ YER BURASI:
  editPost: {
    enabled: true, // "Sayfayı Düzenle" butonu açık kalsın mı? Evet.
    text: "Source Code / Edit", // Butonun ismini daha "Hacker"vari yaptım.
    // BURAYI KENDİ GITHUB REPO ADINL EŞLEŞTİRDİM:
    url: "https://github.com/berkea111/website/edit/main/",
  },

  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Europe/Istanbul",
} as const;

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};