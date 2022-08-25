import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-light">
        <div className="container">
          <Link className="navbar-brand" href="#">
            <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
          </Link>
        </div>
    </nav>
  )
}

export default Navbar