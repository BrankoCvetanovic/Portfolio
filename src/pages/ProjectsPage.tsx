import Project from "../components/Project";
import projects from "../data/projects";
import ProjectSide from "../components/ProjectSide";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Project = {
  img: string;
  info: string[];
  name: string;
  about: string;
  aboutSr: string;
  linkLive: string;
  linkGit: string;
  note: string | null;
};

export default function Projects() {
  const [sideIsOpen, setSideIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project>();

  const { t } = useTranslation();

  function openProjectSide(project: Project) {
    setCurrentProject(project);
    setSideIsOpen(true);
    document.body.classList.add("no-scroll");
  }

  function closeProjectSlide() {
    setSideIsOpen(false);
    document.body.classList.remove("no-scroll");
  }

  return (
    <div className="projects">
      <h1 className="title big">{t("projects")}.</h1>
      <ul className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => {
              openProjectSide(project);
            }}
          >
            <Project
              img={project.img}
              info={project.info}
              name={project.name}
            />
          </div>
        ))}
      </ul>
      {sideIsOpen ? (
        <ProjectSide
          onClickClose={closeProjectSlide}
          img={currentProject!.img}
          info={currentProject!.info}
          name={currentProject!.name}
          about={currentProject!.about}
          aboutSr={currentProject!.aboutSr}
          linkLive={currentProject!.linkLive}
          linkGit={currentProject!.linkGit}
          note={currentProject!.note}
        />
      ) : null}
    </div>
  );
}
