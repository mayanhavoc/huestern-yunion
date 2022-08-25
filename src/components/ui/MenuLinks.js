import React from 'react';
import MenuItem from './MenuItem';

function MenuLinks() {
  return (
    <section className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <MenuItem className="nav-item" path="/">Home</MenuItem>
            <MenuItem className="nav-item" path="work">Work</MenuItem>
            <MenuItem className="nav-item" path="about">About</MenuItem>
        </ul>
    </section>
  )
}

export default MenuLinks