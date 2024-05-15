export type ProjectInfo = {
  id: string;
  title: string;
  link?: string;
  img_id?: string;
  img_src?: string;
  img_alt: string;
  description: string;
  description_italics?: string;
  wip?: boolean;
  offline?: boolean;
};

export type SocialInfo = {
  id: string;
  icon_class: string;
  link: string;
  title: string;
};

export type ProjectTileProps = {
  project: ProjectInfo;
};

export type SocialLinkProps = {
  social: SocialInfo;
};

export type BioSnippetProps = {
  text: string;
};

export type NavItemInfo = {
  title: string;
  class: string;
  ref: string;
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
