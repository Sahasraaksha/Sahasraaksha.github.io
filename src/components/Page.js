import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
import Help from "./Help";
import Home from "./Home";
import Solution from "./Solution";
import Team from "./Team";
import WhyUs from "./WhyUs";


const Page = () => {
    return (
        <div>
            <div id="home">
                <Home/>
            </div>
            <div id="solution">
                <Solution/>
            </div>
            <div id="features">
                <Features/>
            </div>
            <div id="whyUs">
                <WhyUs/>
            </div>
            <div id="about">
                <About/>
            </div>
            <div id="team">
                <Team/>
            </div>
            <div id="contact">
                <Contact/>
            </div>
            <div id="help">
                <Help/>
            </div>
        </div>
    );    
}

export default Page;