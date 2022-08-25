import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ children, isLast, path="/", ...rest }) => {
  return (
    <li className="nav-item">
        <Link to={path} className="nav-link" aria-current="page">
            <div className="d-block" {...rest} >
                {children}
            </div>
        </Link>
    </li>
  )
}

export default MenuItem

