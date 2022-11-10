import "./card.css";
function Card({ props }) {
  //show width of device with console.log(window.innerWidth);
  return (
    <div class="card" style={{ width: "18rem" }} key={props.key}>
      <img class="card-img-top" src={props.image} alt="Card image cap" />
      <div class="card-body">
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Card;
