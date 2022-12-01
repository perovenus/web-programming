import React from 'react'
import { useState } from 'react'

export default function AddNewNews() {

  const [title, setTitle] = useState("")
  const [type, setType] = useState("1")
  const [imgURL, setImgURL] = useState("")
  const [content, setContent] = useState("")
  
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;

  return (
    <div class="body" style={{ paddingTop: '100px' }}>
      <div class="container" id="container-custom">
        <h5 style={{ textAlign: 'center' }}>Thêm bài viết mới</h5>
        <div class="add-new-product-form">
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Tiêu đề</strong>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Phân loại</strong>
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="1">Tin công nghệ</option>
                <option value="2">Đánh giá sản phẩm</option>
                <option value="3">Thủ thuật</option>
                <option value="4">Game</option>
              </select>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-xs-12 col-md-8">
              <label for="formFile" class="form-label">
                <strong>URL hình ảnh</strong>
              </label>
              <input
                class="form-control"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
            </div>
            <div class="col-xs-12 col-md-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Ngày đăng</strong>
              </label>
              <input
                class="form-control"
                value={today}
                disabled
                readOnly
              />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              <strong>Nội dung</strong>
            </label>
            <textarea
              class="form-control shadow-none textarea" rows="10"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea >
          </div>
          <div class="d-flex justify-content-center">
            <button
              type="button" class="btn btn-primary"
              style={{ width: '120px', height: '45px', alignSelf: 'center' }}
            >Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  )
}
