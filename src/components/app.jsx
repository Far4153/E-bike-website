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
                    path="/AboutUs" 
                    element={<AboutUs />} 
                />
            </Routes>
        </Router>
        </>
    )
}

export default App;