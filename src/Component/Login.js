import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ValidLogin from './ValidLogin';

const Login = () => {
  const navigation = useNavigate();
  const [input, setInput] = useState({
    uname: "",
    email: "",
    password: ""
  });

  const Treact = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState([]);

  const validation = () => {
    const Count = ValidLogin(input);
    setError(Count);
    if (Object.keys(Count).length === 0) {
      navigation('/Medicine');
    }
  };

  return (
    <div>
      <button className='btn-transparent Boder' onClick={() => navigation(-1)}>
        <h2><i style={{ padding: "10px" }} className="fa-solid fa-angle-left"></i>Back</h2>
      </button>
      <div className='mix'>
        <h1 className='login_h'>Login</h1>
        <input className='Boder' onChange={Treact} type='text' name='uname' placeholder='User Name' />
        {error.uname && <label style={{ color: "red" }}>{error.uname}</label>}
        <input className='Boder' onChange={Treact} type='email' name='email' placeholder='Email' />
        {error.email && <label style={{ color: "red" }}>{error.email}</label>}
        <input className="Boder" onChange={Treact} type="password" name="password" placeholder="Password" />
        {error.password && <label style={{ color: "red" }}>{error.password}</label>}
        <span ><Link to={"/PasswordComform"}>Forgot password ?</Link></span>
        <div className='Btn_style Green frant' >
          <h3>
            <button onClick={validation} className='link btn-transparent'> Log in </button>
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

export default Login;
