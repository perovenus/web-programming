import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import CommentBlock from '../../components/comment-block/commentblock';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ManageNewsDetail() {
  const [news, setNews] = useState({});
  const location = useLocation()
  let newsId = location.state.id
  useEffect(() => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 1,
          id: newsId
        },
      })
      .then((res) => {
        setNews(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const goToEditNewsDetail = () => {
    navigate('/edit-news-detail', {
      state: {
        id: location.state.id
      }
    });
  }

  const goBack = () => {
    navigate(-1);
  }

  const deleteNews = () => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 2,
          id: newsId
        },
      })
      .then((res) => {
        alert(res.data)
        goBack()
      })
      .catch((err) => {
        alert(err.data)
      });
  }
  const commentList = [{
    "idx": "0",
    "userName": "Hưng Lê",
    "role": "user",
    "comment": "Nhìn cũng được",
    "replyList": [
      {
        "idx": "0",
        "userName": "Hưng Lê",
        "role": "user",
        "comment": "Nhìn cũng được"
      },
      {
        "idx": "1",
        "userName": "Hưng Lê",
        "role": "admin",
        "comment": "Vậy được rồi m còn đòi gì nữa"
      }]
  }]
  return (
    <div class="body">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-9">
            <div class="mb-2 d-flex" style={{ justifyContent: 'flex-end' }}>
              <button
                onClick={deleteNews}
                type="button"
                class="btn btn-danger me-2"
                style={{ fontWeight: "600" }}>Xóa bài viết</button>
              <button
                onClick={goToEditNewsDetail}
                type="button"
                class="btn btn-outline-primary"
                style={{ height: '40px', fontWeight: "600" }}>Sửa bài viết</button>
            </div>
            <div class="news">
              {
                news.length != 0 ?
                  <>
                    <h2 class="mb-3">{news.title}</h2>
                    <p class="time-up mb-4">{news.time_up}</p>
                    <img class="mb-4" src={news.image} />
                    <p style={{ fontSize: '18px' }}>{news.content}</p>
                  </>
                  : <></>
              }
            </div>
          </div>
        </div>
        <div class="row" style={{ marginTop: '7px' }}>
          <div class="col-xs-12 col-lg-9">
            <div class="comments">
              <h5>Bình luận</h5>
              <div class="p-2">
                <div class="d-flex flex-row align-items-start">
                  <img class="rounded-circle shadow-1-strong me-3"
                    src={require('../../assets/images/cute_vl.jpg')} alt="avatar" width="40"
                    height="40" />
                  <textarea class="form-control shadow-none textarea" rows="3"></textarea >
                </div>
                <div class="mt-3">
                  <button class="btn btn-primary btn-sm" type="button">Bình luận</button>
                  <button class="btn btn-outline-primary btn-sm" type="button">Hủy</button>
                </div>
              </div>
              <hr />
              <div class="comment-list">
                {
                  commentList.map((comment) => {
                    return <CommentBlock
                      userName={comment.userName}
                      comment={comment.comment}
                      replyList={comment.replyList} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
