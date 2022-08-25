import React from 'react';
import Logo from '../ui/Logo';
import MenuLinks from '../ui/MenuLinks';

// Navbar.js
export default function Navbar(props) {
    return (
        <div className="navbar navbar-expand-lg bg-light" {...props}>
            <div className="container-fluid">
            <Logo className="navbar-brand" />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <MenuLinks />
            </div>
        </div>
    );
}