import { useState } from "react";
import Card from "./card";
import "../assets/css/carousel.css";
function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = images.length;
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };
  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        {images.map((image, index) => {
          return (
            <div
              class={
                index === currentSlide
                  ? "carousel-item active"
                  : "carousel-item"
              }
            >
              <div class="cards-wraper">
                {index === currentSlide && <Card image={image} />}
                {index === currentSlide && <Card image={image} />}
                {index === currentSlide && <Card image={image} />}
                {index === currentSlide && <Card image={image} />}
              </div>
            </div>
          );
        })}
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span
          class="carousel-control-prev-icon"
          aria-hidden="true"
          onClick={prevSlide}
        ></span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span
          class="carousel-control-next-icon"
          aria-hidden="true"
          onClick={nextSlide}
        ></span>
      </a>
    </div>
  );
}
export default Carousel;
