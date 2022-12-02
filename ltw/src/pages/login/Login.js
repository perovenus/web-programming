import React from "react";
import "./Login.css";
import { json, Navigate, useNavigate } from "react-router-dom";
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
          let data = res.data;
          let username = data.username;
          let admin = data.role;
          let loginStat = true;
          //save cookie
          document.cookie = `username=${username}; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/`;
          document.cookie = `admin=${admin}; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/`;
          document.cookie = `loginStat=${loginStat}; expires=Thu, 18 Dec 2022 12:00:00 UTC; path=/`;

          navigate("/");
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
            placeholder="Email hoặc số điện thoại"
          />
        </div>
        <div class="mb-2">
          <input
            class="form-control"
            id="password"
            placeholder="Mật khẩu"
            type="text"
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
