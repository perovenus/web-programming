import bg from "../../assets/images/background.jpg";
import "./carousel.css";
import Card from "../card/card";
function Carousel(props) {
  function scrollwheel(e) {
    var scrollmenu = document.getElementById("scroll-menu");
    scrollmenu.scrollLeft += e.deltaY < 0 ? -100 : 100;
  }
  return (
    <div
      class="container-fluid"
      style={{
        padding: "0 40px",
        height: "500px",
      }}
    >
      <div class="col-12">
        <h1>
          <span>Sản phẩm bán chạy</span>
        </h1>
      </div>
      <div
        class="scrollmenu col"
        onWheel={scrollwheel}
        id="scroll-menu"
        style={{ borderRadius: "10px" }}
      >
        {props.images.map((image, index) => {
          return (
            <Card
              props={{
                image: image,
                key: index,
              }}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
