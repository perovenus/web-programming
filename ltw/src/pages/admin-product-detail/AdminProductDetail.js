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
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import './AdminProductDetail.css'

export default function AdminProductDetail() {
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

  const navigate = useNavigate();

  const id = useParams();
  const location = useLocation()

  console.log("id = ", location.state.id);

  const goToEditProductDetail = () => {
    navigate('/edit-product-detail', {
      state: {
        id: location.state.id
      }
    });
  }

  return (
    <div class="body">
      <div class="container">
        <div class="row g-2">
          <div class="col-xs-12 col-lg-9">
            <div class="product-summary">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-xs-12 col-lg-5">
                    <img src={require('../../assets/images/laptop.webp')} class="product-img" />
                  </div>
                  <div class="col-xs-12 col-lg-7">
                    <div style={{ padding: '30px' }}>
                      <h5>
                        Laptop ASUS TUF Gaming FX517ZC-HN077W 90NR09L3-M00510
                      </h5>
                      <p>Thương hiệu<span>ASUS</span></p>
                      <h3>15.000.000 đ</h3>
                      <ul>
                        <li>CPU: Intel Core i5-12450H</li>
                        <li>Màn hình: 15.6" IPS (1920 x 1080),144Hz</li>
                        <li>RAM: 1 x 8GB DDR5 4800MHz</li>
                        <li>Đồ họa: RTX 3050 4GB GDDR6 / Intel UHD Graphics</li>
                        <li>Lưu trữ: 512GB SSD M.2 NVMe</li>
                        <li>Hệ điều hành: Windows 11 Home</li>
                        <li>Pin: 4 cell 76 Wh</li>
                        <li>Khối lượng: 2kg</li>
                      </ul>
                      <hr />
                      <div class="container-fluid">
                        <div class="row">
                          <div class="col-6">
                            <button type="button" class="btn btn-danger">Xóa</button>
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
                  <td>ASUS</td>
                </tr>
                <tr>
                  <td>Bảo Hành</td>
                  <td>24 tháng</td>
                </tr>
                <p>Thông tin chung</p>
                <tr>
                  <td>Series laptop</td>
                  <td>TUF Gaming</td>
                </tr>
                <tr>
                  <td>Part-number</td>
                  <td>90NR09L3-M00510</td>
                </tr>
                <tr>
                  <td>Màu sắc</td>
                  <td>Đen</td>
                </tr>
                <tr>
                  <td>Nhu cầu</td>
                  <td>Gaming, Đồ họa - Kỹ thuật</td>
                </tr>
                <p>Cấu hình chi tiết</p>
                <tr>
                  <td>Thế hệ CPU</td>
                  <td>Core i5 , Intel Core thế hệ thứ 12</td>
                </tr>
                <tr>
                  <td>CPU</td>
                  <td>Intel Core i5-12450H ( 2.0 GHz - 4.4GHz / 12MB / 8 nhân, 12 luồng ) i5-12450H</td>
                </tr>
                <tr>
                  <td>Chip đồ họa</td>
                  <td>RTX 3050 4GB GDDR6 / Intel UHD Graphics</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>1 x 8GB DDR5 4800MHz ( 2 Khe cắm / Hỗ trợ tối đa 32GB )</td>
                </tr>
              </table>
            </div>
          </div>
          <div class="col-xs-12 col-lg-8 order-xs-first">
            <div class="product-description">
              <h5>Mô tả sản phẩm</h5>
              <strong>Laptop Asus TUF Gaming FX517ZC-HN077W sở hữu tạo hình thu hút cùng hiệu năng tuyệt vời đến từ Intel Core i5 thế hệ thứ 12. Phiên bản laptop cao cấp sẵn sàng cho mọi trải nghiệm gaming mượt mà, là lựa chọn xứng tầm cho nhu cầu giải trí cấu hình cao của nhiều người. </strong>
              <strong>Thiết kế gaming cao cấp, kiểu dáng gọn nhẹ dễ di chuyển</strong>
              <p>Laptop Asus TUF Gaming FX517ZC-HN077W sở hữu tạo hình thu hút cùng hiệu năng tuyệt vời đến từ Intel Core i5 thế hệ thứ 12. Phiên bản laptop cao cấp sẵn sàng cho mọi trải nghiệm gaming mượt mà, là lựa chọn xứng tầm cho nhu cầu giải trí cấu hình cao của nhiều người. </p>
              <img src={require('../../assets/images/img1.jpg')} />
              <p>Dù thuộc dòng gaming nhưng TUF Gaming FX517ZC-HN077W vẫn được tối ưu về ngoại hình, với cân nặng 2 kg và độ dày máy 2.07 cm. Tạo hình gọn nhẹ vừa phải, đảm bảo tính di động linh hoạt để bạn có thể thoải mái trải nghiệm trò chơi yêu thích dù ở bất kỳ đâu.</p>
              <strong>Màn hình 15.6 inch Full HD sống động, khả năng chống lóa tốt</strong>
              <p>Asus TUF Gaming sở hữu màn hình 15.6 inch tối ưu không gian với viền mỏng. Tấm nền IPS cùng độ phân giải Full HD tái hiện nội dung chi tiết với màu sắc sống động dưới góc nhìn rộng. Tần số quét lên đến 144Hz đảm bảo mọi chuyển động trò chơi diễn ra mượt mà đáng kinh ngạc.</p>
              <img src={require('../../assets/images/img2.jpg')} />
              <p>Tính năng chống lóa tiện ích hỗ trợ chống chói hiệu quả, cho phép bạn thoải mái sử dụng laptop ngay cả trong môi trường có ánh sáng mạnh. HD Webcam với độ phân giải cao, đảm bảo chất lượng hình ảnh rõ nét, chân thực, giúp bạn video call, làm việc học tập trực tuyến dễ dàng. </p>
              <strong>Hiệu năng vượt trội với Intel Core i5-12450H, nâng cấp đa nhiệm với RAM 8GB </strong>
              <p>Laptop TUF Gaming tập trung sức mạnh chủ yếu ở vi xử lý Intel Core i5-12450H, cung cấp hiệu năng vượt trội với 8 nhân, 12 luồng. CPU cho xung nhịp cao 3.3 GHz - 4.4GHz, đảm bảo chạy mượt các ứng dụng nâng cao, hỗ trợ xử lý tác vụ nhanh chóng, cho trải nghiệm game mượt mà…</p>
              <img src={require('../../assets/images/img3.jpg')} />
              <p>Bộ nhớ RAM 8GB DDR5 thế hệ mới cải tiến hơn, nâng cấp đa nhiệm hiệu quả trên chiếc laptop gaming của Asus với tốc độ bus ấn tượng 4800MHz. Hai khe cắm sẵn có cho phép người dùng nâng cao cấu hình, tối ưu hiệu suất khi có thể nâng RAM lên tối đa 32GB.</p>
              <strong>Card rời NVIDIA GeForce đẩy mạnh đồ họa, lưu trữ thoải mái 512GB</strong>
              <p>Laptop TUF Gaming sẵn sàng cho mọi trải nghiệm thỏa sức chiến game của bạn với sự hỗ trợ của chip Intel UHD Graphics, bổ sung card rời NVIDIA GeForce RTX 3050 4GB GDDR6. Hiệu suất đồ họa được đẩy mạnh, giúp bạn dễ dàng theo đuổi đam mê thiết kế đồ họa, dựng video,...</p>
              <img src={require('../../assets/images/img4.jpg')} />
              <p>Ổ cứng 512GB SSD M.2 NVMe được tích hợp hỗ trợ đáng kể quá trình khởi động máy, truy xuất dữ liệu hiệu quả chỉ mất vài giây. Không gian lưu trữ rộng lớn, cho phép người dùng thoải mái hơn khi có thể tải về nhiều tựa game yêu thích.</p>
              <strong>Bàn phím LED ấn tượng, sử dụng viên pin 4 cell 76 Wh</strong>
              <p>TUF Gaming FX517ZC-HN077W được thiết kế phù hợp với nhu cầu gaming khi các phím quan trọng WASD được làm nổi bật, dễ dàng hướng sự tập trung của bạn khi chơi. Đèn LED tích hợp còn hỗ trợ người dùng quan sát rõ hơn trong các điều kiện thiếu sáng. </p>
              <img src={require('../../assets/images/img5.jpg')} />
              <p>Chiếc laptop Asus mang đến thời lượng hoạt động thoải mái với viên pin 4 cell 76 Wh, đảm bảo trải nghiệm giải trí không gián đoạn giữa chừng. Nhờ được hỗ trợ sạc nhanh, máy có thể đầy pin khi chưa đến 90 phút giúp tiết kiệm thời gian đợi sạc, cho phép bạn tiếp tục sử dụng ngay sau đó.</p>
              <strong>Hỗ trợ kết nối ngoại vi tiện ích, cài sẵn hệ điều hành mới</strong>
              <p>Laptop Asus TUF Gaming tối ưu khả năng mở rộng kết nối với các cổng: 1 cổng HDMI, 1 cổng USB Type C / DisplayPort / Power Delivery, 2 cổng USB 3.2, 1 cổng Thunderbolt 4, LAN 1 Gb/s. WiFi 802.11ax (Wifi 6), Bluetooth 5.2 đảm bảo truy cập mạng nhanh chóng, chia sẻ tức thời.</p>
              <img src={require('../../assets/images/img6.jpg')} />
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
