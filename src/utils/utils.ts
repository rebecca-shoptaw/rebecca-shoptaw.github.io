import { RESUME_PATH } from "../data/constants";

export const downloadResume = () => {
  const resumeUrl = RESUME_PATH;
  const link = document.createElement("a");
  link.href = resumeUrl;
  link.download = "Rebecca_Shoptaw_resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
