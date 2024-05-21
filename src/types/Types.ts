export type SocialInfo = {
  id: string;
  icon_class: string;
  link: string;
  title: string;
};

export type SocialLinkProps = {
  social: SocialInfo;
};

export type TechElement = {
  title: string;
  path: string;
  color: string;
  url: string;
};

export type TechStackSection = {
  header: string;
  elements: TechElement[];
};

export type ExperienceItem = {
  logo: string;
  title: string;
  description: string;
};

export type BioItem = {
  icon: JSX.Element;
  title: string;
  text: string;
  link?: string;
};
