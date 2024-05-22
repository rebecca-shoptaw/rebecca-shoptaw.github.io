import { ArrowRightIcon, DownloadIcon } from "@primer/octicons-react";
import { LinkedInIcon } from "../data/InfoBoxData";
import { LINKEDIN_LINK } from "../data/constants";
import { downloadResume } from "../utils/utils";

const ContactBtns = () => {
  return (
    <section className="contact-btns">
      <div className="contact-btns-top">
        <a href={LINKEDIN_LINK} target="_blank">
          <button className="btn-default">{LinkedInIcon}</button>
        </a>
        <button onClick={downloadResume} className="btn-default">
          Resume <DownloadIcon size={16} />
        </button>
      </div>

      <a href="mailto:rebecca@rebeccashoptaw.dev" target="_blank">
        <button className="contact-btn btn-default">
          Contact <ArrowRightIcon size={16} />
        </button>
      </a>
    </section>
  );
};

export default ContactBtns;
