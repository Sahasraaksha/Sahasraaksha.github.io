import useImage from "../UseImage";
// import "../Resources/testimg.png"
import featureJson from '../Resources/data.json';

const Feature = (props) => {
    // console.log(props);
    const { imagePath, featureInfo, featureHead } = props;
    const { loading, error, image } = useImage(imagePath);
    const loadingImage = "Loading Image...Please wait...";
    return (loading && loadingImage) || (
        <div>
            <h4>{featureHead}</h4>
            {image && <img className="featureImage" src={image}></img>}
            <p>{featureInfo}</p>
        </div>
    );
};


const Features = () => {
    const { featureList } = featureJson;
    const featuretest = [1, 2, 3];
    console.log(featureList);
    return (<>
        <div>
            {/* <Feature featureHead={"Hello"} imagePath={"./Resources/testImg.jpg"} featureInfo={"This is the info..."} /> */}
            <h4>Features</h4>
            {featureList.map(
                (feature) => {
                    return (
                        <div>
                            <Feature key={feature.key} featureHead={feature.featureHead} imagePath={feature.imagePath} featureInfo={feature.featureInfo} />
                        </div>
                    );
                }
            )}
            <ul className="features-ul">
                <li>AI Dynamic Feed Prioritization</li>
                <li>Anonymized Face Recognition</li>
                <li>Tampering Alerts</li>
                <li>Easily Navigate to Anomalous events in the recorded videos</li>
                <li>Analytics</li>
                <li>Real Time Alerts</li>
            </ul>
        </div>
    </>);
}

export default Features;