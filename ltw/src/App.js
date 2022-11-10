import Category from "./components/category/category";
import Carousel from "./components/carousel/carousel";
import background from "./assets/images/background.jpg";

function App() {
  var images = [
    background,
    background,
    background,
    background,
    background,
    background,
  ];
  return <Category images={images} />;
}

export default App;
