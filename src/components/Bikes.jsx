import React, { useEffect, useState } from "react";
import "../styles/Bikes.css";
import Card from "./Card";
import { Search, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../data/products";
import Navbar from "./Navbar";

function Bikes() {
  const [Cart, setCart] = useState([]);
  const [Csize, setSize] = useState(0);

  useEffect(() => {
    setSize(Cart.length);
  }, [Cart]);

  const handleClick = (item) => {
    // Check if the item is already present in the cart
    const isPresent = Cart.some((cartItem) => cartItem.id === item.id);

    if (isPresent) {
      return;
    }

    // Update Cart state by adding the new item
    setCart([...Cart, item]);
  };

  console.log(Csize);

  return (
    <>
      <div className="bikes-page">
        <div className="filters-sec">
          <div className="filters-sub">
            <div className="filters-heading">
              <h1>
                <img src="/filterslines.png" alt="filters" />
                Filters
              </h1>
            </div>

            <ul>
              <li>
                <img src="/dropper.png" alt="price" />
                <span>Price</span>
              </li>
              <div id="hr"></div>
              <li>
                <img src="/dropper.png" alt="brands" />
                <span>Brands</span>
              </li>
              <div id="hr"></div>
              <li>
                <img src="/dropper.png" alt="latest" />
                <span>Latest</span>
              </li>
              <div id="hr"></div>
              <li>
                <img src="/dropper.png" alt="speed" />
                <span>Speed</span>
              </li>
              <div id="hr"></div>
              <li>
                <img src="/dropper.png" alt="type" />
                <span>Type</span>
              </li>
              <div id="hr"></div>
            </ul>
          </div>
        </div>

        <div className="bikes-sec">
          <div className="inherited-nav">
            <Navbar showCSection={false} />
          </div>
          <div className="bikes-Nav">
            <h1>Bikes</h1>

            <div className="left-sec">
              <ul>
                <Link to="/Cart" className="bikescart">
                  <ShoppingCart color="#ffffff" size={35} />
                  <span>{Csize}</span>
                </Link>
              </ul>
              <div className="Search-bar">
                <div className="search-icon">
                  <Search color="#000000" />
                </div>
                <input
                  placeholder="Search for Bikes"
                  className="search-input"
                />
              </div>
            </div>
          </div>

          <div className="bikes-Grid">
            <div className="bikes-content">
              {products.map((item) => (
                <Link key={item.id} to={`/Product_page/${item.id}`}>
                  <Card item={item} handleClick={handleClick} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bikes;
