import Carousel from "../components/carousel";
import background from "../assets/images/background.jpg";
import background1 from "../assets/images/background.svg";
import '../assets/css/home.css';
function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <ul>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>News</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>Signin</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="home-container">
        <div className="home-container-image">
          <img src={background1} alt="background" />
        </div>
        <div className="home-container-category">
          <Carousel images={[background, background1]} />
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
  );
}

export default Home;
