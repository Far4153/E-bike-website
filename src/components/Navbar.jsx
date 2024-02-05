import React from "react";

function Navbar() {
    return (
      <div className="navbar">
        {/* Your navbar content goes here */}
        <div className="l-sec">Cowbox</div>
        <div className="c-sec">
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.78571 11.25C0.797991 11.25 0 11.8086 0 12.5C0 13.1914 0.797991 13.75 1.78571 13.75H23.2143C24.202 13.75 25 13.1914 25 12.5C25 11.8086 24.202 11.25 23.2143 11.25H1.78571ZM1.78571 6.25C0.797991 6.25 0 6.80859 0 7.5C0 8.19141 0.797991 8.75 1.78571 8.75H23.2143C24.202 8.75 25 8.19141 25 7.5C25 6.80859 24.202 6.25 23.2143 6.25H1.78571Z" fill="#F8F8F8"/>
        </svg>
        </div>
        <div className="r-sec">
          <p>Bikes</p>
          <p>About Us</p>
          <p>Services and Support</p>
        </div>
      </div>
    );
  }

  export default Navbar;