import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SignUp = () => {
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [password, setPassword] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    let [passwordStrength, setPasswordStrength] = useState({
        score: 0,
        message: "",
        color: ""
    });
    const navigate = useNavigate();

    const checkPasswordStrength = (password) => {
        let score = 0;
        let message = "";
        let color = "";

        // Check length
        if (password.length >= 8) score += 1;
        if (password.length >= 12) score += 1;

        // Check for uppercase letters
        if (/[A-Z]/.test(password)) score += 1;

        // Check for lowercase letters
        if (/[a-z]/.test(password)) score += 1;

        // Check for numbers
        if (/[0-9]/.test(password)) score += 1;

        // Check for special characters
        if (/[^A-Za-z0-9]/.test(password)) score += 1;

        // Determine strength message and color
        if (score <= 2) {
            message = "Weak";
            color = "#dc3545"; // Red
        } else if (score <= 4) {
            message = "Medium";
            color = "#ffc107"; // Yellow
        } else {
            message = "Strong";
            color = "#198754"; // Green
        }

        setPasswordStrength({ score, message, color });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            setLoading("Please wait...");
            setError("");
            setSuccess("");

            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("phone", phone);
            data.append("password", password);

            const response = await axios.post("https://richardthiongo.pythonanywhere.com/api/signup", data);
            setLoading("");
            setError("");
            setSuccess(response.data.success);
            
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify({
                username: username,
                email: email,
                phone: phone
            }));
            
            // Redirect to home page after successful signup
            navigate('/');
        } catch (error) {
            setLoading("");
            setError("Something went wrong");
        }
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
                                        <i className="bi bi-person-plus me-2"></i>
                                        Sign Up
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
                                                <i className="bi bi-envelope me-2"></i>
                                                Email
                                            </label>
                                            <input 
                                                type="email" 
                                                className="form-control tech-hover" 
                                                required 
                                                placeholder="Enter email" 
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} 
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-phone me-2"></i>
                                                Phone Number
                                            </label>
                                            <input 
                                                type="tel" 
                                                className="form-control tech-hover" 
                                                required 
                                                placeholder="Enter phone number" 
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)} 
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-lock me-2"></i>
                                                Password
                                            </label>
                                            <input 
                                                type="password" 
                                                className="form-control tech-hover" 
                                                required 
                                                placeholder="Enter password" 
                                                value={password}
                                                onChange={handlePasswordChange} 
                                            />
                                            {password && (
                                                <div className="mt-2">
                                                    <div className="d-flex align-items-center">
                                                        <div 
                                                            className="progress flex-grow-1" 
                                                            style={{ height: "5px" }}
                                                        >
                                                            <div 
                                                                className="progress-bar" 
                                                                role="progressbar" 
                                                                style={{ 
                                                                    width: `${(passwordStrength.score / 6) * 100}%`,
                                                                    backgroundColor: passwordStrength.color 
                                                                }}
                                                            />
                                                        </div>
                                                        <span 
                                                            className="ms-2" 
                                                            style={{ color: passwordStrength.color }}
                                                        >
                                                            {passwordStrength.message}
                                                        </span>
                                                    </div>
                                                    <small className="text-light mt-1 d-block">
                                                        Password should contain at least 8 characters, including uppercase, lowercase, numbers, and special characters.
                                                    </small>
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-center">
                                            <button 
                                                type="submit" 
                                                className="btn btn-warning btn-lg px-5"
                                                disabled={loading}
                                            >
                                                <i className="bi bi-person-plus me-2"></i>
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>

                                    <div className="text-center mt-4">
                                        <p className="text-light">
                                            Already have an account?{" "}
                                            <Link to="/signin" className="text-warning text-decoration-none">
                                                <i className="bi bi-box-arrow-in-right me-1"></i>
                                                Sign In
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

export default SignUp;