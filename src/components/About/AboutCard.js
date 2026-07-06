import { useTranslation } from "react-i18next";
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>{t("about-card.hiEveryoneIM")}
            <span className="purple">{t("about-card.soumyajitBehera")}</span>{" "}{t("about-card.from")}
            <span className="purple">{t("about-card.bhubaneswarIndia")}</span>.
            <br />{t("about-card.iMCurrentlyWorkingAsA")}
            {" "}
            <span className="purple">{t("about-card.softwareDeveloper")}</span>{t("about-card.at")}{" "}
            <span className="purple">{t("about-card.juspay")}</span>.
            <br />{t("about-card.iHoldAnIntegratedMSc")}{" "}
            <span className="purple">{t("about-card.mathematicsAndComputing")}</span> from{" "}
            <span className="purple">{t("about-card.bitMesra")}</span>.
            <br />
            <br />{t("about-card.outsideOfCodingILove")}

          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight />{t("about-card.playingGames")}
            </li>
            <li className="about-activity">
              <ImPointRight />{t("about-card.writingTechBlogs")}
            </li>
            <li className="about-activity">
              <ImPointRight />{t("about-card.travelingAndExploringNewPlaces")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{t("about-card.striveToBuildThingsThat")}
            {" "}
          </p>
          <footer className="blockquote-footer">{t("about-card.soumyajit")}</footer>
        </blockquote>
      </Card.Body>
    </Card>);

}

export default AboutCard;