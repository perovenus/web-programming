import Header from "../header/Header";
import Footer from "../footer/footer";
import "./layout.css";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
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
