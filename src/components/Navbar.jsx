import React, {useState} from "react";
import DropdownItem from "./DropdownItem";
import { ShoppingCart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { LogIn } from "lucide-react";




function Navbar() {

  const [open , setOpen]= useState(false);

   

    return (
      <div className="navbar">
        {/* Your navbar content goes here */}
        <div className="l-sec">Cowbox</div>
        <div className="c-sec">
          <div className="trigger" onClick={()=> setOpen(!open)} >
            <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.78571 11.25C0.797991 11.25 0 11.8086 0 12.5C0 13.1914 0.797991 13.75 1.78571 13.75H23.2143C24.202 13.75 25 13.1914 25 12.5C25 11.8086 24.202 11.25 23.2143 11.25H1.78571ZM1.78571 6.25C0.797991 6.25 0 6.80859 0 7.5C0 8.19141 0.797991 8.75 1.78571 8.75H23.2143C24.202 8.75 25 8.19141 25 7.5C25 6.80859 24.202 6.25 23.2143 6.25H1.78571Z" fill="#F8F8F8"/>
            </svg>
          </div>
          <div className="container">
            <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
              <h3>Hi, There <br/> <span>Welcome</span></h3>
              <ul><DropdownItem img={<LogIn />} href={"/LogIn"} text={"Log-In"}/></ul>
              <ul><DropdownItem img={<ShoppingCart />} text={"Cart"}/></ul>
              <ul><DropdownItem img={<ShoppingBag />} text={"Orders"}/></ul>
              {/* <ul><DropdownItem img={<ShoppingCart />} text={"Sign-up"}/></ul> */}
            </div>

          </div>
        </div>

        <div className="r-sec">
          <p><a href="#"> Bikes </a></p>
          <p><a href="#">About Us</a></p>
          <p><a href="#">Services and Support</a></p>
        </div>
      </div>
    );
  }

  export default Navbar;