import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  LeftContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const LeftContentBlock = ({
  icon,
  title,
  content,
  section,
  t,
  id,
}: ContentBlockProps) => {

  const checkVideo = () => {
    return icon.endsWith("mp4");
  }

  const iconMp4 = "videos/" + icon.substring(0, icon.lastIndexOf(".")) + ".mp4";
  const iconWebm = "videos/" + icon.substring(0, icon.lastIndexOf(".")) + ".webm";

  let iconElement:any;

  if(checkVideo()) {
    iconElement = (
      <video width="100%" height="100%" autoPlay muted loop>
        <source src={iconMp4} type="video/mp4"></source>
        <source src={iconWebm} type="video/webm"></source>
      </video>       
    )
  } else {
    iconElement = <SvgIcon src={icon} width="100%" height="100%" />
  }

  return (
    <LeftContentSection>
      <Fade direction="left">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={12} xs={24}>
            {iconElement}
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
        </Row>
      </Fade>
    </LeftContentSection>
  );
};

export default withTranslation()(LeftContentBlock);
