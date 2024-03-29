import React from "react";
import "../styles/logIn.css"; 
import { Link } from 'react-router-dom';
import {ArrowBigLeft} from "lucide-react";



function LogIn(){


    return(
        <div className="login-whole">
            <div className="login-page">
                <div className="back-button">
                    <Link to="/">
                    <button><ArrowBigLeft color="#ffffff" size="40"/></button>
                    </Link>
                </div>
            <div className="login-rectangle">
                <div className="login-rectangle-info">
                    <h1>
                    Don’t Have an Account?
                    </h1>
                    <p>
                    To rejuvenate your soul!
                    <br />
                    To maintain a healty Lifestyle!
                    </p>
                    <div>
                        <Link to="/signup">
                        <button>SignUp</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="login-square">
                <div className="login-square-info">
                    <h1>
                        LOG IN
                    </h1>
                    <div className="login-sub">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    <br/>
                    <br/>

                    <label htmlFor="email">Password:</label>
                    <input type="password" id="password" name="password" required/>
                    <br/>
                    <br/>
                    <div  className="login-add">  
                    <p>Forgot Password?</p>
                    <button>LOG IN</button></div>
                    </div>
                </div>

            </div>
            
        </div>
        </div>
    )
}


export default LogIn;