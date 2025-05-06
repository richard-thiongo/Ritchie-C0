import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const PaymentSuccess = () => {
    return (
        <div className="container-fluid px-0">
            <NavBar />
            <div className="main-content">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card glass-effect tech-hover">
                                <div className="card-body p-4 text-center">
                                    <div className="mb-4">
                                        <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "5rem" }}></i>
                                    </div>
                                    
                                    <h2 className="text-gradient mb-4">
                                        Payment Successful!
                                    </h2>
                                    
                                    <p className="text-light mb-4">
                                        Thank you for your purchase. Your payment has been processed successfully.
                                        Please check your phone for the M-PESA prompt to complete the transaction.
                                    </p>

                                    <div className="d-flex justify-content-center gap-3">
                                        <Link to="/" className="btn btn-warning btn-lg">
                                            <i className="bi bi-arrow-left me-2"></i>
                                            Back to Products
                                        </Link>
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

export default PaymentSuccess; 