import React from 'react'
import Card from "../../components/card/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function ManageNews() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 0,
        },
      })
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate()

  const goToAddNewNews = () => {
    navigate("/add-new-news")
  }

  console.log(news);
  return (
    <div class="body">
      <div class="container" style={{ padding: "0" }}>
        {/* <CategoriesBar /> */}
        <div class="d-flex justify-content-between">
          <h3 class="mb-3">Quản lý tin tức</h3>
          <button
            onClick={goToAddNewNews}
            type="button"
            class="btn btn-primary"
            style={{ height: '40px' }}>Thêm tin tức mới</button>
        </div>
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
                  <a class="nav-link" aria-current="page" href="#">Tin tức công nghệ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Đánh giá sản phẩm</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Thủ thuật</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Game</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="row g-1 news-list">
          {news.map((item) => (
            <Card
              image={item["image"]}
              title={item["title"]}
              time_up={item["time_up"]}
              content={item["content"]}
              id={item["id"]}
              key={item["id"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
