import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get user data from localStorage
        const userData = localStorage.getItem('user');
        if (userData) {
            setUser(JSON.parse(userData));
        } else {
            navigate('/signin');
        }
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem('user');
        navigate('/signin');
    };

    if (!user) {
        return null;
    }

    return (
        <div className="container-fluid px-0">
            <NavBar />
            <div className="main-content">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card glass-effect tech-hover">
                                <div className="card-body p-4">
                                    <h2 className="text-center mb-4 text-gradient">
                                        <i className="bi bi-person-circle me-2"></i>
                                        Profile
                                    </h2>
                                    
                                    <div className="text-center mb-4">
                                        <h3 className="text-warning">
                                            Hello, {user.username}!
                                        </h3>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-person me-2 text-warning"></i>
                                            <div>
                                                <small className="text-light">Username</small>
                                                <p className="mb-0 text-light">{user.username}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-envelope me-2 text-warning"></i>
                                            <div>
                                                <small className="text-light">Email</small>
                                                <p className="mb-0 text-light">{user.email}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="d-flex align-items-center mb-3">
                                            <i className="bi bi-phone me-2 text-warning"></i>
                                            <div>
                                                <small className="text-light">Phone</small>
                                                <p className="mb-0 text-light">{user.phone}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <button 
                                            onClick={handleSignOut}
                                            className="btn btn-warning btn-lg px-5"
                                        >
                                            <i className="bi bi-box-arrow-right me-2"></i>
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile; 