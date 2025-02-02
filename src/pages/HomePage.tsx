import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [isActiveArrow, setActiveArrow] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArrow((prev) => !prev);
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <h4>{t("greetings")}</h4>
      <h1 className="name">Branko Cvetanović.</h1>
      <h1 className="title">{t("home1")}</h1>
      <p>
        {t("home-main")}
        <Link to={"/projects"}>{t("home-projects")}</Link>
        {t("home-main2")}
      </p>
      <Link to="/contact" className="arrow-container">
        {t("home-contact")}
        <span className={isActiveArrow ? "arrow arrow-active" : "arrow"}>
          &#8594;
        </span>
      </Link>
    </div>
  );
}
