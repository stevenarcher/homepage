export const SITE = {
  website: 'https://stevenarcher.com',
  author: 'Steven Archer',
  profile: 'https://satnaing.dev/',
  desc: 'Steven Archer, software developer',
  title: 'Steven Archer',
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 6,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: false,
    text: 'Suggest Changes',
    url: 'mailto:email@stevenarcher.com',
  },
  dynamicOgImage: true,
  lang: 'en',
  timezone: 'Etc/GMT0',
} as const;
