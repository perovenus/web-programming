import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './CategoriesBar.css';

export default function CategoriesBar() {
  return (
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
          <ul class="navbar-nav flex-grow-1 pe-3">
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
  )
}
