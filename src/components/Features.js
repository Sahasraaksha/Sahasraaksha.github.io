import useImage from "../UseImage";
// import "../Resources/testimg.png"
import featureJson from '../Resources/data.json';

const Feature = (props) => {
    // console.log(props);
    const { keys, imagePath, featureInfo, featureHead } = props;
    const { loading, error, image } = useImage(imagePath);
    const loadingImage = "Loading Image...Please wait...";
    const leftParams = "black-bg orient-left content-align-left image-position-right onload-content-fade-right";
    const rightParams = "white-bg orient-right content-align-right image-position-left onload-content-fade-left";
    const baseParams = "banner style1  fullscreen onload-image-fade-in ";
    const sectionStyle = (keys%2==0)?baseParams+leftParams:baseParams+rightParams;
    console.log(keys,sectionStyle);
    return (loading && loadingImage) || (
        <section className={sectionStyle}>
            <div className="content">
                <h1>{featureHead}</h1>
                <p className="major">{featureInfo}</p>
            </div>
            {image && <div className="image"><img className="img-fluid featureImage" src={image}></img></div>}
        </section>
    );
};


const Features = () => {
    const { featureList } = featureJson;
    const featuretest = [1, 2, 3];
    console.log(featureList);
    return (<>
        <div>
            {/* <Feature featureHead={"Hello"} imagePath={"./Resources/testImg.jpg"} featureInfo={"This is the info..."} /> */}
            <h1>Features</h1>
            {featureList.map(
                (feature) => {
                    return (
                        <div>
                            <Feature key={feature.key} keys={feature.key} featureHead={feature.featureHead} imagePath={feature.imagePath} featureInfo={feature.featureInfo} />
                        </div>
                    );
                }
            )}
            {/* <ul className="features-ul">
                <li>AI Dynamic Feed Prioritization</li>
                <li>Anonymized Face Recognition</li>
                <li>Tampering Alerts</li>
                <li>Easily Navigate to Anomalous events in the recorded videos</li>
                <li>Analytics</li>
                <li>Real Time Alerts</li>
            </ul> */}
        </div>
    </>);
}

export default Features;