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
      <div class="mb-3">
        <h4>{props.title}</h4>
      </div>
      <Carousel responsive={responsive} draggable={false}>
        {props.data.map((item) => {
          return (
            props.type == "news" ?
              <Item
                type="news"
                image={item.image}
                title={item.title}
                time_up={item.time_up}
                content={item.content}
                id={item.id}
                key={item.id}

              /> :
              <Item
                type="product"
                image={item.image}
                name={item.name}
                id={item.id}
                price={item.price}
                key={item.id}
              />
          );
        })}
      </Carousel>
    </div>
  );
}
export default OwlCarousel;
