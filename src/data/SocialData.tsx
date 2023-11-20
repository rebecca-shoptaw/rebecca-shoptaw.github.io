import { socialArr } from "../types/Types";
import links from "./SiteLinks";

const social_links: socialArr[] = [
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
    link: links.resume_path,
    title: `Resume`,
  },
  {
    id: `github`,
    icon_class: `github`,
    link: `https://github.com/rebecca-shoptaw`,
    title: `Github`,
  },
];

export default social_links;