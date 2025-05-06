import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const CarServices = () => {
    return (
        <div className="container-fluid px-0">
            <NavBar />
            <div className="main-content">
                <div className="container py-5">
                    <h2 className="text-center text-gradient mb-5">
                        <i className="bi bi-car-front me-2"></i>
                        Our Services
                    </h2>

                    <div className="row g-4">
                        {/* Shipping Services */}
                        <div className="col-md-4">
                            <div className="card glass-effect tech-hover h-100">
                                <div className="card-body p-4">
                                    <div className="text-center mb-4">
                                        <i className="bi bi-truck text-warning" style={{ fontSize: "3rem" }}></i>
                                    </div>
                                    <h3 className="text-center text-gradient mb-3">Car Shipping</h3>
                                    <p className="text-light">
                                        We offer worldwide car shipping services with:
                                    </p>
                                    <ul className="text-light">
                                        <li>Door-to-door delivery</li>
                                        <li>Secure packaging</li>
                                        <li>Real-time tracking</li>
                                        <li>Insurance coverage</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* New Age Cars */}
                        <div className="col-md-4">
                            <div className="card glass-effect tech-hover h-100">
                                <div className="card-body p-4">
                                    <div className="text-center mb-4">
                                        <i className="bi bi-lightning-charge text-warning" style={{ fontSize: "3rem" }}></i>
                                    </div>
                                    <h3 className="text-center text-gradient mb-3">New Age Cars</h3>
                                    <p className="text-light">
                                        Discover the future of automotive with:
                                    </p>
                                    <ul className="text-light">
                                        <li>Electric vehicles</li>
                                        <li>Autonomous driving</li>
                                        <li>Smart connectivity</li>
                                        <li>Sustainable mobility</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* German Cars */}
                        <div className="col-md-4">
                            <div className="card glass-effect tech-hover h-100">
                                <div className="card-body p-4">
                                    <div className="text-center mb-4">
                                        <i className="bi bi-gear text-warning" style={{ fontSize: "3rem" }}></i>
                                    </div>
                                    <h3 className="text-center text-gradient mb-3">German Cars</h3>
                                    <p className="text-light">
                                        Experience German engineering excellence:
                                    </p>
                                    <ul className="text-light">
                                        <li>Premium brands</li>
                                        <li>Advanced technology</li>
                                        <li>Superior performance</li>
                                        <li>Luxury features</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Media Section */}
                    <div className="card glass-effect tech-hover mt-5">
                        <div className="card-body p-4">
                            <h3 className="text-center text-gradient mb-4">
                                <i className="bi bi-share me-2"></i>
                                Follow Us on Social Media
                            </h3>
                            <p className="text-center text-light mb-4">
                                Stay updated with our latest cars, shipping services, and exclusive offers
                            </p>
                            <div className="d-flex justify-content-center gap-3">
                                <a 
                                    href="https://twitter.com/ritchieco" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-warning btn-lg"
                                >
                                    <i className="bi bi-twitter me-2"></i>
                                    Twitter
                                </a>
                                <a 
                                    href="https://instagram.com/ritchieco" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-warning btn-lg"
                                >
                                    <i className="bi bi-instagram me-2"></i>
                                    Instagram
                                </a>
                                <a 
                                    href="https://facebook.com/ritchieco" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="btn btn-outline-warning btn-lg"
                                >
                                    <i className="bi bi-facebook me-2"></i>
                                    Facebook
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <Link to="/" className="btn btn-warning btn-lg">
                            <i className="bi bi-arrow-left me-2"></i>
                            Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarServices; 