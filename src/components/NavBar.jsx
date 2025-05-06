import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <i className="bi bi-car-front me-2"></i>
                    Ritchie & Co
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-house me-1"></i>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">
                                <i className="bi bi-gear me-1"></i>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">
                                <i className="bi bi-info-circle me-1"></i>
                                About Us
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {isLoggedIn ? (
                            <Link to="/profile" className="btn btn-warning">
                                <i className="bi bi-person-circle me-1"></i>
                                Profile
                            </Link>
                        ) : (
                            <>
                                <Link to="/signin" className="btn btn-warning me-2">
                                    <i className="bi bi-box-arrow-in-right me-1"></i>
                                    Sign In
                                </Link>
                                <Link to="/signup" className="btn btn-outline-warning">
                                    <i className="bi bi-person-plus me-1"></i>
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;