import { Col, Container, Row } from "react-bootstrap"


import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export const Contact = () => {
    return (
        <section className="contact" id="contact">
            <Container>
                <Row>
                    <Col md={6}>
                            <form>
                        <Row>
                            <Col md={12} className="contact-title d-flex justify-content-center mb-5">
                                <h2>Entre em contato</h2>
                            </Col>
                                <Col md={6}>
                                    <FloatingLabel label="Digite seu nome..." className="mb-3 input">
                                        <Form.Control type="text" placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Col>

                                <Col md={6}>
                                    <FloatingLabel controlId="floatingTextarea" label="Digite seu email..." className="mb-3">
                                        <Form.Control type="email" placeholder="Leave a comment here" />
                                    </FloatingLabel>
                                </Col>

                                <Col md={12}>
                                    <FloatingLabel controlId="floatingTextarea2" label="Mensagem">
                                        <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
                                    </FloatingLabel>
                                </Col>

                                <Col>
                                    <input type="submit" className="col-12 mt-5 btn-contact" value="Enviar" />
                                </Col>

                        </Row>
                            </form>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}