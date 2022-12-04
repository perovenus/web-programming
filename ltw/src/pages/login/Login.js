import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };
  const [err, setErr] = useState("");
  const checkLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    axios
      .post("http://localhost/controllers/users.controller.php", {
        action: 1,
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.data) {
          let username = sessionStorage.getItem("username");
          if (username === null) {
            sessionStorage.setItem("username", res.data.username);
            sessionStorage.setItem("loginStat", true);
            navigate("/");
          }
        } else {
          console.log(res.data);
          setErr("Invalid username or password");
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
            id="username"
            type="text"
            placeholder="Tài khoản"
          />
        </div>
        <div class="mb-2">
          <input
            class="form-control"
            id="password"
            placeholder="Mật khẩu"
            type="password"
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
          <button type="button" class="btn btn-primary" onClick={checkLogin}>
            Đăng nhập
          </button>
        </div>
        <div class="d-flex justify-content-center">
          <p style={{ marginRight: "5px" }}>Chưa có tài khoản?</p>
          <p class="register-btn" type="button" onClick={goToRegister}>
            Đăng ký mới
          </p>
        </div>
      </div>
    </div>
  );
}
