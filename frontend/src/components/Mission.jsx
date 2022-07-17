import { Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const Mission = () => {
  return (
    <section style={{backgroundColor: "black"}}>
        <Container>
            <Row className="py-5">
                <Col className="py-5" xs={12} md={6}>
                    <Card style={{border: "none"}}>
                        <Card.Body style={{backgroundColor: "black", color: "white"}}>
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
                    <Card style={{border: "none"}}>
                        <Card.Img src="https://cdn.vinylmeplease.com/s/files/1/0069/3465/9162/files/WILL0216_1200x_d60b2fcd-c936-446e-9c08-a566234f3f69.webp" alt="" />
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Mission