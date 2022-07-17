import Button from "react-bootstrap/Button"
import { LinkContainer } from "react-router-bootstrap";
function Jumbotron() {
  return (
    <section className="bg-light p-5 jumbotron">
        <h2>EVERY GREAT ALBUM<br/> HAS A STORY</h2>
        <LinkContainer to="/products">
          <Button variant="success" className="py-3 px-5">
              Shop now
          </Button>
        </LinkContainer>
    </section>
  )
}

export default Jumbotron