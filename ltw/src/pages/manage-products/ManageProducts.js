import React from 'react'
import Card from '../../components/card/card'
import CategoriesBar from '../../components/categories-bar/CategoriesBar'
import cc from "../../assets/images/cute_vl.jpg";
import { useNavigate } from 'react-router-dom';

export default function ManageProducts() {
  const navigate = useNavigate();

  const goToAddNewProduct = () => {
    navigate("/add-new-product")
  }
  return (
    <div class="body">
      <div class="container" style={{ padding: "0" }}>
        <div class="d-flex justify-content-between">
          <h3 class="mb-3">Quản lý sản phẩm</h3>
          <button
            onClick={goToAddNewProduct}
            type="button"
            class="btn btn-primary"
            style={{ height: '40px' }}>Thêm sản phẩm mới</button>
        </div>
        <CategoriesBar />
        <div class="row g-2 news-list">
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
          <Card image={cc} />
        </div>
      </div>
    </div>
  )
}
