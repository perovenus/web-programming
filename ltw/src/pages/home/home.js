import "./home.css";
import OwlCarousel from "../../components/carousel/carousel";
import Banner from "../../components/banner/banner";
import banner2 from "../../assets/images/banner2.webp";
import banner3 from "../../assets/images/banner3.webp";
import axios from "axios";
import { useState, useEffect } from "react";
function Home() {
  const images = [banner3, banner2, banner3];
  const [news, setNews] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 0,
        },
      })
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 0,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="home container">
      <Banner images={images} />
      <div className="col" id="home-body">
        <div className="row" id="home-content">
          <OwlCarousel data={news} title={"Tin mới"} />
          <OwlCarousel data={products} title={"Sản phẩm bán chạy"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
