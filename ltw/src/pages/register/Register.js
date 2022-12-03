import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Register() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const [err, setErr] = useState("");
  const register = () => {
    axios
      .post("http://localhost/controllers/users.controller.php", {
        action: 3,
        username: document.getElementById("emailres").value,
        password: document.getElementById("passwordres").value,
      })
      .then((res) => {
        if (res.data === "Add successfully") {
          alert("Register success");
          navigate("/login");
        } else {
          setErr(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div class="body" id="login-body">
      <div class="container shadow-sm" id="login-form">
        <div class="mb-2">
          <input
            class="form-control"
            id="emailres"
            placeholder="Email hoặc số điện thoại"
          />
        </div>
        <div class="mb-2">
          <input
            class="form-control"
            id="passwordres"
            placeholder="Mật khẩu"
            type="password"
          />
        </div>
        <div class="mb-2">
          <input
            class="form-control"
            id="repassword"
            type="password"
            placeholder="Xác nhận Mật khẩu"
          />
        </div>
        {err ? (
          <div class="alert alert-danger" role="alert">
            {err}
          </div>
        ) : (
          ""
        )}
        <div class="mb-5">
          <button type="button" class="btn btn-primary" onClick={register}>
            Đăng ký
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <p style={{ marginRight: "5px" }}>Đã có tài khoản?</p>
          <p class="register-btn" type="button" onClick={goToLogin}>
            Đăng nhập
          </p>
        </div>
      </div>
    </div>
  );
}
