import "./item.css";
function Item(props) {
  return (
    <div class="card">
      <img
        class="card-img-top"
        src={props.image}
        alt="Card image cap"
        id="item-image"
      />
      <div class="card-body">This is some text within a card body.</div>
    </div>
  );
}

export default Item;
