import './skills.scss'
import ScrollContainer from 'react-indiana-drag-scroll'

const Skills = () => {

    return (
        <section className="container padding-top-section">
            <h2 className="gradient-text">
                About Me
            </h2>
            <p>
                Drag and scroll to see more!
            </p>
            <div className="skills__grid-container padding-top-medium">
                <ScrollContainer className="skills__grid" draggingClassName="skills__grid-on-drag">
                    <div className="skill__box skill__1"></div>
                    <div className="skill__box skill__2"></div>
                    <div className="skill__box skill__3"></div>
                    <div className="skill__box skill__4"></div>
                    <div className="skill__box skill__5"></div>
                    <div className="skill__box skill__6"></div>
                    <div className="skill__box skill__7"></div>
                    <div className="skill__box skill__8"></div>
                </ScrollContainer>
            </div>
        </section>
    )
}

export default Skills