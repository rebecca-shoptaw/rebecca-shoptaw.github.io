import { RESUME_PATH, GIT_LINK, LINKEDIN_LINK } from "./constants";
import { BioItem } from "../types/Types";

export const BioInfo: BioItem[] = [
  {
    icon: "🏢",
    title: "Engineering Fellow & Frontend/i18n Lead",
    text: "The Internet Archive's Open Library project",
  },
  {
    icon: "📬",
    title: "Email",
    text: "rebecca@rebeccashoptaw.dev",
    link: "mailto:rebecca@rebeccashoptaw.dev",
  },
  {
    icon: "🤝",
    title: "LinkedIn",
    text: "/in/rebeccashoptaw/",
    link: LINKEDIN_LINK,
  },
  {
    icon: "📄",
    title: "Resume",
    text: "Rebecca_Shoptaw_resume.pdf",
    link: RESUME_PATH,
  },
  {
    icon: "🤖",
    title: "GitHub",
    text: "/rebecca-shoptaw",
    link: GIT_LINK,
  },
];

export const BioValues: BioItem[] = [
  {
    icon: "✨",
    title: "Clean, DRY code",
    text: "Easy to read, easy to update",
  },
  {
    icon: "🧩",
    title: "Modularity",
    text: "Write it once, use it 800 times",
  },
  {
    icon: "✅",
    title: "Maintainable code",
    text: "No hacky workarounds, find a solution that makes sense and will last",
  },
  {
    icon: "✉️",
    title: "Clear communication",
    text: "The only way anything gets done",
  },
];
