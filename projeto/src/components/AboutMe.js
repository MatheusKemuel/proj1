import { Col, Container, Row } from "react-bootstrap"
import profileImg from "../assets/user-solid.svg"
import aboutmebg from "../assets/gradient (1).png"

export const AboutMe = () => {
    return (
        <section className="aboutMe" id="aboutMe">
            <img src={aboutmebg} alt="" className="aboutmebg"/>
            <Container>
                <Row>
                    <Col>
                        <div className="about-me-content">
                            <h2>Sobre Mim</h2>
                            <div className="profile mt-5">
                                <img src={profileImg} alt="" />
                            </div>
                            <article className="mt-5 about-me-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam
                            </article>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}