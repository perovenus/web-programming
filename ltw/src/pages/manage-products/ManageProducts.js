import React from 'react'
import CategoriesBar from '../../components/categories-bar/CategoriesBar'
import cc from "../../assets/images/cute_vl.jpg";
import Card from '../../components/card/card';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ManageProducts() {
  const navigate = useNavigate();

  const goToAddNewProduct = () => {
    navigate("/add-new-product")
  }

  // const goAdminProductDetail = (name, id) => {
  //   //passing  name and id to news detail page
  //   navigate(`${name}?id=${id}`, {
  //     state: {
  //       id: id
  //     }
  //   });
  // };

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 0,
        },
      }) //url to see news.php
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        <div class="row g-1 news-list">
          {products.map((item) => (
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
