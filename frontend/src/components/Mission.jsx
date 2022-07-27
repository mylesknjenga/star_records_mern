import { Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Mission = () => {
  return (
    <section style={{backgroundColor: "black"}}>
        <Container>
            <Row className="py-5">
                <Col className="py-5" xs={12} md={6}>
                    <Card style={{border: "none"}}>
                        <Card.Body style={{backgroundColor: "black", color: "white", minHeight: "50vh"}}>
                            <Card.Title as="h2" className="py-2">VMP Anthology: The Story of Zamrock</Card.Title>
                            <Card.Text className="py-2">
                            It's back! A story told through 8 rare Zambian garage rock 
                            albums — curated by Now-Again Records, Strawberry Rain Music and VMP. 
                            We delved into the Zamrock scene: finding the last musicians left standing, 
                            researching, documenting and legitimately reissuing the uber-rare albums originally 
                            released in Zambia’s cities in the 1970s.
                            </Card.Text>
                            <LinkContainer to="/products">
                            <Button variant="success" className="py-3 px-5">
                                Shop now
                            </Button>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xs={12} md={6}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn.vinylmeplease.com/s/files/1/0069/3465/9162/files/WILL0216_1200x_d60b2fcd-c936-446e-9c08-a566234f3f69.webp"
                            alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn.vinylmeplease.com/s/files/1/0069/3465/9162/files/Screen_Shot_2022-07-12_at_12.55.56_PM.png?q=60&auto=format&w=1246"
                            alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://cdn.vinylmeplease.com/s/files/1/0069/3465/9162/files/TCS_HP.jpg?q=60&auto=format&w=1246"
                            alt="Third slide"
                            />

                        </Carousel.Item>
                </Carousel>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Mission