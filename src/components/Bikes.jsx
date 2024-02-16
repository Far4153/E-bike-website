import React from "react";
import "../styles/Bikes.css";
import Card from "./Card";
import {Search} from "lucide-react";
import { Link } from 'react-router-dom';

function Bikes(){
    return (
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
                <div className="bikes-Nav">
                    <h1>Bikes</h1>
                    <div className="Search-bar">
                    <div className="search-icon"><Search color="#000000" /></div>
                        <input 
                        placeholder=" Search for Bikess" className="search-input" ></input>
                        

                    </div>

                </div>
                <div className="bikes-Grid">
                    <div className="bikes-content">
                    <Link to="/Product_page"><Card /></Link>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Bikes;