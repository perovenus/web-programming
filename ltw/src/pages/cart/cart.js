import CartItem from "../../components/cartitem/cartitem";
import "./cart.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../payment/Payment.css";
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
        .post("http://localhost/controllers/cart.controller.php", {
          action: 1,
          username: sessionStorage.getItem("username"),
        })
        .then((res) => {
          console.log(res.data);
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
  const reloadCart = () => {
    axios
      .post("http://localhost/controllers/cart.controller.php", {
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
  };
  return (
    <div class="body">
      <div class="container">
        <div class="row mb-2 mt-2">
          <div class="col-sm-12 col-lg-9">
            <div class="d-flex justify-content-between align-items-center">
              <h3>Giỏ hàng</h3>
              <text class="del-all-btn" type="button">
                Xóa tất cả
              </text>
            </div>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-xs-12 col-lg-9">
            <div class="col-left">
              <div class="container">
                <div class="row " style={{ justifyContent: "flex-end" }}>
                  <div class="col-sm-8 col-lg-10">
                    <div class="row" style={{ justifyContent: "flex-end" }}>
                      <div
                        class="col-sm-4 col-lg-2"
                        align="right"
                        style={{ fontWeight: 600 }}
                      >
                        <text>Đơn giá</text>
                      </div>
                      <div
                        class="col-sm-4 col-lg-2"
                        align="center"
                        style={{ fontWeight: 600 }}
                      >
                        <text>Số lượng</text>
                      </div>
                      <div
                        class="col-sm-12 col-lg-2"
                        align="right"
                        style={{ fontWeight: 600 }}
                      >
                        <text>Thành tiền</text>
                      </div>
                    </div>
                  </div>
                  <hr class="mt-3" />
                </div>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <CartItem
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      quantity={item.quantity}
                      price={item.price}
                      total={item.total}
                      reloadCart={reloadCart}
                    />
                  ))
                ) : (
                  <text>Bạn chưa đặt hàng</text>
                )}
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-3">
            <div class="col-right">
              <div class="container total-charge">
                <div class="d-flex flex-row header">
                  <p>Tổng tạm tính</p>
                  <p style={{ fontWeight: "600" }}>{total}</p>
                </div>
                <div class="d-flex flex-row header">
                  <p style={{ marginBottom: "0px" }}>Thành tiền</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#0075E1",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    {total}
                  </p>
                </div>
                <div class="d-flex" style={{ justifyContent: "flex-end" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#767676",
                    }}
                  >
                    (Đã bao gồm VAT)
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Thanh toán
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
