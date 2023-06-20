import { Col, Container, Row } from "react-bootstrap"
import html from "../assets/html5.svg"
import css from "../assets/css3-alt.svg"
import js from "../assets/square-js.svg"
import bootstrap from "../assets/bootstrap.svg"
import reactjs from "../assets/react.svg"
import node from "../assets/node.svg"

export const Skills = () => {
    return (
        <section className="skills" id="slills">
            <Container>
                <h2>Tecnologias</h2>
                <Row className="techs mt-5">
                    
                    <Col className="tech" xm={12} md={4}>
                        <div className="tech-card figure">
                            <img src={html} alt="" />
                            <div className="figcaption edit">
                                HTML
                            </div>
                        </div>
                        <div className="tech-card figure">
                            <img src={bootstrap} alt="" />
                            <div className="figcaption mt-5">
                                Bootstrap
                            </div>
                        </div>
                    </Col>
                    <Col className="tech" xm={12} md={4}>
                        <div className="tech-card figure">
                            <img src={css} alt="" />
                            <div className="figcaption edit">
                                CSS
                            </div>
                        </div>
                        <div className="tech-card figure">
                            <img src={reactjs} alt="" />
                            <div className="figcaption mt-4">
                                React Js
                            </div>
                        </div>
                    </Col>
                    <Col className="tech" xm={12} md={4}>
                        <div className="tech-card figure">
                            <img src={js} alt="" />
                            <div className="figcaption ">
                                JavaScript
                            </div>
                        </div>
                        <div className="tech-card figure">
                            <img src={node} alt="" className="mt-4"/>
                            <div className="figcaption mt-5">
                                Node Js
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}