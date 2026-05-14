import Carousel from "react-bootstrap/Carousel";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import slide from "../data/Slide";
export default function CarouselBanner() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Orchids</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        {slide.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={item.title}
              style={{
                height: "500px",
                objectFit: "cover",
              }}
            />

            <Carousel.Caption>
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
