import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <section className="row bg-primary text-light p-5">
                <div className="col-md-4 mb-4">
                    <h4 className="text-warning mb-4 fw-bold">About Us</h4>
                    <p className="text-light">We are dedicated to bring quality cars to our customers.</p>
                    <p className="text-light">We don't just sell cars but also ensure the garage you put your cars is full of pure greatness.</p>
                    <Link to="/aboutus" className="btn btn-warning mt-3">
                        <i className="bi bi-info-circle me-2"></i>
                        Learn More
                    </Link>
                </div>
                <div className="col-md-4 mb-4">
                    <h4 className="text-warning mb-4 fw-bold">Contact Us</h4>
                    <form action="">
                        <div className="mb-3">
                            <div className="input-group">
                                <span className="input-group-text bg-dark border-0">
                                    <i className="bi bi-envelope text-warning"></i>
                                </span>
                                <input type="email" placeholder="Enter your email" className="form-control bg-dark text-light border-0"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
                                <span className="input-group-text bg-dark border-0">
                                    <i className="bi bi-chat-left-text text-warning"></i>
                                </span>
                                <textarea placeholder="Leave a comment" rows="4" className="form-control bg-dark text-light border-0"></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-warning w-100">
                            <i className="bi bi-send me-2"></i>
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="col-md-4 mb-4">
                    <h4 className="text-warning mb-4 fw-bold">Stay Connected</h4>
                    <div className="social-links mb-4">
                        <a href="https://facebook.com" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://instagram.com" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://twitter.com" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" className="btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                    <p className="text-light">Visit us on all social media platforms for any enquiries.</p>
                    <div className="mt-4">
                        <p className="text-light mb-3">
                            <i className="bi bi-envelope-fill me-2 text-warning"></i>
                            info@ritchieco.com
                        </p>
                        <p className="text-light mb-3">
                            <i className="bi bi-telephone-fill me-2 text-warning"></i>
                            +254 123 456 789
                        </p>
                        <p className="text-light">
                            <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                            Nairobi, Kenya
                        </p>
                    </div>
                </div>
            </section>
            <footer className="bg-dark text-light text-center py-4 border-top border-warning">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-md-start mb-3 mb-md-0">
                            <p className="mb-0">
                                <i className="bi bi-c-circle me-2"></i>
                                Ritchie & Co. All Rights Reserved
                            </p>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <p className="mb-0">
                                Developed by Richard &copy; {new Date().getFullYear()}
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
     );
}
 
export default Footer;