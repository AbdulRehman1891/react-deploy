import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';
const Navbar=()=>
{
    return(
        <>
        <div data-testid="comp" className="container-fluid nav-bg">
        
            <div className="row">
                <div className="col-10 mx-auto">

        
            <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><h2><span>E-</span>Commerce</h2></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/add">AddCustomer</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/edit">ViewCustomer</NavLink>
        </li>
       </ul>
     
    </div>
  </div>
</nav>
  </div>
        </div>
        </div>
        </>
    );
}

export default Navbar;