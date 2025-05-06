import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SignIn = () => {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setLoading("Please wait...");
            setError("");
            setSuccess("");

            const data = new FormData();
            data.append("username", username);
            data.append("password", password);

            const response = await axios.post("https://richardthiongo.pythonanywhere.com/api/signin", data);
            setLoading("");
            setError("");
            setSuccess(response.data.success);
            
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify({
                username: username,
                email: response.data.email,
                phone: response.data.phone
            }));
            
            // Redirect to home page after successful login
            navigate('/');
        } catch (error) {
            setLoading("");
            setError("Invalid username or password");
        }
    };

    const togglePassword = () => {
        const passwordInput = document.getElementById("password");
        const icon = document.getElementById("icon");

        let current_type = passwordInput.getAttribute("type");
        let new_type = "";
        if (current_type === "password") {
            new_type = "text";
            icon.classList.remove("bi-eye-fill");
            icon.classList.add("bi-eye-slash-fill");
        } else {
            new_type = "password";
            icon.classList.add("bi-eye-fill");
            icon.classList.remove("bi-eye-slash-fill");
        }
        passwordInput.setAttribute("type", new_type);
    };

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
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Sign In
                                    </h2>
                                    
                                    {loading && (
                                        <div className="text-center mb-4">
                                            <div className="loading mx-auto"></div>
                                            <p className="text-warning mt-2">{loading}</p>
                                        </div>
                                    )}
                                    
                                    {error && (
                                        <div className="alert alert-danger tech-hover" role="alert">
                                            <i className="bi bi-exclamation-triangle me-2"></i>
                                            {error}
                                        </div>
                                    )}
                                    
                                    {success && (
                                        <div className="alert alert-success tech-hover" role="alert">
                                            <i className="bi bi-check-circle me-2"></i>
                                            {success}
                                        </div>
                                    )}

                                    <form onSubmit={submitForm} className="needs-validation">
                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-person me-2"></i>
                                                Username
                                            </label>
                                            <input 
                                                type="text" 
                                                className="form-control tech-hover" 
                                                required 
                                                placeholder="Enter username" 
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)} 
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-lock me-2"></i>
                                                Password
                                            </label>
                                            <div className="input-group tech-hover">
                                                <input 
                                                    id="password"
                                                    type="password" 
                                                    className="form-control" 
                                                    required 
                                                    placeholder="Enter password" 
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)} 
                                                />
                                                <span 
                                                    className="input-group-text bg-dark border-0" 
                                                    onClick={togglePassword}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    <i id="icon" className="bi bi-eye-fill text-warning"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button 
                                                type="submit" 
                                                className="btn btn-warning btn-lg px-5"
                                                disabled={loading}
                                            >
                                                <i className="bi bi-box-arrow-in-right me-2"></i>
                                                Sign In
                                            </button>
                                        </div>
                                    </form>

                                    <div className="text-center mt-4">
                                        <p className="text-light">
                                            Don't have an account?{" "}
                                            <Link to="/signup" className="text-warning text-decoration-none">
                                                <i className="bi bi-person-plus me-1"></i>
                                                Sign Up
                                            </Link>
                                        </p>
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

export default SignIn;