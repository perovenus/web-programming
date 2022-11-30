import Item from "../item/item";
import "./carousel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function OwlCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div id="main-carousel">
      <div>
        <h4>{props.title}</h4>
      </div>
      <Carousel responsive={responsive} draggable={false}>
        {props.data.map((item) => {
          return (
            <Item
              image={item.image}
              title={item.title === undefined ? item.name : item.title}
            />
          );
        })}
      </Carousel>
    </div>
  );
}
export default OwlCarousel;
