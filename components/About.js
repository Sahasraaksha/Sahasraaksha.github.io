const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div className="sahasVideoContainer">
                <iframe className="sahasVideo" src="https://www.youtube.com/embed/p_2bkGMdKdk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <p>
                Sahasraaksha was started as a team of four IIIT-B students, Sriram, Parithimalan, Nachiappan and Vikram Adithya.
                <br />
                Sahasraaksha initially started as a personal side project based on the curiosity felt on just how much more effective can existing security be made by introducing AI into it
            </p>
        </div>
    );
}

export default About;