import React from "react";
import Navbar from "./Navbar";
import "../styles/Cart.css";
import products from "../data/products";


function Cart(){
    
    return (
        <div className="cart-page">
            <Navbar />
            <h2>Cart</h2>
            <div className="tables-class">
                <div className="items-table">
                    <table>
                    <thead>
          <tr>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>SubTotal</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
      
          
            <tr key={products[0].id}>
              <td>{products[0].img}</td>
              <td>{products[0].name}</td>
              <td>{products[0].price}</td>
            </tr>
          
        </tbody>
                    </table>
                </div>
                <div className="summary-table">
                </div>
            </div>
        </div>
    )
}

export default Cart;