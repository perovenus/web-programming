import "./cartitem.css";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import axios from "axios";

function CartItem(props) {
  const plusbtn = () => {
    axios
      .post("http://localhost/controllers/cart.controller.php", {
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
        .post("http://localhost/controllers/cart.controller.php", {
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
  const handleDelete = () => {
    axios
      .post("http://localhost/controllers/cart.controller.php", {
        action: 4,
        username: sessionStorage.getItem("username"),
        productID: props.id,
      })
      .then((res) => {
        props.reloadCart();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row" id="mainitem">
        <div className="col-sm-4 col-lg-2" id="thumbnail">
          <text
            type="button"
            class="del-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >Xóa</text>
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
                <div class="col-4" id="minus" type="button">
                  <FaMinus onClick={minusbtn} />
                </div>
                <div class="col-4 d-flex justify-content-center">
                  <text>{props.quantity}</text>
                </div>
                <div class="col-4" id="plus" type="button">
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
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa sản phẩm</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Bạn có chắc muốn xóa sản phẩm này ra khỏi giỏ hàng
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ width: '80px' }}>Không</button>
              <button
                onClick={handleDelete}
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                style={{ width: '80px' }}
              >Có</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
