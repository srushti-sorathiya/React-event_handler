import React from 'react';
import { Link } from 'react-router-dom';
import headLogo from "../img/head_logo.png"
import banergif from "../img/baner.gif"
function Medicine() {
  const orgData = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021
    }
  ]
  return (
    <React.Fragment>
      <section className='navbar'>
        <div className='container-i'>
          <div className='nevbar-nav'>
            <div className='head-img'>
              <img className='head-logo' src={headLogo} />
            </div>
            <div className='menu'>
              <ul className='nav-ul'>
                <li className='nav-manu'>
                  <Link className='nav-text' to={"/signup"}>Sign Up</Link>
                </li>
                <li className='nav-manu'>
                  <Link className='nav-text' to={"/About"} >About Us</Link>
                </li>
                <li className='nav-manu'>
                  <Link className='nav-text' to={"/About"} >Contact</Link>
                </li>
                <li className='nav-manu'>
                  <Link className='nav-text' to={"/About"} >FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='Banner'>
        <div className='container-i'>
          <div className='row'>
            <div className='col-6'>
              <img src={banergif} />
            </div>
            <div className='col-6 contant'>
              <div className='col-10'>
                <h1>MEDICINE</h1>
                <p>The World Health Organization at its 1978 international conference held in the Soviet Union produced the Alma-Ata Health Declaration, which was designed to serve governments as a basis for planning health care that would reach people at all levels of society. </p>
              </div>
              <div className='Btn_style Signup-class'>
                <h3>
                  <button className='link Signup-btn width btn-transparent'><a className='medocone-text' href='#Store'> List of Medicine</a></button>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='Store' className='medicine-Store'>
        <center>
          <table border={1}>
            <tr>
              <th className='Boder' colSpan={5}> <h1>Medicine List </h1></th>
            </tr>
            <tr>
              <th className='Boder'>Id</th>
              <th className='Boder'>Name</th>
              <th className='Boder'>Quantity</th>
              <th className='Boder'>Price</th>
              <th className='Boder'>Expiry</th>
            </tr>
            {
              orgData.map((data, index) => (
                <tr key={index}>
                  <td className='Boder'>{data.id}</td>
                  <td className='Boder'>{data.name}</td>
                  <td className='Boder'>{data.quantity}</td>
                  <td className='Boder'>{data.price}</td>
                  <td className='Boder'>{data.expiry}</td>
                </tr>
              ))
            }
          </table>
        </center>
      </section>
    </React.Fragment>
  );
}

export default Medicine;
