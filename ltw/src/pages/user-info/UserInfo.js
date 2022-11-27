import React from 'react';
import './UserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

export default function UserInfo() {
  return (
    <div class="body" style={{ paddingTop: '100px'}}>
      <div class="container" id="container-custom">
        <h5 style={{textAlign: 'center'}}>Thông tin tài khoản</h5>
        <div class="row shadow-sm user-info-form">
          <div class="col-xs-12 col-sm-4" align="center" >
            <div>
              <img class="mb-3 shadow-1-strong rounded-circle user-avt"
                src={require('../../assets/images/cute_vl.jpg')}
                alt="avatar"
                type="button"
                width="150"
                height="150" />
              <div class="img-picker-btn" type="button">
                <FontAwesomeIcon icon={faCamera} size="lg" />
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-8">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Họ và tên</strong>
              </label>
              <input class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Email</strong>
              </label>
              <input type="email" class="form-control" id="exampleFormControlInput1" value="medfancy0@gmail.com" disabled readOnly />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Số điện thoại</strong>
              </label>
              <input class="form-control" id="exampleFormControlInput1" value="0962315400" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Địa chỉ</strong>
              </label>
              <input class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Ngày sinh</strong>
              </label>
              <input class="form-control" id="exampleFormControlInput1" type="date" />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Giới tính</strong>
              </label>
              <div class="d-flex" style={{ justifyContent: 'space-between', width: '150px' }}>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Nam
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Nữ
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-primary" style={{width: '120px', height: '45px', alignSelf: 'center'}}>Cập nhật</button>
          </div>
        </div>
      </div>
    </div>
  );
}
