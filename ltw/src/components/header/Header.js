import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faArrowRightFromBracket,
  faUnlock,
  faChevronDown,
  faAnkh,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
export default function Header() {
  const [loginStat, setLoginStat] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const goToCart = () => {
    handleClickOnNavbar(5);
    navigate("/cart");
  };
  const goToAbout = () => {
    handleClickOnNavbar(1);
    navigate("/about");
  };
  const goToNews = () => {
    handleClickOnNavbar(2);
    navigate("/news");
  };
  const goToHome = () => {
    handleClickOnNavbar(5);
    navigate("/");
  };
  const goToProducts = () => {
    handleClickOnNavbar(3);
    navigate("/products");
  };
  const goToContact = () => {
    handleClickOnNavbar(4);
    navigate("/contact");
  };
  const goToUserInfo = () => {
    handleClickOnNavbar(5);
    navigate("/user-info");
  };
  const goToLogin = () => {
    handleClickOnNavbar(5);
    navigate("/login");
  };
  const LogOut = () => {
    handleClickOnNavbar(5);
    sessionStorage.clear();
    setLoginStat(false);
    setAdmin(false);
    navigate("/login");
  };

  const goToManageNews = () => {
    handleClickOnNavbar(5);
    navigate("/manage-news");
  };
  const goToManageProducts = () => {
    handleClickOnNavbar(5);
    navigate("/manage-products");
  };
  useEffect(() => {
    if (sessionStorage.getItem("loginStat")) {
      setLoginStat(true);
      axios
        .post("http://localhost/controllers/users.controller.php", {
          action: 4,
          username: sessionStorage.getItem("username"),
        })
        .then((res) => {
          setAdmin(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  });

  const [aboutActive, setAboutActive] = useState(false)
  const [newsActive, setNewsActive] = useState(false)
  const [productsActive, setProductsActive] = useState(false)
  const [contactActive, setContactActive] = useState(false)

  const handleClickOnNavbar = (e) => {
    switch (e) {
      case 1:
        setAboutActive(true);
        setNewsActive(false);
        setProductsActive(false);
        setContactActive(false);
        break;
      case 2:
        setAboutActive(false);
        setNewsActive(true);
        setProductsActive(false);
        setContactActive(false);
        break;
      case 3:
        setAboutActive(false);
        setNewsActive(false);
        setProductsActive(true);
        setContactActive(false);
        break;
      case 4:
        setAboutActive(false);
        setNewsActive(false);
        setProductsActive(false);
        setContactActive(true);
        break;
      default:
        setAboutActive(false);
        setNewsActive(false);
        setProductsActive(false);
        setContactActive(false);
        break;
    }
  }
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" type="button" onClick={goToHome}>
          BKTECH
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <a type="button">BKTECH</a>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul
              class="navbar-nav justify-content-end flex-grow-1 pe-3"
              id="navbar-nav"
            >
              <li class="nav-item">
                <a
                  class="nav-link"
                  type="button"
                  onClick={goToAbout}
                  style={{
                    fontWeight: aboutActive ? 700 : 500,
                    color: aboutActive ? '#176FC0' : ''
                  }}
                >
                  Về chúng tôi
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  type="button"
                  onClick={goToNews}
                  style={{
                    fontWeight: newsActive ? 700 : 500,
                    color: newsActive ? '#176FC0' : ''
                  }}
                >
                  Tin tức
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  type="button"
                  onClick={goToProducts}
                  style={{
                    fontWeight: productsActive ? 700 : 500,
                    color: productsActive ? '#176FC0' : ''
                  }}
                >
                  Sản phẩm
                </a>
              </li>
              <li class="nav-item active">
                <a
                  class="nav-link"
                  type="button"
                  onClick={goToContact}
                  style={{
                    fontWeight: contactActive ? 700 : 500,
                    color: contactActive ? '#176FC0' : ''
                  }}
                >
                  Liên hệ
                </a>
              </li>
            </ul>
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                {admin ? (
                  <div class="nav-link" type="button" id="shopping-cart">
                    <div
                      class="nav-link d-flex align-items-center"
                      data-bs-toggle="dropdown"
                      aria-aria-expanded="false"
                    >
                      <p style={{ fontSize: "16px" }}>Quản lý</p>
                      <FontAwesomeIcon
                        style={{ marginLeft: "5px" }}
                        icon={faChevronDown}
                        size="xs"
                      />
                    </div>
                    <ul class="dropdown-menu" id="manage-menu">
                      <li class="dropdown-item" onClick={goToManageNews}>
                        <p>Quản lý tin tức</p>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li class="dropdown-item" onClick={goToManageProducts}>
                        <p>Quản lý sản phẩm</p>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li class="dropdown-item">
                        <p>Quản lý đơn hàng</p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div class="nav-link d-flex" type="button" id="shopping-cart" onClick={goToCart}>
                    <div class="nav-link">
                      <FontAwesomeIcon icon={faCartShopping} size="xl" />
                    </div>
                    <div id="your-cart">
                      <p>Giỏ hàng của bạn</p>
                      <p>(0) sản phẩm</p>
                    </div>
                  </div>
                )}
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  {loginStat ? (
                    <>
                      <img
                        class="rounded-circle shadow-1-strong"
                        data-bs-toggle="dropdown"
                        aria-aria-expanded="false"
                        src={require("../../assets/images/cute_vl.jpg")}
                        alt="avatar"
                        width="40"
                        height="40"
                      />
                      <ul class="dropdown-menu" id="user-menu">
                        <li style={{ marginBottom: "15px" }}>
                          <div style={{ display: "flex", padding: "0 10px" }}>
                            <img
                              class="shadow-1-strong"
                              src={require("../../assets/images/cute_vl.jpg")}
                              alt="avatar"
                              width="45"
                              height="45"
                            />
                            <div style={{ marginLeft: "10px" }}>
                              <strong>Hưng Lê</strong>
                              <p
                                style={{
                                  overflow: "hidden",
                                  whiteSpace: "nowrap",
                                  textOverflow: "ellipsis",
                                  width: "170px",
                                }}
                              >
                                medfancy0@gmail.com
                              </p>
                            </div>
                          </div>
                        </li>
                        <li
                          class="dropdown-item"
                          type="button"
                          style={{ marginBottom: "15px" }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              paddingLeft: "27px",
                            }}
                            onClick={goToUserInfo}
                          >
                            <FontAwesomeIcon icon={faUser} size="md" />
                            <p style={{ marginLeft: "10px" }}>
                              Thông tin tài khoản
                            </p>
                          </div>
                        </li>
                        <li class="dropdown-item sign-out-btn" type="button">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              paddingLeft: "27px",
                            }}
                            onClick={LogOut}
                          >
                            <FontAwesomeIcon
                              icon={faArrowRightFromBracket}
                              size="md"
                            />
                            <p style={{ marginLeft: "10px" }}>Đăng xuất</p>
                          </div>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <div id="user-icon" type="button" onClick={goToLogin}>
                      <FontAwesomeIcon icon={faUser} size="md" />
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
