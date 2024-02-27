import React, {useEffect, useState} from "react";
import "../styles/Bikes.css";
import Card from "./Card";
import {Search} from "lucide-react";
import { Link } from 'react-router-dom';
import products from "../data/products";
import Navbar from "./Navbar";
import { ShoppingCart } from "lucide-react";


function Bikes(){
    
    
    // Define Cart and size states directly in the Bikes component
    const [Cart, setCart] = useState([]);
    const [Csize, setSize] = useState(0);

    useEffect(()=> {
        setSize(Cart.length);
        console.log("upadtedsize", Csize);
        
    },[Cart]);
    
    const handleClick = (item) => {
        // Update Cart state by adding the new item
        setCart([...Cart, item]);
        console.log("upadtedsize", Csize);
    }



    return (
        <>
        <div className="bikes-page">
            <div className="filters-sec">
                <div className="filters-sub">
                <div className="filters-heading">
                <h1><img src="/filterslines.png" />Filters</h1></div>

                    <ul>
                        <li> <img src="/dropper.png" /><span>Price</span></li><div id="hr"></div>
                        <li><img src="/dropper.png" /><span>Brands</span></li><div id="hr"></div>
                        <li><img src="/dropper.png" /><span>Latest</span></li><div id="hr"></div>
                        <li><img src="/dropper.png" /><span>Speed</span></li><div id="hr"></div>
                        <li><img src="/dropper.png" /><span>Type</span></li><div id="hr"></div>
                    </ul>

                </div>
            </div>
            <div className="bikes-sec">
                <div className="inherited-nav"><Navbar showCSection={false} /></div>
                <div className="bikes-Nav">
                    <h1>Bikes</h1>
                    
                    <div className="left-sec">
                    <ul><Link to="/Cart" className="bikescart"><ShoppingCart color="#ffffff" size={35}/>
                    <span>{Csize}</span></Link></ul>
                    <div className="Search-bar">
                    <div className="search-icon"><Search color="#000000" /></div>
                    <input placeholder=" Search for Bikess" className="search-input" ></input>
                    </div>
                        

                    </div>

                </div>
                <div className="bikes-Grid">
                    <div className="bikes-content">
                    {products.map(item => (<Link key={item.id} to={`/Product_page/${item.id}`}><Card item={item} key={item.id} handleClick={handleClick} /></Link>))}
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Bikes;