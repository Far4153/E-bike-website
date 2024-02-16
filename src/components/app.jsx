import React from "react";

import Mainbody from "./Mainbody";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

import LogIn from "./LogIn.jsx";
import SignUp from "./SignUp.jsx";
import Bikes from "./Bikes.jsx";
import AboutUs from "./AboutUs.jsx";
import Product_page from "./Product_page.jsx";
import Cart from "./Cart.jsx";


function App(){
    return(
        <>
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<Mainbody />}
                />
        
                <Route 
                    path="/LogIn" 
                    element={<LogIn />} 
                />

                <Route 
                    path="/signup" 
                    element={<SignUp />} 
                />
                
                <Route 
                    path="/Bikes" 
                    element={<Bikes />} 
                />

                <Route 
                    path="/About_Us" 
                    element={<AboutUs />} 
                />
                <Route 
                    path="/Product_page" 
                    element={<Product_page />} 
                />
                <Route 
                    path="/Cart" 
                    element={<Cart />} 
                />


            </Routes>
        </Router>
        </>
    )
}

export default App;