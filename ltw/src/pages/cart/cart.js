import CartItem from "../../components/cartitem/cartitem";
import "./cart.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let currentUser = sessionStorage.getItem("username");
    if (currentUser === null) {
      navigate("/login");
    } else {
      axios
        .post("http://localhost/controllers/orders.controller.php", {
          action: 1,
          username: sessionStorage.getItem("username"),
        })
        .then((res) => {
          setCart(res.data);
          let tt = 0;
          res.data.map((item) => {
            tt += parseInt(item.total);
          });
          setTotal(tt);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div id="main">
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
            {cart.length > 0 ? (
              cart.map((item) => (
                <CartItem
                  image={item.image}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                  total={item.total}
                />
              ))
            ) : (
              <text>Bạn chưa đặt hàng</text>
            )}
          </div>
          <div class="col-sm-12 col-lg-3" id="monitor">
            <div class="row" id="monitor1">
              <div class="col-12">
                <h4 id="monitortitle">Thanh toán</h4>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">
                    <text id="monitortext">Tổng tạm tính</text>
                  </div>
                  <div class="col-6">
                    <text id="monitortext-1">{total}</text>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="row">
                  <div class="col-6">
                    <text id="monitortext">Thành tiền</text>
                  </div>
                  <div class="col-6">
                    <text id="total-1">{total}</text>
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
