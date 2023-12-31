import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Valid from './ValidLogin';

const Signup = () => {
  const navigation = useNavigate();
  const [input, setInput] = useState({
    uname: "",
    email: "",
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
    const Count = Valid(input);
    setError(Count);
    console.log(error)
    if (Object.keys(Count).length === 0) {
      if(input.copassword !== input.password){ 
        setError({...error , copassword:"Passwords do not match"})
      }else{
        setError({...error, copassword:""})
        navigation('/Medicine');
      } 
    }
  };

  return (
    <div>
      <button className='btn-transparent Boder' onClick={() => navigation(-1)}>
        <h2><i style={{ padding: "10px" }} className="fa-solid fa-angle-left"></i>Back</h2>
      </button>
      <div className='mix'>
        <h1 className='login_h'>Signup</h1>
        <input className='Boder' onChange={Treact} type='text' name='uname' placeholder='Create UserName' />
        {error.uname && <label style={{ color: "red" }}>{error.uname}</label>}
        <input className='Boder' onChange={Treact} type='email' name='email' placeholder='Set Email' />
        {error.email && <label style={{ color: "red" }}>{error.email}</label>}
        <input className="Boder" onChange={Treact} type="password" name="password" placeholder="Create Password" />
        {error.password && <label style={{ color: "red" }}>{error.password}</label>}  
        <input className="Boder" onChange={Treact} type="password" name="copassword" placeholder="Confirm Password" />
        {error.copassword && <label style={{ color: "red" }}>{error.copassword}</label>}  
        <div className='Btn_style Signup-class' >
          <h3>
            <button onClick={validation} className='link Signup-btn  btn-transparent'> Sign up </button>
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

export default Signup;
