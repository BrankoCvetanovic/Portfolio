import { NavLink, useLocation } from "react-router-dom";
import profilePic from "../asets/ss.jpg";
import { useTranslation } from "react-i18next";
import "./i18n";

export default function Header() {
  const location = useLocation();

  const { t, i18n } = useTranslation();

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="header">
      <NavLink className="pic-container" to={"/"}>
        <img className="prof-pic" src={profilePic} alt="" />
      </NavLink>
      <div className="links">
        {location.pathname != "/" ? (
          <NavLink to={"/"}>{t("home")}</NavLink>
        ) : null}
        {location.pathname != "/about" ? (
          <NavLink to={"/about"}>{t("about")}</NavLink>
        ) : null}
        {location.pathname != "/projects" ? (
          <NavLink to={"/projects"}>{t("projects")}</NavLink>
        ) : null}
        {location.pathname != "/contact" ? (
          <NavLink to={"/contact"}>{t("contact")}</NavLink>
        ) : null}
        <button onClick={() => changeLanguage(t("lng"))}>{t("lng")}</button>
      </div>
    </div>
  );
}
