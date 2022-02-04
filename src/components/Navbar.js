import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import logo from '../img/logo.jpg'
import './style.css';



export default  class Navbar extends Component {
    render(){
        return(
           <nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
              <Link to="/">
                 <img src={logo} alt="store" className="navbar-brand" width="40"/>
              </Link>
              <ul className="navbar-nav align-items-center">
                  <li className="nav-item ml-5">
                     <Link to="/" className="nav-link">
                        Products
                     </Link>
                  </li>
              </ul>
              <Link to="/Cart" className="ml-auto">
                 <button className=" justify-content-end text-end cat">
                 <span className="mr-2">
                   <i class="fas fa-shopping-cart"/>
                 </span>
                   cart
                 </button>
              </Link>
           </nav>
        )
    }
};



