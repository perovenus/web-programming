import "./cartitem.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";

function CartItem(props) {
  const plusbtn = () => {
    axios
      .post("http://localhost/controllers/orders.controller.php", {
        action: 3,
        username: sessionStorage.getItem("username"),
        productID: props.id,
        num: 1,
      })
      .then((res) => {
        props.reloadCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const minusbtn = () => {
    if (props.quantity > 1) {
      axios
        .post("http://localhost/controllers/orders.controller.php", {
          action: 3,
          username: sessionStorage.getItem("username"),
          productID: props.id,
          num: -1,
        })
        .then((res) => {
          props.reloadCart();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="row" id="mainitem">
      <div className="col-sm-4 col-lg-2" id="thumbnail">
        <input type="checkbox" />
        <img src={props.image} alt="product" />
      </div>
      <div class="col-sm-8 col-lg-10">
        <div class="row" id="n-q-b">
          <div class="col-sm-12 col-lg-6" id="name">
            <text>{props.name}</text>
          </div>
          <div class="col-sm-4 col-lg-2" id="price" style={{ fontWeight: 600 }}>
            <text>{props.price}</text>
          </div>
          <div class="col-sm-4 col-lg-2" id="quantity">
            <div class="row" id="buttongroup">
              <div class="col-4" id="minus">
                <FaMinus onClick={minusbtn} />
              </div>
              <div class="col-4 d-flex justify-content-center">
                <text>{props.quantity}</text>
              </div>
              <div class="col-4" id="plus">
                <FaPlus onClick={plusbtn} />
              </div>
            </div>
          </div>
          <div
            class="col-sm-12 col-lg-2"
            id="total"
            style={{ fontWeight: 600 }}
          >
            <text>{props.total}</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
