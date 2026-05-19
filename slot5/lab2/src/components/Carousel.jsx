import Carousel from "react-bootstrap/Carousel";
import slide from "../data/Slide";
export default function CarouselBanner() {
  return (
    <>
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
