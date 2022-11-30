import "./card.css";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();

  const goToDetail = (name, id) => {
    //passing  name and id to news detail page
    navigate(`${name}?id=${id}`, {
      state: {
        id: id
      }
    });
  };
  return (
    props.type == "product" ?
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div
          class="card" type="button" key={props.id}
          onClick={() => goToDetail(props.name, props.id)}>
          <img class="card-img-top" src={props.image} alt="Card image cap" />
          <div class="card-body">
            <p class="card-title mb-3">{props.name}</p>
            <p class="price">{props.price} đ</p>
          </div>
        </div>
      </div>
      :
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <div
          class="card" type="button" key={props.id}
          onClick={() => goToDetail(props.title, props.id)}>
          <img class="card-img-top" src={props.image} alt="Card image cap" />
          <div class="card-body">
            <h6 class="card-title mb-2" style={{ fontWeight: 700 }}>{props.title}</h6>
            <p class="time-up mb-2">{props.time_up}</p>
            <p class="content">{props.content}</p>
          </div>
        </div>
      </div>
  );
}
export default Card;
