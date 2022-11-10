import banner2 from "../../assets/images/banner2.webp";
import banner3 from "../../assets/images/banner3.webp";
import product from "../../assets/images/sample.webp";
import Banner from "../banner/banner";
import Carousel from "../carousel/carousel";
function Category() {
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
    <div
      class="container-fluid"
      style={{
        padding: "0 40px",
        width: "70%",
        height: "500px",
      }}
    >
      <Banner images={images} />
      <Carousel images={products} />
    </div>
  );
}

export default Category;
