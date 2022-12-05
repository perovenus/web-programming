import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ManageOrders.css";

export default function ManageOrders() {
  const navigate = useNavigate();

  const goToOrderDetail = (order_id, user_id) => {
    navigate(`${order_id}?id=${user_id}`, {
      state: {
        id: order_id,
      },
    });
  };

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost/controllers/ordered.controller.php", {
        action: 3,
      }) //url to see news.php
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="body" style={{ paddingTop: "100px" }}>
      <div class="container">
        <h4 class="mb-4" style={{ textAlign: "center" }}>
          Quản lý đơn hàng
        </h4>
        <div class="container-fluid manage-orders-container">
          <div class="row manage-orders-header">
            <div class="col-1" align="center">
              <text>Order ID</text>
            </div>
            <div class="col-1" align="center">
              <text>User ID</text>
            </div>
            <div class="col-3">
              <text>Ghi chú</text>
            </div>
            <div class="col-2" align="center">
              <text>Thời gian đặt hàng</text>
            </div>
            <div class="col-2" align="center">
              <text>Trạng thái</text>
            </div>
            <div class="col-2" align="center">
              <text>Tổng tiền</text>
            </div>
          </div>
          <div>
            {orders.length > 0 ? (
              orders.map((order) => {
                return (
                  <>
                    <hr />
                    <div class="row mb-3">
                      <div class="col-1" align="center">
                        <text>{order.order_id}</text>
                      </div>
                      <div class="col-1" align="center">
                        <text>{order.user_id}</text>
                      </div>
                      <div class="col-3">
                        <text>{order.note}</text>
                      </div>
                      <div class="col-2" align="center">
                        <text>{order.time}</text>
                      </div>
                      <div class="col-2" align="center">
                        <text>
                          {order.status ? "Đã thanh toán" : "Chưa thanh toán"}
                        </text>
                      </div>
                      <div class="col-2" align="center">
                        <text>{order.total_cash}</text>
                      </div>
                      <div class="col-1">
                        <text
                          type="button"
                          class="go-to-detail-btn"
                          onClick={() =>
                            goToOrderDetail(order.order_id, order.user_id)
                          }
                        >
                          Xem chi tiết
                        </text>
                      </div>
                    </div>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
