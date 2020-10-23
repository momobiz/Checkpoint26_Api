import React from 'react';
import {Link} from 'react-router-dom'


const NavBarb = () => {
    return (
        <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <h2 className="navbar-brand" href="#">Chk.API</h2>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span classaAme="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">Users</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin">Admin</Link>
      </li>
     
    </ul>
  
   
     
  </div>
</nav>
        </div>
    );
}

export default NavBarb;
