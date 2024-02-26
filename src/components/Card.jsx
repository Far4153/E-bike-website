import React, { useState } from "react"; 
import "../styles/Bikes.css";
import {Heart} from "lucide-react";





const Card=({item,handleClick})=>{
    const {name,price,image}=item;
    const [isHovered, setIsHovered] = useState(false); 



    return (
        <div className="card">
            <img src={image}/>
            <br></br>
            <p>{name}</p>
            <br></br>
            <div className="price">
            <p>{price}</p>
            
            <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}><Heart color="#ffffff" fill={isHovered ?"#ff0000": "transparent"} /></button>
            </div>
            <div className="buynow-btn">
            <button onClick={()=>handleClick(item)}>Add to Cart</button>
            </div>
            
        </div>
    )
}

export default Card;