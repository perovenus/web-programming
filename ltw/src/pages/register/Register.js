import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login')
  }

  return (
    <div class="body" id="login-body">
      <div class="container shadow-sm" id="login-form">
        <div class="mb-2">
          <input class="form-control" id="exampleFormControlInput1" placeholder='Tài khoản' />
        </div>
        <div class="mb-2">
          <input class="form-control" id="exampleFormControlInput1" placeholder='Mật khẩu' type="password" />
        </div>
        <div class="mb-2">
          <input class="form-control" id="exampleFormControlInput1" placeholder='Xác nhận Mật khẩu' type="password" />
        </div>
        <div class="mb-5">
          <button type="button" class="btn btn-primary">Đăng ký</button>
        </div>
        <div class="d-flex justify-content-center">
          <p style={{marginRight: '5px'}}>Đã có tài khoản?</p>
          <p class="register-btn" type="button" onClick={goToLogin}>Đăng nhập</p>
        </div>
      </div>
    </div>
  )
}