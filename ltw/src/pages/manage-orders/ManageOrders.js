import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ManageOrders.css'

export default function ManageOrders() {

  const navigate = useNavigate()

  const goToOrderDetail = (order_id, user_id) => {
    navigate(`${order_id}?id=${user_id}`)
  }

  return (
    <div class="body" style={{ paddingTop: '100px' }}>
      <div class="container">
        <h4 class="mb-4" style={{ textAlign: 'center' }}>Quản lý đơn hàng</h4>
        <button onClick={goToOrderDetail}>btn</button>
        <div class="container-fluid manage-orders-container">
          <div class="row manage-orders-header">
            <div class="col">
              <text>Mã đơn hàng</text>
            </div>
            <div class="col">
              <text>Mã khách hàng</text>
            </div>
            <div class="col">
              <text>Ghi chú</text>
            </div>
            <div class="col">
              <text>Thời gian đặt hàng</text>
            </div>
            <div class="col">
              <text>Trạng thái</text>
            </div>
            <div class="col">
              <text>Tổng tiền</text>
            </div>
          </div>
          <hr />
        </div>

      </div>
    </div>
  )
}
