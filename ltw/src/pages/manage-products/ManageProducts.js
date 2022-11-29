import React from 'react'
import CategoriesBar from '../../components/categories-bar/CategoriesBar'
import cc from "../../assets/images/cute_vl.jpg";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ManageProducts() {
  const navigate = useNavigate();

  const goToAddNewProduct = () => {
    navigate("/add-new-product")
  }

  const goAdminProductDetail = (name, id) => {
    //passing  name and id to news detail page
    navigate(`${name}?id=${id}` , {
      state: {
        id: id
      }
    });
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/news.php") //url to see news.php
      .then((res) => {
        console.log(res.data);
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
        <div class="row g-2 news-list">
          {
            products.map((item) => (
              <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div
                  class="card" key={item["id"]}
                  onClick={() => goAdminProductDetail(item["name"], item["id"])}
                >
                  <img class="card-img-top" src={item["image"]} alt="Card image cap" />
                  <div class="card-body">
                    <p class="card-text">{item["name"]}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
