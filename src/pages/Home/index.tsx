import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import dyprContent from "../../content/dyprContent.json";
import IntrusionDetectionContent from "../../content/IntrusionDetectionContent.json";
import PersonFindingAlgoContent from "../../content/PersonFindingAlgoContent.json";
import AnalyticsContent from "../../content/AnalyticsContent.json";
import AnprContent from "../../content/AnprContent.json";
import NoParkingContent from "../../content/NoParkingContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="design_1.png"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={dyprContent.title}
        content={dyprContent.text}
        icon="ramanujan_back_dypr.mp4"
        id="features"
      />
      <ContentBlock
        type="right"
        title={IntrusionDetectionContent.title}
        content={IntrusionDetectionContent.text}
        icon="intrusion.mp4"
        id="intrusion-detection"
      />
      <ContentBlock
        type="left"
        title={PersonFindingAlgoContent.title}
        content={PersonFindingAlgoContent.text}
        icon="find_people.mp4"
        id="person-finding-algo"
      />
      <ContentBlock 
        type="right"
        title={AnalyticsContent.title}
        content={AnalyticsContent.text}
        icon="analytics.mp4"
        id="analytics"
      />
      <ContentBlock
        type="left"
        title={AnprContent.title}
        content={AnprContent.text}
        icon="anpr.mp4"
        id="anpr"
      />
      <ContentBlock
        type="right"
        title={NoParkingContent.title}
        content={NoParkingContent.text}
        icon="no_parking_iiitb.jpeg"
        id="no-parking"
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
