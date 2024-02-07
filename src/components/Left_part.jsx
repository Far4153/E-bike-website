import React from "react";

function Left_part(){
    return(
    <div className="left-column">

        <div className="hero-sec">
            <h1>Take the streets.<span id="sub-heading">Cowboy 3</span></h1>
            <p>Shift your ride, not gears.<span id="heading-1"> Ease your path toward the fastest way to move in the city. Free your mind as the bike adapts intuitively to power the speed you need.</span></p>
            <div className="btns">
                <button id="btn-1">Book a test ride</button>
                <button id="btn-2">Configure yours</button>
            </div>
        </div>

        <div className="bottom-sec">
            <div className="small-bike" >
                <img src="/Sbike.png" />
            </div>

            <div className="sponsers">
                <img src="t2.png" />
                <img src="t3.png" />
                <img src="t4.png" />
                
            </div>
        </div>
    </div>

    )

}

export default Left_part;