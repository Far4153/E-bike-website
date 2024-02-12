import React from "react";
import "../styles/Bikes.css";
import {Heart} from "lucide-react";





function Card(){

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXnunor4OisUSzbtxTi7hSfSHsj4-0vGWlk7Gazt5ZPkVhS4Y3QDZFUbBpYcswxxmwp0&usqp=CAU"/>
            <p>Lifelong Cycle MTB Black Steel Mountain Bike 26T-LLBC2604</p>
            <div className="price">
            <p>$3000</p>
            <div className="buynow-btn">
            <button >Buy now</button>
            </div>
            
            <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}><Heart color="#ffffff" fill={isHovered ?"#ff0000": "transparent"} /></button>
            </div>
            
        </div>
    )
}

export default Card;