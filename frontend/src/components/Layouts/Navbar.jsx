import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    // navbar titles with specified page route path
    const navbarLinks = [
        { title: 'Home', path: '/' },
        { title: 'New Post', path: '/create/blog' },
        { title: 'Google Docs', path: '/doc/google' }
    ];

    return (
        <>
            <nav className="navbar bg-primary navbar-expand-md">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white h1" to={'/'} replace={true}>BlogDoc App</Link>
                    <button className="navbar-toggler btn btn-primary bg-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">BlogDoc App</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                {navbarLinks.map((value, index) => {
                                    return (
                                        <li className="nav-item text-center" key={index}>
                                            <NavLink className="nav-link" to={value.path} replace={true}>{value.title}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar