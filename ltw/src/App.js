import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import News from "./pages/news/News";
import NewsDetail from "./pages/news-detail/NewsDetail";
import Products from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/cart";
import UserInfo from "./pages/user-info/UserInfo";
import ProductDetail from "./pages/product-detail/ProductDetail";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import ManageNews from "./pages/manage-news/ManageNews";
import ManageNewsDetail from "./pages/manage-news-detail/ManageNewsDetail";
import ManageProducts from "./pages/manage-products/ManageProducts";
import AddNewNews from "./pages/add-new-news/AddNewNews";
import AddNewProduct from "./pages/add-new-product/AddNewProduct";
import ManageProductDetail from "./pages/manage-product-detail/ManageProductDetail";
import EditProductDetail from "./pages/edit-product/EditProductDetail";
import EditNewsDetail from "./pages/edit-news/EditNewsDetail";
import {
  Routes,
  Route,
} from "react-router-dom";
import './App.css'

function App() {
  return (
    <Layout>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path="news">
          <Route index element={<News />} />
          <Route path="*" element={<NewsDetail />} />
        </Route>
        <Route path="products">
          <Route index element={<Products />} />
          <Route path="*" element={<ProductDetail />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="contact" element={<Contact />} />
        <Route path="product-detail" element={<ProductDetail />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="manage-news">
          <Route index element={<ManageNews />} />
          <Route path="*" element={<ManageNewsDetail />} />
        </Route>
        <Route path="manage-products">
          <Route index element={<ManageProducts />} />
          <Route path="*" element={<ManageProductDetail />} />
        </Route>
        <Route path="add-new-news" element={<AddNewNews />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="edit-product-detail" element={<EditProductDetail />} />
        <Route path="edit-news-detail" element={<EditNewsDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
