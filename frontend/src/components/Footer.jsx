import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Footer = () => {
  return (
    <footer>
            <Row>
            <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        Star Records
                    </Navbar.Brand>
                </LinkContainer>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link><i class="fa-brands fa-youtube-square fa-2x"></i></Nav.Link>
                        
                            <Nav.Link><i class="fa-brands fa-twitter-square fa-2x"></i></Nav.Link>
                       
                       
                            <Nav.Link><i class="fa-brands fa-instagram-square fa-2x"></i></Nav.Link>
                       
                       
                            <Nav.Link><i class="fa-brands fa-facebook-square fa-2x"></i></Nav.Link>
                    </Nav>

                    <Nav className="ms-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/products">
                            <Nav.Link>Shop</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </Row>
            <Row>
                <Col className="text-center py-3">
                    Copyright &copy; Star Records
                </Col>
            </Row>
    </footer>
  )
}

export default Footer;