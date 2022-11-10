import Card from "../card/card";
import bg from "../../assets/images/background.jpg";
function Category(images) {
  var imagepath = "../../assets/images/background.jpg";
  //render images
  return <img src={require(imagepath.toString)} alt="background" />;
}

export default Category;
