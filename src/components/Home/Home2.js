import { useTranslation } from "react-i18next";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>{t("home2.letMe")}
              <span className="purple">{t("home2.introduce")}</span>{t("home2.myself")}
            </h1>
            <p className="home-about-body">{t("home2.iMASoftwareEngineerWho")}

              <br />
              <br />{t("home2.iMProficientIn")}

              <i>
                <b className="purple">
                  {" "}{t("home2.javascriptCRustNodeJsAnd")}
                  {" "}
                </b>
              </i>{t("home2.andIEnjoyWorking")}

              <br />
              <br />{t("home2.myKeyAreasOfInterest")}

              <i>
                <b className="purple">
                  {" "}{t("home2.webApplicationsBlockchainSolutions")}
                  {" "}
                </b>
              </i>{t("home2.andExploringNewWaysTo")}

              <br />
              <br />{t("home2.wheneverPossibleILoveBuilding")}

              <b className="purple">{t("home2.nodeJs")}</b>{t("home2.andModernFrameworksLike")}{" "}
              <i>
                <b className="purple">{t("home2.reactJs")}</b>{t("home2.and")}{" "}
                <b className="purple">{t("home2.nextJs")}</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt={t("home2.avatar")} />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>);

}
export default Home2;