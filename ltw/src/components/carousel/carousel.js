import "./carousel.css";
import Item from "../item/item";
import product from "../../assets/images/sample.webp";
function Carousel(props) {
  return (
    <div id="main-carousel">
      <div>
        <h4>
          <span>{props.title}</span>
        </h4>
      </div>
      <div class="owl-carousel owl-theme" id="body-carousel">
        {props.infos.map((image, index) => (
          <div class="item" key={index}>
            <Item image={image["image"]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
