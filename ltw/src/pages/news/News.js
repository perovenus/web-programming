import React from "react";
// import CategoriesBar from "../../components/categories-bar/CategoriesBar";
import Card from "../../components/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./News.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function News() {
  const [news, setNews] = useState([]);
  const [defaultnews, setDefaultNews] = useState([]);
  const [search, setSearch] = useState("");
  const [allactive, setAllActive] = useState(true);
  const [techactive, setTechActive] = useState(false);
  const [reviewactive, setreviewActive] = useState(false);
  const [gameactive, setGameActive] = useState(false);
  const [tipsactive, settipsActive] = useState(false);
  const handleSearch = (e) => {
    setAllActive(false);
    setSearch(e.target.value);
    let temp = defaultnews.filter((item) => {
      return item.content.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (temp.length === 0 || e.target.value === "") {
      setNews(defaultnews);
      setAllActive(true);
    } else {
      setNews(temp);
    }
  };
  const handleNav = (e) => {
    switch (e) {
      case 1:
        let tech = defaultnews.filter((item) => item.type === "1");
        setNews(tech);
        setAllActive(false);
        setTechActive(true);
        setreviewActive(false);
        setGameActive(false);
        settipsActive(false);
        break;
      case 2:
        let review = defaultnews.filter((item) => item.type === "2");
        setNews(review);
        setAllActive(false);
        setTechActive(false);
        setreviewActive(true);
        setGameActive(false);
        settipsActive(false);
        break;
      case 3:
        let tips = defaultnews.filter((item) => item.type === "4");
        setNews(tips);
        setAllActive(false);
        setTechActive(false);
        setreviewActive(false);
        setGameActive(false);
        settipsActive(true);
        break;
      case 4:
        let game = defaultnews.filter((item) => item.type === "3");
        setNews(game);
        setAllActive(false);
        setTechActive(false);
        setreviewActive(false);
        setGameActive(true);
        settipsActive(false);
        break;
      default:
        setNews(defaultnews);
        setAllActive(true);
        setTechActive(false);
        setreviewActive(false);
        setGameActive(false);
        settipsActive(false);
        break;
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost/controllers/news.controller.php", {
        params: {
          action: 0,
        },
      })
      .then((res) => {
        setNews(res.data);
        setDefaultNews(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div class="body">
      <div class="container" style={{ padding: "0" }}>
        {/* <CategoriesBar /> */}
        <nav class="navbar navbar-expand-lg categories-bar" id="categories-bar">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Nhập từ khóa cần tìm kiếm"
                aria-label="Search"
                onChange={handleSearch}
              />
              <button type="button" class="btn btn-primary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav flex-grow-1 justify-content-around pe-3">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    onClick={() => handleNav(5)}
                    style={{
                      color: allactive ? "black" : "#000",
                      fontWeight: allactive ? "bold" : "normal",
                    }}
                  >
                    Tất cả
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    onClick={() => handleNav(1)}
                    style={{
                      color: techactive ? "black" : "#000",
                      fontWeight: techactive ? "bold" : "normal",
                    }}
                  >
                    Tin tức công nghệ
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    onClick={() => handleNav(2)}
                    style={{
                      color: reviewactive ? "black" : "#000",
                      fontWeight: reviewactive ? "bold" : "normal",
                    }}
                  >
                    Đánh giá sản phẩm
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    onClick={() => handleNav(3)}
                    style={{
                      color: tipsactive ? "black" : "#000",
                      fontWeight: tipsactive ? "bold" : "normal",
                    }}
                  >
                    Thủ thuật
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    onClick={() => handleNav(4)}
                    style={{
                      color: gameactive ? "#fff" : "#000",
                      fontWeight: gameactive ? "bold" : "normal",
                    }}
                  >
                    Game
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="row g-1 news-list">
          {news.map((item) => (
            <Card
              type="news"
              image={item["image"]}
              title={item["title"]}
              time_up={item["time_up"]}
              content={item["content"]}
              id={item["id"]}
              key={item["id"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
