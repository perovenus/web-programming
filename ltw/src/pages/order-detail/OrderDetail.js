import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { text } from '@fortawesome/fontawesome-svg-core'

export default function OrderDetail() {

  const location = useLocation()

  const [orderDetail, setOrderDetail] = useState({});
  const [productList, setProductList] = useState([]);


  useEffect(() => {
    axios
      .post("http://localhost/controllers/ordered.controller.php", {
        action: 4,
        id: location.state.id

      }) //url to see news.php
      .then((res) => {
        let order_detail = res.data[0]
        setOrderDetail(order_detail);
        console.log(order_detail.product_list)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   if (orderDetail.product_list.length > 0) {
  //     axios
  //       .post("http://localhost/controllers/ordered.controller.php", {
  //         action: 5,
  //         id_list: orderDetail.product_list.length,
  //       })
  //       .then((res) => {
  //         console.log("Djtme cuoc doi")
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }, []);

  return (
    <div class="body">
      <div class="container">
        <div class="row g-2">
          <div class="col-xs-12 col-lg-7">
            <div class="col-left">
              <div class="container">
                <div class="row mb-3">
                  <text class="col-4">
                    <strong>
                      Họ tên khách hàng
                    </strong>
                  </text>
                  <text class="col-8">{orderDetail.customer_name}</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Email</strong></text>
                  <text class="col-8">{orderDetail.email}</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Số điện thoại</strong></text>
                  <text class="col-8">{orderDetail.phone_number}</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Địa chỉ</strong></text>
                  <text class="col-8">{orderDetail.address}</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Ghi chú</strong></text>
                  <text class="col-8">{orderDetail.note}</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Thời gian đặt hàng</strong></text>
                  <text class="col-8">{orderDetail.time}</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Phương thức thanh toán</strong></text>
                  <text class="col-8">{
                    orderDetail.pay_method == 1 ? "Thanh toán khi nhận hàng" : ""
                  }</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4"><strong>Tổng tiền</strong></text>
                  <text
                    class="col-8"
                    style={{ color: 'red', fontSize: '20px', fontWeight: '700' }}
                  >{orderDetail.total_cash}</text>
                </div>
                <div class="row mb-5">
                  <text class="col-4"><strong>Tình trạng</strong></text>
                  {
                    orderDetail.status == 1 ?
                      <text class="col-8" style={{ color: 'blue', fontWeight: '500' }}>Đã thanh toán</text>
                      :
                      <text class="col-8" style={{ color: 'red', fontWeight: '500' }}>Chưa thanh toán</text>
                  }
                </div>
                <div class="d-flex justify-content-center">
                  <button type="button" class="btn btn-primary" style={{ height: '40px', width: '100px' }}>Xác nhận</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-5">
            <div class="col-right">
              <div class="container">
                <h6>Danh sách sản phẩm</h6>
                {/* {cart.map((item) => {
                  return (
                    <div class="mb-3 d-flex flex-row">
                      <div>
                        <img
                          style={{ size: "contain", width: "90px" }}
                          alt="item-img"
                          src={item.image}
                        />
                      </div>
                      <div style={{ paddingLeft: "20px" }}>
                        <p class="item-name">{item.name}</p>
                        <p class="quantity">Số lượng {item.quantity}</p>
                        <p class="cost">{item.cost}</p>
                      </div>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
