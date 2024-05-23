const ProjectText = ({ header, text }: { header: string; text: string }) => {
  return (
    <>
      <p className="project-header">{header}</p>
      <p className="project-info-text">{text}</p>
    </>
  );
};

export default ProjectText;
