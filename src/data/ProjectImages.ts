export type ProjectImage = {
  src: string;
  caption: string;
  link: string;
};

export const images: { [key: string]: ProjectImage } = {
  registration: {
    src: "registration.png",
    caption: "Registration project overview",
    link: "https://github.com/internetarchive/openlibrary/issues/7694",
  },
  newContributorGuide: {
    src: "contributorGuide.png",
    caption: "New troubleshooting guide",
    link: "https://github.com/internetarchive/openlibrary/wiki/Git-Cheat-Sheet#troubleshooting-your-pull-request",
  },
  i18n: {
    src: "i18n.gif",
    caption: "Translation automation demo",
    link: "https://github.com/internetarchive/openlibrary/pull/8900",
  },
  openEditions: {
    src: "openEditions.gif",
    caption: "Live site",
    link: "/open-editions",
  },
  triolingo: { src: "triolingo.gif", caption: "Live site", link: "/triolingo" },
};
