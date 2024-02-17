import React from "react";
import "../styles/Bikes.css";
import {Heart} from "lucide-react";





function Card(props){

    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXnunor4OisUSzbtxTi7hSfSHsj4-0vGWlk7Gazt5ZPkVhS4Y3QDZFUbBpYcswxxmwp0&usqp=CAU"/>
            <br></br>
            <p>{props.name}</p>
            <br></br>
            <div className="price">
            <p>{props.price}</p>
            
            <button onMouseEnter={() => setIsHovered(true)} onMouseLeave={()=> setIsHovered(false)}><Heart color="#ffffff" fill={isHovered ?"#ff0000": "transparent"} /></button>
            </div>
            <div className="buynow-btn">
            <button >Buy now</button>
            </div>
            
        </div>
    )
}

export default Card;