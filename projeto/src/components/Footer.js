import { Col, Container, Row } from "react-bootstrap"
import insta from "../assets/instagram.svg"
import linkedin from "../assets/linkedin.svg"
import github from "../assets/github.svg"


export const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col md={4} xm={12}>
                        <div></div>
                    </Col>
                    <Col md={4} xm={12}>
                        <div className="footer-bottom-text">
                            <p>CopyRight&copy; All rights reserved</p>
                        </div>
                    </Col>
                    <Col md={4} xm={12} >
                        <div className="social-icons">
                            <a href="https://www.instagram.com/matheuskemuel/"><img src={insta} alt="" /></a>
                            <a href="https://www.linkedin.com/in/matheus-kemuel-a037871b2/"><img src={linkedin} alt="" /></a>
                            <a href="https://github.com/MatheusKemuel"><img src={github} alt="" /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}