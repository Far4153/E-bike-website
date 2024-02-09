import React from "react";

import Mainbody from "./Mainbody";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
} from "react-router-dom";

import LogIn from "./LogIn.jsx";

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
            </Routes>
        </Router>
        </>
    )
}

export default App;