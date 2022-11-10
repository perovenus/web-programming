import Carousel from "../../components/carousel";
import background from "../../assets/images/background.jpg";
import background1 from "../../assets/images/background.svg";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <header><Header /></header>
      <div className="home-container">
        <div className="home-container-image">
          <img src={background1} alt="background" />
        </div>
        <div className="home-container-category row">
          <Carousel images={[background, background1]} />
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
  );
}

export default Home;
