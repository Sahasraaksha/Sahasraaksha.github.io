import About from "./About";
import Contact from "./Contact";
import Features from "./Features";
// import Help from "./Help";
import Home from "./Home";
import Solution from "./Solution";
import Team from "./Team";
// import WhyUs from "./WhyUs";


const Page = () => {
    return (
        <div>
            <section id="home">
                <Home/>
            </section>
            <section id="solution">
                <Solution/>
            </section>
            <section id="features">
                <Features/>
            </section>
            {/* <section id="whyus">
                <WhyUs/>
            </section> */}
            <section id="about">
                <About/>
            </section>
            <section id="team">
                <Team/>
            </section>
            {/* <section id="help">
                <Help/>
            </section> */}
            <footer id='contact'>
                <Contact/>
            </footer>
        </div>
    );    
}

export default Page;