import "./carousel.css";
import Item from "../item/item";
function Carousel(props) {
  return (
    <div
      style={{
        padding: "0 40px",
        backgroundColor: "#ffffff",
        marginBottom: "30px",
      }}
    >
      <div class="col-12">
        <h4>
          <span>{props.title}</span>
        </h4>
      </div>
      <div class="owl-carousel owl-theme">
        {props.images.map((image, index) => (
          <div class="item" key={index}>
            <Item image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
