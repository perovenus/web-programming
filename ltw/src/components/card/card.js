import "./card.css";
import { useNavigate } from "react-router-dom";
function Card(props) {
  const navigate = useNavigate();

  const goToNewsDetail = () => {
    //passing  name and id to news detail page
    navigate(`${props.name}?id=${props.id}`);
  };
  return (
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card" key={props.id} onClick={goToNewsDetail}>
        <img class="card-img-top" src={props.image} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">{props.name}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
