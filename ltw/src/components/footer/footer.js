import "./footer.css";
function Footer() {
  return (
    // <div class="container-fluid">
    //   <div id="footer" class="row">
    //     <div class="row" id="footer-content">
    //       <div class="col">
    //         <ul>
    //           <li>
    //             <a href="#">About us</a>
    //           </li>
    //           <li>
    //             <a href="#">Contact us</a>
    //           </li>
    //           <li>
    //             <a href="#">Careers</a>
    //           </li>
    //           <li>
    //             <a href="#">Terms & Conditions</a>
    //           </li>
    //           <li>
    //             <a href="#">Privacy Policy</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div class="col">
    //         <ul>
    //           <li>
    //             <a href="#">Payments</a>
    //           </li>
    //           <li>
    //             <a href="#">Shipping</a>
    //           </li>
    //           <li>
    //             <a href="#">Cancellation & Returns</a>
    //           </li>
    //           <li>
    //             <a href="#">FAQ</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <div class="col">
    //         <ul>
    //           <li>
    //             <a href="#">Return Policy</a>
    //           </li>
    //           <li>
    //             <a href="#">Terms of Use</a>
    //           </li>
    //           <li>
    //             <a href="#">Security</a>
    //           </li>
    //           <li>
    //             <a href="#">Privacy</a>
    //           </li>
    //           <li>
    //             <a href="#">Sitemap</a>
    //           </li>
    //           <li>
    //             <a href="#">EPR Compliance</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div class="row" id="footer-bottom">
    //       <span>
    //         <a href="#">
    //           Copyright © 2022 Oxford University Press Cookie policy Privacy
    //           policy Legal notice
    //         </a>
    //       </span>
    //     </div>
    //   </div>
    // </div>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <h2>Công Ty Cổ Phần Thương Mại Dịch Vụ BKTECH</h2>
            <p>Được thành lập từ 01-2022 với đội ngũ đến từ các lĩnh vực: Phần mềm, Dịch vụ CNTT. Từ những kinh nghiệm chuyên môn, kết hợp với sự trẻ trung, sáng tạo, đoàn kết, đam mê, nhiệt huyết trong công việc, BKTECH đã và đang phát triển không ngừng. </p>
            {/* <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p> */}
          </div>
          <div className="mb-3 col-lg-3 col-xs-12 d-flex flex-column">
            <h4 className="mt-lg-0 mt-sm-3">Links</h4>
            <a type="button">
              Facebook
            </a>
            <a type="button">
              Instagram
            </a>
            <a type="button">
              Twitter
            </a>
            {/* <a to="">
              <AiFillInstagram style={{ color: 'black', fontSize: '30px' }} />
            </a>
            <a to="">
              <AiFillLinkedin style={{ color: 'black', fontSize: '30px' }} />
            </a>
            <a to="">
              <AiFillGithub style={{ color: 'black', fontSize: '30px' }} />
            </a> */}
          </div>
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4">Location</h4>
            <p>Địa chỉ: Hồ Chí Minh, Việt Nam</p>
            <p>Điện thoại: (541) 754-3010</p>
            <p>Email: info@hsdf.com</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
