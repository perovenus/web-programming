import Header from "../../components/header/Header";
import product from "../../assets/images/sample.webp";
import CartItem from "../../components/cartitem/cartitem";
import "./cart.css";
function Cart() {
  return (
    <div id="main">
      <Header />
      <div class="container" id="maincart">
        <div class="row" id="cartheader">
          <div class="col-sm-12 col-lg-9">
            <div class="row">
              <div class="col">
                <h2>Giỏ hàng</h2>
              </div>
              <div class="col" id="delall">
                <span>xóa tất cả</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row" id="cartbody">
          <div class="col-sm-12 col-lg-9" id="listitem">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div class="col-sm-12 col-lg-3" id="monitor">
            <div class="row" id="monitor1">
              <div class="col-12">
                <h4 id="monitortitle">Thanh toán</h4>
              </div>
              <div class="col-12">
                <div class="row" >
                  <div class="col-6">
                    <text id="monitortext">Tổng tạm tính</text>
                  </div>
                  <div class="col-6">
                    <text id="monitortext-1">12.999.000</text>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row" >
                  <div class="col-6">
                    <text id="monitortext">Thành tiền</text>
                  </div>
                  <div class="col-6">
                    <text id="total-1">12.999.000</text>
                  </div>
                </div>
              </div>
              <div class="col-12" id="conti">
                <button type="button" class="btn btn-primary btn-block">
                  Tiếp tục
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
