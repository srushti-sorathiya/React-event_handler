import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Valid from './ValidLogin';

const ForgotPass = () => {
  const navigation = useNavigate();
  const [input, setInput] = useState({
    uname: "",
    password: "",
    copassword: "",
  });

  const Treact = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState([]);

  const validation = () => {
    const nameP = /^[a-zA-Z ]{2,30}$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    let Count = {}
    if (!nameP.test(input.uname)) {
      Count.uname = "Enter a valid email address"
    } 
    if (!passwordPattern.test(input.password)) {
      Count.password = "OTP do not match Enter any 6 Number"
    }else if(input.copassword !== input.password){
      Count.copassword = "Passwords do not match" 
    }
    setError(Count)
    if (Object.keys(Count).length === 0){
      navigation('/Medicine');
    }
  };

  return (
    <div>
      <button className='btn-transparent Boder' onClick={() => navigation(-1)}>
        <h2><i style={{ padding: "10px" }} className="fa-solid fa-angle-left"></i>Back</h2>
      </button>
      <div className='mix'>
        <h1 className='login_h'>ForgotPassword</h1>
        <input className='Boder' onChange={Treact} type='text' name='uname' placeholder='UserName' />
        {error.uname && <label style={{ color: "red" }}>{error.uname}</label>}
        <input className="Boder" onChange={Treact} type="password" name="password" placeholder="Create Password" />
        {error.password && <label style={{ color: "red" }}>{error.password}</label>}
        <input className="Boder" onChange={Treact} type="password" name="copassword" placeholder="Confirm Password" />
        {error.copassword && <label style={{ color: "red" }}>{error.copassword}</label>}
        <div className='Btn_style Signup-class' >
          <h3>
            <button onClick={validation} className='link Signup-btn  btn-transparent'> Confirm </button>
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
  );
}

export default ForgotPass;
