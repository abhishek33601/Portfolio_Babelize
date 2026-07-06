import { useTranslation } from "react-i18next";
import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {const { t } = useTranslation();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt={t("toolstack.macos")} className="tech-icon-images" />
        <div className="tech-icons-text">{t("toolstack.macOs")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt={t("toolstack.chrome")} className="tech-icon-images" />
        <div className="tech-icons-text">{t("toolstack.googleChrome")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt={t("toolstack.vscode")} className="tech-icon-images" />
        <div className="tech-icons-text">{t("toolstack.vsCode")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt={t("toolstack.go")} className="tech-icon-images" />
        <div className="tech-icons-text">{t("toolstack.intellij")}</div>
      </Col>
    </Row>);

}

export default Toolstack;