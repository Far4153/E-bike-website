import React from "react";
import Navbar from "./Navbar";
import "../styles/Cart.css";


function Cart(){
    
    return (
        <div className="cart-page">
            <Navbar />
            <h2>Cart</h2>
            <div className="tables-class">
                <div className="items-table">
                </div>
                <div className="summary-table">
                </div>
            </div>
        </div>
    )
}

export default Cart;