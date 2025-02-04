import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 0);
  }, []);

  return (
    <div className="about">
      <h1 className="title big">{t("a-h1")}</h1>
      <div
        className={isVisible ? "about-container visible" : "about-container"}
      >
        <p>{t("a-p1")}</p>
        <p>{t("a-p2")}</p>
        <h4>{t("a-title1")}</h4>
        <div>
          {t("a-p3")}
          <div>{t("a-p4")}</div>
          <ul className="about-expirience">
            <li>{t("a-l1")}</li>
            <li>{t("a-l2")}</li>
            <li>{t("a-l3")}</li>
            <li>{t("a-l4")}</li>
          </ul>
          {t("a-p5")}
        </div>
        <h4>{t("a-title2")}</h4>
        <div>
          {t("a-p6")}
          <ul className="about-skills">
            <li>{t("a-l5")}</li>
            <li>{t("a-l6")}</li>
            <li>{t("a-l7")}</li>
            <li>{t("a-l8")}</li>
            <li>{t("a-l9")}</li>
            <li>{t("a-l10")}</li>
          </ul>
        </div>
        <h4>{t("a-title3")}</h4>
        <div>{t("a-p7")}</div>
      </div>
    </div>
  );
}
