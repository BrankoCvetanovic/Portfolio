import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h1 className="title">{t("a-h1")}</h1>
      <div className="about-container">
        <p>{t("a-p1")}</p>
        <p>{t("a-p2")}</p>
        <h4>{t("a-title1")}</h4>
        <p>
          {t("a-p3")}
          <div>{t("a-p4")}</div>
          <ul className="about-expirience">
            <li>{t("a-l1")}</li>
            <li>{t("a-l2")}</li>
            <li>{t("a-l3")}</li>
            <li>{t("a-l4")}</li>
          </ul>
          {t("a-p5")}
        </p>
        <h4>{t("a-title2")}</h4>
        <p>
          {t("a-p6")}
          <ul className="about-skills">
            <li>{t("a-l5")}</li>
            <li>{t("a-l6")}</li>
            <li>{t("a-l7")}</li>
            <li>{t("a-l8")}</li>
            <li>{t("a-l9")}</li>
            <li>{t("a-l10")}</li>
          </ul>
        </p>
        <h4>{t("a-title3")}</h4>
        <p>{t("a-p7")}</p>
      </div>
    </div>
  );
}
