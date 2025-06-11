export const SITE = {
  website: "https://stevenarcher.com",
  author: "Steven Archer",
  profile: "https://satnaing.dev/",
  desc: "Steven Archer, software developer",
  title: "Steven Archer",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "mailto:email@stevenarcher.com",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
