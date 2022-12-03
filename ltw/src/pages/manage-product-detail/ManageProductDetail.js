import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckFast,
  faCircleCheck,
  faRotateLeft,
  faGears,
  faLaptop,
  faShieldHalved
} from '@fortawesome/free-solid-svg-icons';
import CommentBlock from '../../components/comment-block/commentblock';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import './ManageProductDetail.css'

export default function ManageProductDetail() {
  const [product, setProduct] = useState({});
  const [specifications, setSpecifications] = useState({})
  const location = useLocation();

  useEffect(() => {
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 1,
          id: location.state.id
        },
      }) //url to see news.php
      .then((res) => {
        setProduct(res.data[0]);
        setSpecifications(JSON.parse(res.data[0].attribute))
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const goToEditProductDetail = () => {
    navigate('/edit-product-detail', {
      state: {
        id: location.state.id
      }
    });
  }


  const deleteProduct = () => {
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 2,
          id: location.state.id
        }
      }).then((res) => {
        alert(res.data)
        if (res.data == "Delete successfully") {
          navigate(-1)
        }
      }).catch((err) => {
        alert(err.data)
      })
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
    <>
      {
        product.length != 0 ?
          <div class="body">
            <div class="container">
              <div class="row g-2">
                <div class="col-xs-12 col-lg-9">
                  <div class="product-summary">
                    <div class="container-fluid">
                      <div class="row">
                        <div class="col-xs-12 col-lg-5">
                          <img src={product.image} class="product-img" />
                        </div>
                        <div class="col-xs-12 col-lg-7">
                          <div style={{ padding: '30px' }}>
                            <h5>
                              {product.name}
                            </h5>
                            <p>Thương hiệu<span>{product.brand}</span></p>
                            <h3>{product.price} đ</h3>
                            {
                              product.type == 1 ?
                                <ul>
                                  <li>CPU: {specifications.cpu}</li>
                                  <li>Màn hình: {specifications.screen}</li>
                                  <li>RAM: {specifications.ram}</li>
                                  <li>Đồ họa: {specifications.gpu} </li>
                                  <li>Lưu trữ: {specifications.storage}</li>
                                  <li>Hệ điều hành: {specifications.os}</li>
                                  <li>Pin: {specifications.pin}</li>
                                  <li>Khối lượng: {specifications.weight}</li>
                                </ul> :
                                product.type == 2 ?
                                  <ul>
                                    <li>CPU: {specifications.cpu}</li>
                                    <li>RAM: {specifications.ram}</li>
                                    <li>Đồ họa: {specifications.gpu} </li>
                                    <li>Lưu trữ: {specifications.storage}</li>
                                  </ul> :
                                  product.type == 3 ?
                                    <ul>
                                      <li>Màn hình: {specifications.screen}</li>
                                      <li>Camera sau: {specifications.backcam}</li>
                                      <li>Camera trước: {specifications.frontcam}</li>
                                      <li>Bộ nhớ: {specifications.rom}</li>
                                      <li>RAM: {specifications.ram}</li>
                                      <li>Hệ điều hành: {specifications.os} </li>
                                    </ul> :
                                    <></>
                            }
                            <hr />
                            <div class="container-fluid">
                              <div class="row">
                                <div class="col-6">
                                  <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">Xóa</button>
                                </div>
                                <div class="col-6">
                                  <button type="button" class="btn btn-outline-primary" onClick={goToEditProductDetail} >Chỉnh sửa</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-lg-3">
                  <div class="delivery-policy">
                    <strong>Chính sách bán hàng</strong>
                    <div>
                      <span style={{ width: '25px', height: '25px' }}>
                        <FontAwesomeIcon icon={faTruckFast} />
                      </span>
                      <p>
                        Miễn phí giao hàng cho đơn hàng từ 800k
                      </p>
                    </div>
                    <div>
                      <span style={{ width: '25px', height: '25px' }}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      <p>
                        Cam kết hàng chính hãng 100%
                      </p>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                      <span style={{ width: '25px', height: '25px' }}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                      </span>
                      <p>
                        Đổi trả trong vòng 10 ngày
                      </p>
                    </div>
                    <strong>Dịch vụ khác</strong>
                    <div>
                      <span style={{ width: '25px', height: '25px' }}>
                        <FontAwesomeIcon icon={faGears} />
                      </span>
                      <p>
                        Sửa chữa đồng giá 150.000đ
                      </p>
                    </div>
                    <div>
                      <span style={{ width: '25px', height: '25px' }}>
                        <FontAwesomeIcon icon={faLaptop} />
                      </span>
                      <p>
                        Vệ sinh máy tính, laptop
                      </p>
                    </div>
                    <div>
                      <span style={{ width: '25px', height: '25px' }}>
                        <FontAwesomeIcon icon={faShieldHalved} />
                      </span>
                      <p>
                        Bảo hành tại nhà
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row g-0" style={{ marginTop: '7px' }}>
                <div class="col-xs-12 col-lg-4 order-lg-last">
                  <div class="product-spec">
                    <h5>Thông tin chi tiết</h5>
                    <table style={{ width: '100%' }}>
                      <tr>
                        <td>Thương hiệu</td>
                        <td>{product.brand}</td>
                      </tr>
                      <tr>
                        <td>Bảo Hành</td>
                        <td>{product.warranty}</td>
                      </tr>
                      <p>Thông tin chung</p>
                      {
                        product.type == 1 ?
                          <>
                            <tr>
                              <td>Series laptop</td>
                              <td>{specifications.series}</td>
                            </tr>
                            <tr>
                              <td>Part-number</td>
                              <td>{specifications.partnum}</td>
                            </tr>
                            <tr>
                              <td>Màu sắc</td>
                              <td>{specifications.color}</td>
                            </tr>
                            <tr>
                              <td>Nhu cầu</td>
                              <td>{specifications.demand}</td>
                            </tr>
                            <p>Cấu hình chi tiết</p>
                            <tr>
                              <td>Thế hệ CPU</td>
                              <td>{specifications.cpugen}</td>
                            </tr>
                            <tr>
                              <td>CPU</td>
                              <td>{specifications.cpu}</td>
                            </tr>
                            <tr>
                              <td>Chip đồ họa</td>
                              <td>{specifications.gpu}</td>
                            </tr>
                            <tr>
                              <td>RAM</td>
                              <td>{specifications.ram}</td>
                            </tr>
                            <tr>
                              <td>Màn hình</td>
                              <td>{specifications.screen}</td>
                            </tr>
                            <tr>
                              <td>Lưu trữ</td>
                              <td>{specifications.storage}</td>
                            </tr>
                            <tr>
                              <td>Bàn phím</td>
                              <td>{specifications.keyboard}</td>
                            </tr>
                            <tr>
                              <td>Hệ điều hành</td>
                              <td>{specifications.os}</td>
                            </tr>
                            <tr>
                              <td>Khối lượng</td>
                              <td>{specifications.weight}</td>
                            </tr>
                          </>
                          : product.type == 2 ?
                            <>
                              <tr>
                                <td>Part-number</td>
                                <td>{specifications.partnum}</td>
                              </tr>
                              <tr>
                                <td>Màu sắc</td>
                                <td>{specifications.color}</td>
                              </tr>
                              <p>Cấu hình chi tiết</p>
                              <tr>
                                <td>Dòng cpu</td>
                                <td>{specifications.cpuseries}</td>
                              </tr>
                              <tr>
                                <td>Thế hệ CPU</td>
                                <td>{specifications.cpugen}</td>
                              </tr>
                              <tr>
                                <td>CPU</td>
                                <td>{specifications.cpu}</td>
                              </tr>
                              <tr>
                                <td>Chip đồ họa</td>
                                <td>{specifications.gpu}</td>
                              </tr>
                              <tr>
                                <td>RAM</td>
                                <td>{specifications.ram}</td>
                              </tr>
                              <tr>
                                <td>Lưu trữ</td>
                                <td>{specifications.storage}</td>
                              </tr>
                              <tr>
                                <td>Hệ điều hành</td>
                                <td>{specifications.os}</td>
                              </tr>
                            </>
                            : product.type == 3 ?
                              <>
                                <tr>
                                  <td>Series</td>
                                  <td>{specifications.series}</td>
                                </tr>
                                <tr>
                                  <td>Màu sắc</td>
                                  <td>{specifications.color}</td>
                                </tr>
                                <p>Màn hình</p>
                                <tr>
                                  <td>Loại màn hình</td>
                                  <td>{specifications.screen}</td>
                                </tr>
                                <p>Cấu hình</p>
                                <tr>
                                  <td>Dung lượng</td>
                                  <td>{specifications.rom}</td>
                                </tr>
                                <tr>
                                  <td>Hệ điều hành</td>
                                  <td>{specifications.os}</td>
                                </tr>
                                <tr>
                                  <td>RAM</td>
                                  <td>{specifications.ram}</td>
                                </tr>
                                <tr>
                                  <td>Pin</td>
                                  <td>{specifications.pin}</td>
                                </tr>
                                <p>Camera</p>
                                <tr>
                                  <td>Camera sau</td>
                                  <td>{specifications.backcam}</td>
                                </tr>
                                <tr>
                                  <td>Camera trước</td>
                                  <td>{specifications.frontcam}</td>
                                </tr>
                                <p>Trọng lượng</p>
                                <tr>
                                  <td>Khối lượng</td>
                                  <td>{specifications.weight}</td>
                                </tr>
                              </> :
                              <>
                                <tr>
                                  <td>Màu sắc</td>
                                  <td>{specifications.color}</td>
                                </tr>
                                <tr>
                                  <td>Phụ kiện</td>
                                  <td>{specifications.type}</td>
                                </tr>
                                <tr>
                                  <td>Nhu cầu</td>
                                  <td>{specifications.demand}</td>
                                </tr>
                                <tr>
                                  <td>Kết nối</td>
                                  <td>{specifications.connect}</td>
                                </tr>
                              </>
                      }
                    </table>
                  </div>
                </div>
                <div class="col-xs-12 col-lg-8 order-xs-first">
                  <div class="product-description">
                    <h5>Mô tả sản phẩm</h5>
                    <strong>{product.description}</strong>
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
          </div> : <></>
      }
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa sản phẩm</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Bạn có chắc muốn xóa sản phẩm này
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ width: '80px' }}>Không</button>
              <button onClick={deleteProduct} type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{ width: '80px' }}>Có</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
