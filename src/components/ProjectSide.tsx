import { FC, useEffect, useState } from "react";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProjectSide: FC<{
  img: string;
  info: string[];
  name: string;
  about: string;
  aboutSr: string;
  linkLive: string;
  linkGit: string;
  onClickClose: () => void;
}> = ({ img, info, name, onClickClose, about, aboutSr, linkLive, linkGit }) => {
  const [isActiveArrow, setActiveArrow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArrow((prev) => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="project-side">
        <button onClick={onClickClose}>
          <X size={"17px"} />
        </button>
        <h1>{name}</h1>
        <img src={img} alt="" />
        <ul>
          {info.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
        <h4>{t("p-about")}</h4>
        <p>{i18n.language === "en" ? about : aboutSr}</p>
        <h4>{t("p-links")}</h4>
        <div className="links arrow-container ">
          <a href={linkLive}>{t("p-live")}</a>
          <a href={linkGit}>GitHub</a>
          <span className={isActiveArrow ? "arrow arrow-active" : "arrow"}>
            &#8594;
          </span>
        </div>
      </div>
      <div onClick={onClickClose} className="project-side-shade"></div>
    </>
  );
};

export default ProjectSide;
