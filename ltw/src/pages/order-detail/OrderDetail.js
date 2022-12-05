import React from 'react'

export default function OrderDetail() {
  return (
    <div class="body">
      <div class="container">
        <div class="row g-2">
          <div class="col-xs-12 col-lg-7">
            <div class="col-left">
              <div class="container">
                <div class="row mb-3">
                  <text class="col-4">Họ tên khách hàng</text>
                  <text class="col-8">Lê Công Tiến Hưng</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4">Email</text>
                  <text class="col-8">medfancy0@gmail.com</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4">Số điện thoại</text>
                  <text class="col-8">0962315400</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4">Địa chỉ</text>
                  <text class="col-8">69B, tổ 6, khu phố 5, phường An Bình, TP.Biên Hòa, tỉnh Đồng Nai</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4">Ghi chú</text>
                  <text class="col-8">Xuất hóa đơn khi giao hàng</text>
                </div>
                <div class="row mb-3">
                  <text class="col-4">Phương thức thanh toán</text>
                  <text class="col-8">Thanh toán khi nhận hàng</text>
                </div>
              </div>
              
              <div class="container">
                <h6 for="note" class="mb-3">Ghi chú cho đơn hàng</h6>
                <input
                  class="form-control"
                  id="note"
                  placeholder="Nhập thông tin ghi chú cho nhà bán hàng"
                />
              </div>
              <div class="container">
                <h5 class="mb-3">Phương thức thanh toán</h5>
                <select
                  class="form-select"
                  aria-label="Default select example"
                >
                  <option value="1">Thanh toán khi nhận hàng</option>
                  <option value="2">Thanh toán bằng thẻ ATM nội địa</option>
                  <option value="3">Thanh toán bằng thẻ ghi nợ</option>
                  <option value="4">Thanh toán bằng thẻ VISA</option>
                </select>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-lg-5">
            <div class="col-right">
              <div class="container">
                
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
              <div class="container total-charge">
                <div class="d-flex flex-row header">
                  <p>Tổng tạm tính</p>
                  <p style={{ fontWeight: "600" }}>đ</p>
                </div>
                <div class="d-flex flex-row header">
                  <p>Phí vận chuyển</p>
                  <p style={{ fontWeight: "600" }}>Miễn phí</p>
                </div>
                <div class="d-flex flex-row header">
                  <p style={{ marginBottom: "0px" }}>Thành tiền</p>
                  <p
                    style={{
                      marginBottom: "0px",
                      color: "#FF0000",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    đ
                  </p>
                </div>
                <div class="d-flex" style={{ justifyContent: "flex-end" }}>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#767676",
                    }}
                  >
                    (Đã bao gồm VAT)
                  </p>
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
