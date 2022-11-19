import './hero.scss'
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container container-wide">
                <div className="hero__text">
                    <h1 className="hero__title">Hi there,<br/> I'm <span className="gradient-text">Ata!&nbsp;</span>
                    </h1>
                    <div className="hero__paragraphs">
                        <p>I love all things application and this has taken me on so many different journeys. From
                            graphic design to backend development.</p>
                        <p>I would love to show you my crafts and see if I can help you and your business with my
                            skills.</p>
                    </div>
                    <button className="btn-primary">See Works</button>
                </div>
                <div className="hero__visual-support">
                    <Spline scene="https://prod.spline.design/trKuOlQOPDrJX7tQ/scene.splinecode" />
                </div>
            </div>
        </section>
    )
}

export default Hero