

import React, { Component } from 'react';
import Menuitems from './Menuitems';
import { Link } from 'react-router-dom';
class Navbar extends Component {
    state = {clicked : false};
    handelclick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      <div>
        <nav className='NavbarItems'>
            <h1 className='Navbar-logo'>WorldTravel</h1>
            <div className='menu-icons' onClick={this.handelclick}>
                <i className={this.state.clicked ? " fas fa-times": "fas fa-bars"}></i>
            
            </div>
            <ul className={this.state.clicked ? "nav-menu active" :  "nav-menu"}>
            {Menuitems.map((item,index)=>{
                return(
                    <li key={index}>
                    <Link className={item.cName} to={item.url}>
                    <i className={item.icon}> {item.title}</i>
                      
                    </Link>
                </li>

                );
            })}
               
            </ul>
        </nav>
      </div>
    )
  }
}

export default Navbar;
