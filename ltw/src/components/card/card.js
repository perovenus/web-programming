import "./card.css";
function Card(props) {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <div class="card" key={props.key} >
        <img class="card-img-top" src={props.image} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
