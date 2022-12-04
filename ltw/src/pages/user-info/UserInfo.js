import React, { useState, useEffect } from 'react';
import './UserInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function UserInfo() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [dob, setDob] = useState("")
  const [emailBinded, setEmailBinded] = useState(false)

  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)

  useEffect(() => {
    axios
      .post("http://localhost/controllers/users.controller.php", {
        action: 5,
        username: sessionStorage.getItem("username"),
      })
      .then((res) => {
        let userInfo = res.data[0]
        setName(userInfo.name)
        setEmail(userInfo.email)
        if (userInfo.email !== "") {
          setEmailBinded(true)
        }
        setPhoneNumber(userInfo.phone_number)
        setAddress(userInfo.address)
        setDob(userInfo.dob)
        if (userInfo.gender == "Nam") {
          setMale(true)
        }
        if (userInfo.gender == "Nữ") {
          setFemale(true)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateUserInfo = () => {
    axios
      .post("http://localhost/controllers/users.controller.php", {
        action: 2,
        info: {
          username: sessionStorage.getItem("username"),
          name: name,
          email: email,
          phone_number: phoneNumber,
          address: address,
          dob: dob,
          gender: male ? "Name" : female ? "Nữ" : ""
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div class="body" style={{ paddingTop: '100px' }}>
      <div class="container" id="container-custom">
        <h5 style={{ textAlign: 'center' }}>Thông tin tài khoản</h5>
        <form class="row shadow-sm user-info-form">
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
              <label for="username" class="form-label">
                <strong>Họ và tên</strong>
              </label>
              <input
                class="form-control"
                id="username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Email</strong>
              </label>
              {
                emailBinded ?
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={email}
                    disabled readOnly
                  /> :
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
              }
            </div>
            <div class="mb-3">
              <label for="phone-number" class="form-label">
                <strong>Số điện thoại</strong>
              </label>
              <input
                class="form-control"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">
                <strong>Địa chỉ</strong>
              </label>
              <input
                class="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Ngày sinh</strong>
              </label>
              <input
                class="form-control"
                id="exampleFormControlInput1"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label">
                <strong>Giới tính</strong>
              </label>
              <div class="d-flex" style={{ justifyContent: 'space-between', width: '150px' }}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked={male}
                    onChange={(e) => setMale(e.target.value == "on")}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Nam
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                    checked={female}
                    onChange={(e) => setFemale(e.target.value == "on")}
                  />
                  <label class="form-check-label" for="flexRadioDefault2">
                    Nữ
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button
              onClick={updateUserInfo}
              type="submit"
              class="btn btn-primary"
              style={{ width: '120px', height: '45px', alignSelf: 'center' }}
            >Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  );
}
