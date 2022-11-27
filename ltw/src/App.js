import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/cart";
import UserInfo from "./pages/user-info/UserInfo";
import ProductDetail from "./pages/product-detail/ProductDetail";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path="*" element={<ProductDetail />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
