import Carousel from "../../components/carousel/carousel";
import Banner from "../../components/banner/banner";
import background from "../../assets/images/background.jpg";
import background1 from "../../assets/images/background.svg";
import "./home.css";
import banner2 from "../../assets/images/banner2.webp";
import banner3 from "../../assets/images/banner3.webp";
import Header from "../../components/header/Header";
import product from "../../assets/images/sample.webp";
import Footer from "../../components/footer/footer";
function Home() {
  const images = [
    banner3,
    banner2,
    banner3,
    banner3,
    banner2,
    banner3,
    banner3,
    banner2,
    banner3,
    banner3,
    banner2,
    banner3,
  ];
  const products = [
    product,
    product,
    product,
    product,
    product,
    product,
    product,
  ];
  return (
    <div className="home container">
      <Banner images={images} />
      <div className="col" id="home-body">
        <div className="row" id="home-content">
          <Carousel images={products} title={"Tin mới"} />
          <Carousel images={products} title={"Sản phẩm bán chạy"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
