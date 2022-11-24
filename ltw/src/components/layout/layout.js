import Header from "../header/Header";
import Footer from "../footer/footer";
import "./layout.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
function Layout(props) {
  return (
    <Router>
      <div className="layout">
        <Header />
        {props.children}
        <Footer />
      </div>
    </Router>
  );
}

export default Layout;
