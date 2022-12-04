import React from "react";
import Card from "../../components/card/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [defaultproducts, setDefaultProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost/controllers/products.controller.php", {
        params: {
          action: 0,
        },
      }) //url to see news.php
      .then((res) => {
        setProducts(res.data);
        setDefaultProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [allactive, setAllActive] = useState(true);
  const [laptopactive, setLaptopActive] = useState(false);
  const [pcactive, setPcactive] = useState(false);
  const [mobileactive, setMobileActive] = useState(false);
  const [assactive, setAssActive] = useState(false);
  const handleSearch = (e) => {
    setAllActive(false);
    setSearch(e.target.value);
    let temp = defaultproducts.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    if (temp.length === 0) {
      setProducts(defaultproducts);
      setAllActive(true);
    } else {
      setProducts(temp);
    }
  };
  const handleClickOnNavbar = (e) => {
    switch (e) {
      case 1:
        let laptop = defaultproducts.filter((item) => item.type === "1");
        setProducts(laptop);
        ///
        setAllActive(false);
        setLaptopActive(true);
        setPcactive(false);
        setMobileActive(false);
        setAssActive(false);
        break;
      case 2:
        let pc = defaultproducts.filter((item) => item.type === "2");
        setProducts(pc);
        ///
        setAllActive(false);
        setLaptopActive(false);
        setPcactive(true);
        setMobileActive(false);
        setAssActive(false);

        break;
      case 3:
        let mobile = defaultproducts.filter((item) => item.type === "3");
        setProducts(mobile);
        //////
        setAllActive(false);
        setLaptopActive(false);
        setPcactive(false);
        setMobileActive(true);
        setAssActive(false);
        break;
      case 4:
        let assec = defaultproducts.filter((item) => item.type === "4");
        setProducts(assec);
        /////
        setAllActive(false);
        setLaptopActive(false);
        setPcactive(false);
        setMobileActive(false);
        setAssActive(true);
        break;
      case 5:
        setAllActive(true);
        setProducts(defaultproducts);
        setLaptopActive(false);
        setPcactive(false);
        setMobileActive(false);
        setAssActive(false);
        break;
      case 6:
        console.log("search");
        let pr = defaultproducts.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );
        setProducts(pr);
        break;
      default:
        setAllActive(true);
        setProducts(defaultproducts);
        setLaptopActive(false);
        setPcactive(false);
        setMobileActive(false);
        setAssActive(false);
        break;
    }
  };
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
                    style={{
                      fontWeight: allactive ? 700 : 500,
                      color: allactive ? "black" : "",
                    }}
                    onClick={() => handleClickOnNavbar(5)}
                  >
                    Tất cả
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    style={{
                      fontWeight: laptopactive ? 700 : 500,
                      color: laptopactive ? "black" : "",
                    }}
                    onClick={() => handleClickOnNavbar(1)}
                  >
                    Laptop
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    style={{
                      fontWeight: pcactive ? 700 : 500,
                      color: pcactive ? "black" : "",
                    }}
                    onClick={() => handleClickOnNavbar(2)}
                  >
                    PC
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    style={{
                      fontWeight: mobileactive ? 700 : 500,
                      color: mobileactive ? "black" : "",
                    }}
                    onClick={() => handleClickOnNavbar(3)}
                  >
                    Điện thoại
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    style={{
                      fontWeight: assactive ? 700 : 500,
                      color: assactive ? "black" : "",
                    }}
                    onClick={() => handleClickOnNavbar(4)}
                  >
                    Phụ kiện
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="row g-1 news-list">
          {products.map((item) => (
            <Card
              type="product"
              image={item["image"]}
              name={item["name"]}
              id={item["id"]}
              price={item["price"]}
              key={item["id"]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
