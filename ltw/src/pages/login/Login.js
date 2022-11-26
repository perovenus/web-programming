import React from "react";
import "./Login.css"
function Login() {
    return (
        <div className="login-form" >


            <div className="mb-3">
  
            <input
                type="username"
                className="form-control"
                placeholder="Email hoặc số điện thoại"

            />
            </div>

            <div className="mb-3">
            <input
                type="password"
                className="form-control"
                placeholder="Mật khẩu"

            />
            </div>

  

            <div className="d-grid">
            <button type="submit" className="btn btn-primary">
               Đăng nhập
            </button>
            </div>  
            <p className="register"> Chưa có tài khoản? &#160;
            <a href="#">Đăng kí mới</a>
            </p>
        </div>
    )
}

export default Login;   