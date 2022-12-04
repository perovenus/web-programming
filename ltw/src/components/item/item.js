import "./item.css";
import { useNavigate } from "react-router-dom";

function Item(props) {
  const navigate = useNavigate();

  const goToNewsDetail = () => {
    navigate("/news-detail", {
      state: {
        id: props.id,
      },
    });
  };

  const goToProductDetail = () => {
    navigate("/product-detail", {
      state: {
        id: props.id,
      },
    });
  };
  return props.type == "news" ? (
    <div class="card" id="card-carousel" type="button" onClick={goToNewsDetail}>
      <img class="card-img-top" src={props.image} alt="Card image cap" />
      <div class="card-body d-flex flex-column justify-content-between">
        <h6 class="card-title mb-2" style={{ fontWeight: 700 }}>
          {props.title}
        </h6>
        <p class="time-up mb-2">{props.time_up}</p>
        <p class="content">{props.content}</p>
      </div>
    </div>
  ) : (
    <div
      class="card"
      id="card-carousel"
      type="button"
      onClick={goToProductDetail}
    >
      <img class="card-img-top" src={props.image} alt="Card image cap" />
      <div class="card-body d-flex flex-column justify-content-between">
        <p class="card-title mb-3">{props.name}</p>
        <p class="price">{props.price} đ</p>
      </div>
    </div>
  );
}

export default Item;
