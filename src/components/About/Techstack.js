import { useTranslation } from "react-i18next";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs, SiSolidity } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import Go from "../../Assets/TechIcons/go.svg";
import C from "../../Assets/TechIcons/C++.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import HaskellIcon from "../../Assets/TechIcons/Haskell.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";

function Techstack() {const { t } = useTranslation();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt={t("techstack.c")} />
        <div className="tech-icons-text">{t("techstack.c_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt={t("techstack.javascript")} />
        <div className="tech-icons-text">{t("techstack.javascript_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt={t("techstack.typescript")} />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Go} alt={t("techstack.go")} />
        <div className="tech-icons-text">{t("techstack.go_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt={t("techstack.node")} />
        <div className="tech-icons-text">{t("techstack.nodeJs")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt={t("techstack.react")} />
        <div className="tech-icons-text">{t("techstack.reactJs")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity fontSize={"24px"} />
        <div className="tech-icons-text">{t("techstack.solidity")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt={t("techstack.mongodb")} />
        <div className="tech-icons-text">{t("techstack.mongoDb")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt={t("techstack.redux")} />
        <div className="tech-icons-text">{t("techstack.redux_2")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">{t("techstack.nextJs")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt={t("techstack.git")} />
        <div className="tech-icons-text">{t("techstack.git_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt={t("techstack.firebase")} />
        <div className="tech-icons-text">{t("techstack.firebase_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt={t("techstack.redis")} />
        <div className="tech-icons-text">{t("techstack.redis_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt={t("techstack.docker")} />
        <div className="tech-icons-text">{t("techstack.docker_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernates} alt={t("techstack.kubernetes")} />
        <div className="tech-icons-text">{t("techstack.kubernetes_2")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt={t("techstack.sql")} />
        <div className="tech-icons-text">{t("techstack.postgresql")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt={t("techstack.python")} />
        <div className="tech-icons-text">{t("techstack.python_2")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt={t("techstack.haskell")} />
        <div className="tech-icons-text">{t("techstack.java")}</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HaskellIcon} alt={t("techstack.haskell_2")} />
        <div className="tech-icons-text">{t("techstack.haskell_3")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt={t("techstack.tailwind")} />
        <div className="tech-icons-text">{t("techstack.tailwindCss")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MUI} alt={t("techstack.mui")} />
        <div className="tech-icons-text">{t("techstack.materialUi")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt={t("techstack.postman")} />
        <div className="tech-icons-text">{t("techstack.postman_2")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaRust fontSize={"24px"} />
        <div className="tech-icons-text">{t("techstack.rust")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt={t("techstack.postman_3")} className="tech-icon-images" />
        <div className="tech-icons-text">{t("techstack.aws")}</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt={t("techstack.kafka")} className="tech-icon-images" />
        <div className="tech-icons-text">{t("techstack.kafka_2")}</div>
      </Col>
    </Row>);

}

export default Techstack;