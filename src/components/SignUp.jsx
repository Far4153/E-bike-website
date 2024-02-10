import React from "react";
import "../styles/signUp.css";
import { Link } from 'react-router-dom';
import {ArrowBigLeft} from "lucide-react";

function SignUp(){
    return(
        <div className="signup-whole">
            <div className="login-page">
                <div className="back-button">
                        <Link to="/">
                        <button><ArrowBigLeft color="#ffffff" size="40"/></button>
                        </Link>
                    </div>
            <div className="login-rectangle">
                <div className="login-rectangle-info">
                    <h1>
                    Already has an Account?
                    </h1>
                    <p>
                    To rejuvenate your soul!
                    <br />
                    To maintain a healty Lifestyle!
                    </p>
                    <div>
                        <Link to="/LogIN">
                        <button>Log In</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="login-square">
                <div className="signup-square-info">
                    <h1>
                        SIGN UP
                    </h1>
                    <div className="signup-sub">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required/>
                    <br/>
                    <br/>

                    <label htmlFor="email">Password:</label>
                    <input type="password" id="password" name="password" required/>
                    <br/>
                    <br/>
                    <label htmlFor="email">Confirm password:</label>
                    <input type="password" id="password" name="password" required/>
                    <br/>
                    <br/>
                    <div  className="signup-add">  
                    
                    <button>SIGN UP</button></div>
                    </div>
                </div>

            </div>
            
        </div>
            
        </div>
    )
}

export default SignUp;