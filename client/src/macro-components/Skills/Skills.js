import './skills.scss'
import ScrollContainer from 'react-indiana-drag-scroll'

const Skills = () => {

    return (
        <section className="container padding-top-large">
            <h2 className="gradient-text">
                About Me
            </h2>
            <p>
                Drag and scroll to see more!
            </p>
            <div className="skills__grid-container">
                <ScrollContainer className="skills__grid" draggingClassName="skills__grid-on-drag">
                    <div className="skill__box skill__el-1">1</div>
                    <div className="skill__box skill__el-2">2</div>
                    <p className="skill__text skill__el-3">I am somehow very long text.</p>
                    <div className="skill__box skill__el-4">4</div>
                    <div className="skill__box skill__el-5">5</div>
                    <div className="skill__design-box-1 skill__el-6">6</div>
                    <div className="skill__box skill__el-7">7</div>
                    <div className="skill__box skill__el-8">8</div>
                    <div className="skill__box skill__el-9">9</div>
                    <h3 className="skill__title skill__el-10">A React Developer.</h3>
                    <p className="skill__text skill__el-11">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur provident, voluptatibus. Aliquam beatae consequatur sapiente!</p>
                    <div className="skill__box skill__el-12">12</div>
                    <h3 className="skill__design-box-3 skill__el-13">*</h3>
                    <div className="skill__box skill__el-14">14</div>
                    <div className="skill__box skill__el-15">15</div>
                    <div className="skill__box skill__el-16">16</div>
                    <div className="skill__box skill__el-17">17</div>
                    <h3 className="skill__design-box-4 skill__el-18">
                        <i className="fa-solid fa-arrow-down-right"></i>
                    </h3>
                    <h3 className="skill__title gradient-text skill__el-19">Commit Everyday,<br/>Live a Happy Life</h3>
                    <div className="skill__design-box-0 skill__el-20"></div>
                    <div className="skill__box skill__el-21">21</div>
                    <div className="skill__box skill__el-22">22</div>
                    <div className="skill__box skill__el-23">23</div>


                </ScrollContainer>
            </div>
        </section>
    )
}

export default Skills