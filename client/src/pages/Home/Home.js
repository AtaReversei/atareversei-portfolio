import './home.scss'
import Hero from "../../macro-components/Hero/Hero";
import Skills from "../../macro-components/Skills/Skills";
import Works from "../../macro-components/Works/Works";
import Contact from "../../macro-components/Contact/Contact";

const Home = () => {
    return (
        <>
            <Hero/>
            <Skills/>
            <Works/>
            <Contact/>
        </>
    )
}

export default Home