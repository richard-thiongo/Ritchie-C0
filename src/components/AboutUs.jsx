// import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <div className="container-fluid px-0">
            <NavBar />
            
            <div className="main-content">
                <div className="about-us-header tech-hover">
                    <div className="container py-5">
                        <h1 className="text-gradient display-4 fw-bold mb-3">
                            <i className="bi bi-building me-2"></i>
                            About Us
                        </h1>
                        <p className="lead text-light">
                            Driven by passion, innovation, and a commitment to quality.
                        </p>
                    </div>
                </div>

                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="card glass-effect tech-hover h-100">
                                <div className="card-body p-4">
                                    <h2 className="text-gradient h3 mb-4">
                                        <i className="bi bi-lightbulb me-2"></i>
                                        Welcome to Ritchie & Co
                                    </h2>
                                    <p className="text-light">
                                        At Ritchie & Co, we pride ourselves on building cutting-edge cars that blend innovation, safety, and style. With decades of experience in the automotive industry, we are dedicated to pushing the limits of performance and sustainability.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card glass-effect tech-hover h-100">
                                <div className="card-body p-4">
                                    <h2 className="text-gradient h3 mb-4">
                                        <i className="bi bi-star me-2"></i>
                                        Our Values
                                    </h2>
                                    <ul className="list-unstyled text-light">
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill text-warning me-2"></i>
                                            <span><strong>Innovation:</strong> We continuously innovate to create the best vehicles for our customers.</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill text-warning me-2"></i>
                                            <span><strong>Quality:</strong> We prioritize excellence in every car we make.</span>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill text-warning me-2"></i>
                                            <span><strong>Sustainability:</strong> We are committed to making eco-friendly vehicles to help protect the planet.</span>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <i className="bi bi-check-circle-fill text-warning me-2"></i>
                                            <span><strong>Customer Satisfaction:</strong> Our customers' needs are at the heart of everything we do.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card glass-effect tech-hover h-100">
                                <div className="card-body p-4">
                                    <h2 className="text-gradient h3 mb-4">
                                        <i className="bi bi-clock-history me-2"></i>
                                        Our History
                                    </h2>
                                    <p className="text-light">
                                        Founded in 2007, Ritchie & Co started as a small family-owned business with a mission to design cars that bring people together. Over the years, we have grown into a global leader in the automotive industry, known for our luxury, performance, and eco-conscious vehicles.
                                    </p>
                                    <p className="text-light">
                                        With over 18 years of experience and numerous accolades, we continue to lead the way in automotive design, technology, and safety.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="card glass-effect tech-hover">
                                <div className="card-body p-4 text-center">
                                    <h2 className="text-gradient h3 mb-4">
                                        <i className="bi bi-trophy me-2"></i>
                                        Our Achievements
                                    </h2>
                                    <div className="row g-4">
                                        <div className="col-md-3">
                                            <div className="achievement-item">
                                                <i className="bi bi-car-front-fill text-warning display-4"></i>
                                                <h3 className="h4 text-light mt-3">1000+</h3>
                                                <p className="text-light">Vehicles Sold</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="achievement-item">
                                                <i className="bi bi-people-fill text-warning display-4"></i>
                                                <h3 className="h4 text-light mt-3">500+</h3>
                                                <p className="text-light">Happy Customers</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="achievement-item">
                                                <i className="bi bi-award-fill text-warning display-4"></i>
                                                <h3 className="h4 text-light mt-3">50+</h3>
                                                <p className="text-light">Awards Won</p>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="achievement-item">
                                                <i className="bi bi-globe text-warning display-4"></i>
                                                <h3 className="h4 text-light mt-3">20+</h3>
                                                <p className="text-light">Countries Served</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default AboutUs;