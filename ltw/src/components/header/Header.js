import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  var loginStat = true;

  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Tên gì đó</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Tên gì đó</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3" id="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Về chúng tôi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tin tức</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Sản phẩm</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Liên hệ</a>
              </li>
            </ul>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <div class="nav-link" id="shopping-cart" onClick={() => console.log("Cart click")}>
                  <div class="nav-link">
                    <FontAwesomeIcon icon={faCartShopping} size="xl" />
                  </div>
                  <div id="your-cart">
                    <p>Giỏ hàng của bạn</p>
                    <p>(0) sản phẩm</p>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  {
                    loginStat ?
                      <img class="rounded-circle shadow-1-strong me-3"
                        src={require('../../assets/images/cute_vl.jpg')} alt="avatar" width="40"
                        height="40" />
                      :
                      <div id="user-icon">
                        <FontAwesomeIcon icon={faUser} size="lg" />
                      </div>
                  }
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
