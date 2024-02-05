import React from "react";
import Navbar from "./Navbar";
import Right_part from "./Right_part";
import Left_part from "./Left_part";


function Mainbody(){
    return(
        <div className="main">
            <Navbar />
            <Left_part />
            <Right_part />
        </div>
    )
}

export default Mainbody;