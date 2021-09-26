import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar fixed-top nv navbar-expand-lg nav-color">
                <div className="container">
                    <a className="navbar-brand logo" href="/home">Developers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active nav-menu" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-menu" aria-current="page" href="/blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-menu" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active nav-menu" aria-current="page" href="/contact">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 search-field" type="search" placeholder="React devs..." aria-label="Search" />
                            <button className="btn-regular" type="submit">Hire Devs</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;