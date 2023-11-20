export interface projectsArr {
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
}

export interface socialArr {
  id: string;
  icon_class: string;
  link: string;
  title: string;
}

export interface projectTileProps {
  project: projectsArr;
}
