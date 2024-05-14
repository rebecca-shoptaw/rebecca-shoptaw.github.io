import { SocialLinkProps } from "../types/Types";

const SocialLink = (props: SocialLinkProps) => {
  const { social } = props;

  return (
    <a key={social.id} href={social.link} target="_blank" title={social.title}>
      <i id={social.id} className={`social-icon bi bi-${social.icon_class}`} />
    </a>
  );
};

export default SocialLink;
