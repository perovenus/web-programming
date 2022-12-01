import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function EditNewsDetail() {

  const location = useLocation()

  const [title, setTitle] = useState("")
  const [type, setType] = useState("1")
  const [timeUp, setTimeUp] = useState("")
  const [imgURL, setImgURL] = useState("")
  const [content, setContent] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 1,
          id: location.state.id
        },
      })
      .then((res) => {
        let news = res.data[0]
        setTitle(news.title)
        setType(news.type)
        setImgURL(news.image)
        setTimeUp(news.time_up)
        setContent(news.content)
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  const navigate = useNavigate()
  
  const goBack = () => {
    navigate(-1);
  }

  

  const editNews = () => {
    axios.post("http://localhost/controllers/news.controller.php", {
      action: 3,
      id: parseInt(location.state.id),
      title: title,
      type: type,
      image: imgURL,
      content: content
    }).then((res) => {
      alert(res.data)
      goBack()
      console.log(res.data)
    }).catch((err) => {
      alert(err.data)
    })
  }

  return (
    <div class="body" style={{ paddingTop: '100px' }}>
      <div class="container" id="container-custom">
        <h5 style={{ textAlign: 'center' }}>Chỉnh sửa bài viết</h5>
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
                value={timeUp}
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
              onClick={editNews}
              type="button" class="btn btn-primary"
              style={{ width: '120px', height: '45px', alignSelf: 'center' }}
            >Xác nhận</button>
          </div>
        </div>
      </div>
    </div>
  )
}
