import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="body">
      <div className="container">
        <div className="section-title">
          <h2>Thông tin liên hệ</h2>

          <h3>Công Ty Cổ Phần Thương Mại Dịch Vụ BKTECH</h3>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-6">
            <div className="dv bold color-gray">
              GPĐKKD số 41020980 do Sở KHĐT TP.Hồ Chí Minh cấp ngày 25/03/2004
            </div>

            <div className="dv">
              Địa chỉ VP: Khu phố 6, phường Linh Trung, thành phố Thủ Đức, Hồ Chí
              Minh
            </div>

            <div className="dv">
              Điện thoại: <span className="tel">(541) 754-3010</span>
            </div>

            <div className="dv">
              Fax: <span class="tel">028 38 125 961</span>
            </div>

            <div className="dv">
              Báo chí, hợp tác: liên hệ{" "}
              <a className="emailbc" href="mailto:baochi@dienmayxanh.com">
                baochi@gmail.com
              </a>
            </div>

            <div className="dv">
              Tổng đài hỗ trợ (7h30 đến 22h):{" "}
              <span className="tel">1800.1061 </span>
              hoặc <span class="tel">(028) 39 48 6789</span>
            </div>

            <div className="dv">
              Tổng đài khiếu nại: <span className="tel">1800.1063</span>
            </div>

            <div className="dv">
              Email:{" "}
              <a class="emailbc" href="mailto:cskh@dienmayxanh.com">
                cskh@gmail.com
              </a>
            </div>
            <div>
              <div>
                <h5>Văn phòng</h5>
                <ul>
                  <li>
                    <h5 className="bold color-gray">
                      Văn ph&ograve;ng Hồ Ch&iacute; Minh
                    </h5>
                    <p className="color-gray">
                      <span>
                        T&ograve;a b&aacute;o S&agrave;i G&ograve;n Giải
                        Ph&oacute;ng, 432 Nguyễn Thị Minh Khai, Phường 5, Quận 3,
                        Tp. Hồ Ch&iacute; Minh
                      </span>
                    </p>
                    <p className="color-gray">
                      <span>
                        T&ograve;a nh&agrave; Sarimi, 74 Nguyễn Cơ Thạch, Phường
                        An Lợi Đ&ocirc;ng, Tp. Thủ Đức
                      </span>
                    </p>
                  </li>
                  <li>
                    <h5 className="bold color-gray">
                      Văn ph&ograve;ng H&agrave; Nội
                    </h5>
                    <p className="color-gray">
                      <span>
                        T&ograve;a nh&agrave; TNR, 54A Nguyễn Ch&iacute; Thanh,
                        Phường L&aacute;ng Thượng, Quận Đống Đa, H&agrave; Nội
                      </span>
                    </p>
                    <p className="color-gray">
                      <span></span>T&ograve;a nh&agrave; D29 Phạm Văn Bạch, Quận
                      Cầu Giấy, H&agrave; Nội
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6">
            <div class="map-wrapper" id="loadmapaddress">
              <iframe
                class="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d979.6171914801357!2d106.7971172!3d10.8519064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527327468fff7%3A0x7e7d9a5c638bdb95!2zVMOyYSBuaMOgIE1XRyAtIENUQ1AgVGjhur8gR2nhu5tpIERpIMSQ4buZbmc!5e0!3m2!1sen!2s!4v1546245923366"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
