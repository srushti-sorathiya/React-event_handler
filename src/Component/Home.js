import React from 'react';
import { Link } from 'react-router-dom';
import img from "../img/loginPass.gif";
import "../all.min.css";

const Home = () => {
     return (
          <div className='mix'>
               <h1 className='head'>MEDICINE VISITER COMPOMETION</h1>
               <div className='row '>
                    <img src={img} className='passImg' />
                    <div className="container">
                         <h1 className='title'>Login & Signup</h1>

                         <div className='Btn_style Green' >
                              <h3>
                                   <Link to={"/login"} className='link'> Login </Link>
                              </h3>
                         </div>
                         <div className='Btn_style' >
                              <h3>
                                   <Link to={"/signup"} className='link'> SignUp </Link>
                              </h3>
                         </div>
                         <div className='row'>
                              <div className='so_mide'>
                                   <i className="fa-brands fa-google google"></i>
                              </div>
                              <div className='so_mide'>
                                   <i className="fa-brands fa-facebook-f fb"></i>
                              </div>
                              <div className='so_mide'>
                                   <i className="fa-brands fa-apple apple"></i>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Home;