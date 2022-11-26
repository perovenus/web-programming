import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import News from "./pages/news/News";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/cart";
import UserInfo from "./pages/user-info/UserInfo";
import ProductDetail from "./pages/product-detail/ProductDetail"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-info" element={<UserInfo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail" element={<ProductDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
