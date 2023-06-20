import { Col, Container, Row } from "react-bootstrap"
import astro from "../assets/—Pngtree—cartoon astronaut hugging rocket_6454425.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
    return (
        <section className="banner container-fluid" id="home">
            <Container>
                <Row>
                    <Col className="banner-left-content" xm={12} md={6} xl={7} >
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                    <h2>Olá, meu nome é <br></br><span>Matheus</span></h2>
                                    <p>
                                        Veniam ad irure incididunt exercitation in mollit est proident voluptate officia.
                                        Cupidatat deserunt incididunt do quis consectetur culpa a
                                        liquip quis consectetur in ad aliqua eiusmod.
                                    </p>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col className="banner-right-content" xm={12} md={6} xl={5} >
                        <img src={astro} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}