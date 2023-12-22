import { SocialInfo } from "../types/Types";
import { RESUME_PATH } from "./SiteLinks";

const SOCIAL_LINKS: SocialInfo[] = [
  {
    id: `mail`,
    icon_class: `envelope`,
    link: `mailto:rebecca@rebeccashoptaw.dev`,
    title: `Email`,
  },
  {
    id: `linkedin`,
    icon_class: `linkedin`,
    link: `https://www.linkedin.com/in/rebeccashoptaw/`,
    title: `LinkedIn`,
  },
  {
    id: `resume`,
    icon_class: `file-earmark-person`,
    link: RESUME_PATH,
    title: `Resume`,
  },
  {
    id: `github`,
    icon_class: `github`,
    link: `https://github.com/rebecca-shoptaw`,
    title: `Github`,
  },
];

export default SOCIAL_LINKS;
