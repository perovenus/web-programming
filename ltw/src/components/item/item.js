import "./item.css";
function Item(props) {
  return (
    <div class="card" id="card-carousel">
      <img class="card-img-top" src={props.image} alt="" />
      <div class="card-body">
        <text>{props.title}</text>
      </div>
    </div>
  );
}

export default Item;
