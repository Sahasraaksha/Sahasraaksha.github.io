import useImage from "../UseImage";
// import "../Resources/testimg.png"

const Feature = (props) => {
    console.log(props);
    const {imagePath,featureInfo,featureHead} = props;
    const { loading, error, image } = useImage(imagePath);
    const loadingImage = "Loading Image...Please wait...";
    return (loading && loadingImage) || (
        <div>
            <h4>{featureHead}</h4>
            {image && <img className="teamImage" src={image}></img>}
            <p>{featureInfo}</p>
        </div>
    );
};


const Features=()=>{
    return (<>
        <div>
            <Feature featureHead={"Hello"} imagePath={"./Resources/testImg.jpg"} featureInfo={"This is the info..."} />
            <h4>Features</h4>
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