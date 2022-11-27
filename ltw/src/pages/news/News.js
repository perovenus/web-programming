import React from "react";
import CategoriesBar from "../../components/categories-bar/CategoriesBar";
import Card from "../../components/card/card";
import "./News.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost/news.php") //url to see news.php
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div class="body">
        <div class="container" style={{ padding: "0" }}>
          <CategoriesBar />
          <div class="row g-2 news-list">
            {news.map((item) => (
              <Card
                image={item["image"]}
                name={item["name"]}
                id={item["id"]}
                key={item["id"]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
