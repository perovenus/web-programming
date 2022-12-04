import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import axios from "axios";
export default function Payment() {
  var items = [
    {
      img: "../../assets/images/laptop.webp",
      name: "Laptop ASUS TUF Gaming FX517ZC-HN077W 90NR09L3-M00510",
      quantity: "2",
      cost: "30.000.000đ",
    },
    {
      img: "../../assets/images/laptop.webp",
      name: "Laptop ASUS TUF Gaming FX517ZC-HN077W 90NR09L3-M00510",
      quantity: "2",
      cost: "30.000.000đ",
    },
    {
      img: "../../assets/images/laptop.webp",
      name: "Laptop ASUS TUF Gaming FX517ZC-HN077W 90NR09L3-M00510",
      quantity: "2",
      cost: "30.000.000đ",
    },
  ];
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
    <div class="body">
      <div class="container">
        <div class="row g-2">
          <div class="col-xs-12 col-lg-7">
            <div class="col-left">
              <div class="container">
                <h6 class="mb-3">Thông tin khách hàng</h6>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Họ và tên
                  </label>
                  <input class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value="medfancy0@gmail.com"
                    disabled
                    readOnly
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Số điện thoại
                  </label>
                  <input
                    class="form-control"
                    id="exampleFormControlInput1"
                    value="0962315400"
                    disabled
                    readOnly
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Địa chỉ
                  </label>
                  <input class="form-control" id="exampleFormControlInput1" />
                </div>
              </div>
              <div class="container">
                <h6 class="mb-3">Ghi chú cho đơn hàng</h6>
                <input
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Nhập thông tin ghi chú cho nhà bán hàng"
                />
              </div>
              <div class="container">
                <h5 class="mb-3">Phương thức thanh toán</h5>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Thanh toán khi nhận hàng</option>
                  <option value="1">Thanh toán bằng thẻ ATM nội địa</option>
                  <option value="2">Thanh toán bằng thẻ ghi nợ</option>
                  <option value="3">Thanh toán bằng thẻ VISA</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-5">
            <div class="col-right">
              <div class="container">
                <div class="d-flex flex-row header">
                  <h6>Thông tin giỏ hàng({cart.length})</h6>
                  <p class="edit-btn" role="button" onClick={()=>{
                    navigate("/cart");
                  }}>
                    Chỉnh sửa
                  </p>
                </div>
                {cart.map((item) => {
                  return (
                    <div class="mb-3 d-flex flex-row">
                      <div>
                        <img
                          style={{ size: "contain", width: "90px" }}
                          alt="item-img"
                          src={item.image}
                        />
                      </div>
                      <div style={{ paddingLeft: "20px" }}>
                        <p class="item-name">{item.name}</p>
                        <p class="quantity">Số lượng {item.quantity}</p>
                        <p class="cost">{item.cost}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="container total-charge">
                <div class="d-flex flex-row header">
                  <p>Tổng tạm tính</p>
                  <p style={{ fontWeight: "600" }}>{total}đ</p>
                </div>
                <div class="d-flex flex-row header">
                  <p>Phí vận chuyển</p>
                  <p style={{ fontWeight: "600" }}>Miễn phí</p>
                </div>
                <div class="d-flex flex-row header">
                  <p style={{ marginBottom: "0px" }}>Thành tiền</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#FF0000",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    {total}đ
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
