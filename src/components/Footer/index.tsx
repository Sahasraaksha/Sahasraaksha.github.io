import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import { useState } from "react";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  Span,
  CustomNavLink
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {

  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLink onClick={() => scrollTo("design_image")}>
          <Span>{t("Home")}</Span>
        </CustomNavLink>
        <CustomNavLink onClick={() => scrollTo("mission")}>
          <Span>{t("About")}</Span>
        </CustomNavLink>
        <CustomNavLink onClick={() => scrollTo("features")}>
          <Span>{t("Features")}</Span>
        </CustomNavLink>
        <CustomNavLink
          onClick={() => scrollTo("contact")}
        >
          <Span>
            {t("Contact")}
          </Span>
        </CustomNavLink>
      </>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row id="contact" justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:sahasraaksha1000@gmail.com">
                <Chat>{t(`sahasraaksha1000@gmail.com`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Quick Links")}</Title>
              <MenuItem></MenuItem>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <iframe src='https://www.youtube.com/embed/p_2bkGMdKdk'
                  allow='autoplay; encrypted-media'
              />
            </Col>
          </Row>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Empty />
              <Language>{t("Sahasraaksha")}</Language>
              <Para>AI CCTV surveillance for the web</Para>
              <Para>&copy; Copyrights by Sahasraaksha. All rights reserved.</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Attributes")}</Title>
              <Para>Base template from <a href="https://github.com/Adrinlol/create-react-app-adrinlol">adrinlol</a></Para>
              <Para>Base design from <a href="https://www.vecteezy.com/free-vector/smart-city">Vecteezy (husein signart)</a></Para>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              
            </Col>
          </Row>
        </Container>
      </FooterSection>
      
    </>
  );
};

export default withTranslation()(Footer);
