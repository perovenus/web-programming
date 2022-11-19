import product from "../../assets/images/sample.webp";
import "./cartitem.css";
import { FaMinus, FaPlus } from "react-icons/fa";
function CartItem(props) {
  return (
    <div className="row" id="mainitem">
      <div className="col-sm-4 col-lg-2">
        <div class="row" id="thumbnail">
          <div class="col">
            <input type="checkbox" />
            <img src={product} alt="product" />
          </div>
        </div>
      </div>
      <div class="col-sm-8 col-lg-10">
        <div class="row" id="n-q-b">
          <div class="col-sm-12 col-lg-7" id="name">
            <text>Laptop ASUS TUF Gaming FX517ZC-HN077W 90NR09L3-M00510</text>
          </div>
          <div class="col-sm-4 col-lg-1" id="price">
            <text>12.999.000</text>
          </div>
          <div class="col-sm-4 col-lg-2" id="quantity">
            <div class="row" id="buttongroup">
              <div class="col-4" id="minus">
                <FaMinus />
              </div>
              <div class="col-4">
              <text>1</text>
              </div>
              <div class="col-4" id="plus">
                <FaPlus />
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-lg-2" id="total">
            <text>12.999.000</text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
