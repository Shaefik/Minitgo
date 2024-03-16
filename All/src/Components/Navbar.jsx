import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav id="na" style={{backgroundColor:'#563d7c' }} className="navbar navbar-expand-lg navbar-light  ">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup" >
                    <div className="navbar-nav " >
                        <Link to='/profilesettings'  style={{ color: 'white' }} className="nav-item nav-link ml-4">ProfileSetting</Link>
                        <Link to='/media'  style={{ color: 'white' }} className="nav-item nav-link ml-4">Media</Link>
                        <Link to='/product'  style={{ color: 'white' }} className="nav-item nav-link ml-4">Product</Link>
                        <Link to='/cart'  style={{ color: 'white' }} className="nav-item nav-link ml-4">Cart</Link>
                        <Link to='/returnpolicy'  style={{ color: 'white' }} className="nav-item nav-link ml-4">Return Policy</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
