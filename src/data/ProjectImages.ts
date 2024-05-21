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
};
