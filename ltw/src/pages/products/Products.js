import React from 'react'
import Card from "../../components/card/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState, useEffect } from "react";

export default function Products() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 0,
        },
      }) //url to see news.php
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="body">
      <div class="container" style={{ padding: "0" }}>
        {/* <CategoriesBar /> */}
        <nav class="navbar navbar-expand-lg categories-bar" id="categories-bar">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Nhập từ khóa cần tìm kiếm" aria-label="Search" />
              <button type="button" class="btn btn-primary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav flex-grow-1 justify-content-around pe-3">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Laptop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">PC</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Điện thoại</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Phụ kiện</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="row g-1 news-list">
          {news.map((item) => (
            <Card
              type="product"
              image={item["image"]}
              name={item["name"]}
              id={item["id"]}
              price={item["price"]}
              key={item["id"]}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
