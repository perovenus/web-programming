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
import ManageProducts from "./pages/manage-products/ManageProducts";
import AddNewProduct from "./pages/add-new-product/AddNewProduct";
import AdminProductDetail from "./pages/admin-product-detail/AdminProductDetail";
import EditProductDetail from "./pages/edit-product/EditProductDetail";
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
        <Route path="manage-products">
          <Route index element={<ManageProducts />} />
          <Route path="*" element={<AdminProductDetail />} />
        </Route>
        <Route path="admin-product-detail" element={<AdminProductDetail />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
        <Route path="edit-product-detail" element={<EditProductDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
