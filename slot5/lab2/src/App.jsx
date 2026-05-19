import "bootstrap/dist/css/bootstrap.min.css";
import CarouselBanner from "./components/Carousel";
import NavBar from "./components/NavBar";
import Orchids from "./components/Orchids";
function App() {
  return (
    <>
      <NavBar />
      <CarouselBanner></CarouselBanner>
      <Orchids></Orchids>
    </>
  );
}

export default App;
