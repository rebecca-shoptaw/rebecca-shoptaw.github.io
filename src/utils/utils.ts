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

export const showModal = (modalId: string) => {
  const modal = document.getElementById(modalId) as HTMLDialogElement;
  if (modal) {
    modal.showModal();

    modal.addEventListener("click", function (event) {
      const rect = modal.getBoundingClientRect();
      const isInModal =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInModal) {
        modal.close();
      }
    });
  } else {
    window.onload = () => showModal(modalId);
  }
};
