
import React, { useState} from "react";
import { Link, useParams } from 'react-router-dom'; 

import Review from "./Review";
import products from "../data/products";

import Navbar from "./Navbar";




import "../styles/Product_page.css";




function Product_page(){



    let {ProductId}=useParams();  //  if i want to render the url's id i need to use this hook
    // this  stores id of the product we have given as a path

    let product=products.find((p)=>p.id==ProductId)
    
    // const [cart, setCart] = useState([]);
  

  
    

    const [activeTab, setActiveTab] = useState("description");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };
   


    return(
        <div className="product-whole">
            <div className="inherited-nav"><Navbar showCSection={false} /></div>
            <div className="product-page">
                <div className="product-page-top">
                    <div className="image-grid">
                        <div className="main-img">
                            <img src={`${process.env.PUBLIC_URL}/${product.image}`}></img>
                            
                        </div>
                        <div className="sub-images">
                            <div>
                                <img src="/sub1.png"></img>
                            </div>
                            <div>
                                <img src="/sub2.png"></img>
                            </div>
                            <div>
                                <img src="/sub3.png"></img>
                            </div>

                        </div>
                    </div>
                    <div className="text-grid">
                        <h3>{product.name}</h3>
                        <img src="/rating.png" />
                        <p id="price">{product.price}</p>
                       
                        <div className="colors">
                            <p>Available colors</p>
                            <img src="/colors.png" />
                        </div>
                        <br />
                        <p id="left">only 1 left - make it yours</p>
                        <button id="add-btn" >Add to cart</button>
                        <button id="Buy now" >Buy now</button>



                    </div>
                
                </div>
                <div className="product-page-bottom">
                    <div className="additional">
                        <h5 id="desc" className={activeTab === "description" ? "active" : ""} onClick={() => handleTabClick("description")}>Description</h5>

                        <h5 id="reviews" className={activeTab === "reviews" ? "active" : ""}  onClick={() => handleTabClick("reviews")}>Reviews</h5>
                        
                    </div>
                    <div className="hrs" style={{marginLeft: activeTab ==="reviews" ? "50%" : "0"}} >
                        <hr id="hr1"/>
                        <hr id="hr2" />
                    </div>
                    <div className="desc-info">
                       
                        {activeTab === "description" && (
                        <div className="descriptiontab">
                            <h3>Description</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu</p>
                        </div>
                        )}
                        {activeTab === "reviews" && (
                        <div className="reviewtab">
                            <h3>Reviews</h3>
                            <Review name= "John D" img= "/profile1.png" review= "Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum" />
                            <Review name= "veronica valsodov" img= "/profile2.png" review= "ur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum !!!" />
                        </div>
                        )}
                </div>
                </div>

            </div>
        </div>
    )
}



export default Product_page;
