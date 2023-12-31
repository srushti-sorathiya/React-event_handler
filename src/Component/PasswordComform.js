import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Valid from './ValidLogin';

const PasswordComform = () => {
  const navigation = useNavigate();
  const [input, setInput] = useState({
    email: "",
    otp: "",
  });

  const Treact = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState([]);

  const validation = () => {
    const emailP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validOtpPattern = /^[0-9]{6}$/;
    let NewError = {};
    if (!emailP.test(input.email)) {
      NewError.email = "Enter a valid email address"
    } else if (!validOtpPattern.test(input.otp)) {
      NewError.otp = "OTP do not match Enter any 6 Number" 
    }
    setError(NewError);
    if (Object.keys(NewError).length === 0) {
      navigation('/ForgotPass');
    }
  };

  return (
    <div>
      <button className='btn-transparent Boder' onClick={() => navigation(-1)}>
        <h2><i style={{ padding: "10px" }} className="fa-solid fa-angle-left"></i>Back</h2>
      </button>
      <div className='mix'>
        <h1 className='login_h'>Confirmation</h1>
        <input className='Boder' onChange={Treact} type='email' name='email' placeholder='Set Email' />
        {error.email && <label style={{ color: "red" }}>{error.email}</label>}
        <input className="Boder" onChange={Treact} type="text" name="otp" placeholder="OTP" />
        {error.otp && <label style={{ color: "red" }}>{error.otp}</label>}
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

export default PasswordComform