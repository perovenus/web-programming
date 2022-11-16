import React from 'react'
import './commentblock.css'
import { useRef } from 'react';

export default function ComementBlock({ userName, comment, replyList }) {


  return (
    <>
      <div class="p-2">
        <div class="d-flex flex-row align-items-start">
          <img class="rounded-circle shadow-1-strong me-3"
            src={require('../../assets/images/cute_vl.jpg')} alt="avatar" width="40"
            height="40" />
          <div class="flex-column" style={{ width: '100%' }}>
            <strong>{userName}</strong>
            <p style={{ margin: '0' }}>{comment}</p>
            <p class="reply-btn" data-bs-toggle="collapse" href="#collapseExample" role="button" onClick={{}}>Trả lời</p>
            <div class="collapse" id="collapseExample">
              <div class="p-2">
                <div class="d-flex flex-row align-items-start">
                  <img class="rounded-circle shadow-1-strong me-3"
                    src={require('../../assets/images/cute_vl.jpg')} alt="avatar" width="40"
                    height="40" />
                  <textarea class="form-control shadow-none textarea" rows="3"></textarea >
                </div>
                <div class="mt-3">
                  <button class="btn btn-primary btn-sm" type="button">Bình luận</button>
                  <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" href="#collapseExample">Hủy</button>
                </div>
              </div>
            </div>
            <div class="reply-list">
              {
                replyList.map((reply) => {
                  var collapseId = "collapse" + reply.idx;
                  var href = "#" + collapseId;
                  return <>
                    <div class="p-2">
                      <div class="d-flex flex-row align-items-start">
                        <img class="rounded-circle shadow-1-strong me-3"
                          src={require('../../assets/images/cute_vl.jpg')} alt="avatar" width="40"
                          height="40" />
                        <div class="flex-column" style={{ width: '100%' }}>
                          <strong>{reply.userName}</strong>
                          <p style={{ margin: '0' }}>{reply.comment}</p>
                          <p class="reply-btn" data-bs-toggle="collapse" href={href} role="button" onClick={{}}>Trả lời</p>
                          <div class="collapse" id={collapseId}>
                            <div class="p-2">
                              <div class="d-flex flex-row align-items-start">
                                <img class="rounded-circle shadow-1-strong me-3"
                                  src={require('../../assets/images/cute_vl.jpg')} alt="avatar" width="40"
                                  height="40" />
                                <textarea class="form-control shadow-none textarea" rows="3"></textarea >
                              </div>
                              <div class="mt-3">
                                <button class="btn btn-primary btn-sm" type="button">Bình luận</button>
                                <button class="btn btn-outline-primary btn-sm" type="button" data-bs-toggle="collapse" href={href}>Hủy</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
