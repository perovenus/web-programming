import React from "react";
import Header from "../../components/header/Header";
import CategoriesBar from "../../components/categories-bar/CategoriesBar";
import Card from "../../components/card/card";
import cc from "../../assets/images/cute_vl.jpg";
import "./News.css";
export default function News() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div class="body">
        <div class="container" style={{ padding: "0" }}>
          <CategoriesBar />
          <div class="row g-2 news-list">
            <Card image={cc} />
            <Card image={cc} />
            <Card image={cc} />
            <Card image={cc} />
            <Card image={cc} />
            <Card image={cc} />
            <Card image={cc} />
            <Card image={cc} />
          </div>
        </div>
      </div>
    </>
  );
}
