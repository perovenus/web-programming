import React from 'react'
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register')
  }

  return (
    <div class="body" id="login-body">
      <div class="container shadow-sm" id="login-form">
        <div class="mb-2">
          <input class="form-control" id="exampleFormControlInput1" placeholder='Email hoặc số điện thoại' />
        </div>
        <div class="mb-2">
          <input class="form-control" id="exampleFormControlInput1" placeholder='Mật khẩu' />
        </div>
        <div class="mb-5">
          <button type="button" class="btn btn-primary">Đăng nhập</button>
        </div>
        <div class="d-flex justify-content-center">
          <p style={{marginRight: '5px'}}>Chưa có tài khoản?</p>
          <p class="register-btn" type="button" onClick={goToRegister}>Đăng ký mới</p>
        </div>
      </div>
    </div>
  )
}
