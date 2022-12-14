import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";
import axios from "axios";
export default function Payment() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [payMethod, setPayMethod] = useState("1");

  const [emailBinded, setEmailBinded] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
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

    axios
      .post("http://localhost/controllers/users.controller.php", {
        action: 5,
        username: sessionStorage.getItem("username"),
      })
      .then((res) => {
        let userInfo = res.data[0];
        setName(userInfo.name);
        setEmail(userInfo.email);
        if (userInfo.email !== "") {
          setEmailBinded(true);
        }
        setPhoneNumber(userInfo.phone_number);
        setAddress(userInfo.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const payment = () => {
    let id_products = "";
    let quantities = "";
    cart.map((item) => {
      if (id_products === "") {
        id_products += item.id;
        quantities += item.quantity;
      } else {
        id_products += "," + item.id;
        quantities += "," + item.quantity;
      }
    });
    axios
      .post("http://localhost/controllers/ordered.controller.php", {
        action: 2,
        username: sessionStorage.getItem("username"),
        id_products: id_products,
        quantities: quantities,
        total_cash: total,
        name: name,
        method: payMethod,
        note: note,
        phone: phoneNumber,
        email: email,
        address: address,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="body">
      <div class="container">
        <div class="row g-2">
          <div class="col-xs-12 col-lg-7">
            <div class="col-left">
              <div class="container">
                <h6 class="mb-3">Th??ng tin kh??ch h??ng</h6>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    H??? v?? t??n
                  </label>
                  <input
                    class="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  {emailBinded ? (
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={email}
                      disabled
                      readOnly
                    />
                  ) : (
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  )}
                </div>
                <div class="mb-3">
                  <label for="phone-number" class="form-label">
                    S??? ??i???n tho???i
                  </label>
                  <input
                    class="form-control"
                    id="phone-number"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">
                    ?????a ch???
                  </label>
                  <input
                    class="form-control"
                    id="address"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="container">
                <h6 for="note" class="mb-3">
                  Ghi ch?? cho ????n h??ng
                </h6>
                <input
                  class="form-control"
                  id="note"
                  placeholder="Nh???p th??ng tin ghi ch?? cho nh?? b??n h??ng"
                  value={note}
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
              </div>
              <div class="container">
                <h5 class="mb-3">Ph????ng th???c thanh to??n</h5>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value)}
                >
                  <option value="1">Thanh to??n khi nh???n h??ng</option>
                  <option value="2">Thanh to??n b???ng th??? ATM n???i ?????a</option>
                  <option value="3">Thanh to??n b???ng th??? ghi n???</option>
                  <option value="4">Thanh to??n b???ng th??? VISA</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-5">
            <div class="col-right">
              <div class="container">
                <div class="d-flex flex-row header">
                  <h6>Th??ng tin gi??? h??ng({cart.length})</h6>
                  <p
                    class="edit-btn"
                    role="button"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    Ch???nh s???a
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
                        <p class="quantity">S??? l?????ng {item.quantity}</p>
                        <p class="cost">{item.cost}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="container total-charge">
                <div class="d-flex flex-row header">
                  <p>T???ng t???m t??nh</p>
                  <p style={{ fontWeight: "600" }}>{total}??</p>
                </div>
                <div class="d-flex flex-row header">
                  <p>Ph?? v???n chuy???n</p>
                  <p style={{ fontWeight: "600" }}>Mi???n ph??</p>
                </div>
                <div class="d-flex flex-row header">
                  <p style={{ marginBottom: "0px" }}>Th??nh ti???n</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#FF0000",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    {total}??
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
                    (???? bao g???m VAT)
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={payment}
                >
                  Thanh to??n
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
