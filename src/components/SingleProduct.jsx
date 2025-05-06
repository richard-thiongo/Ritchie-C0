import axios from "axios";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const SingleProduct = () => {
    const {product} = useLocation().state || {};
    const img_url = "https://richardthiongo.pythonanywhere.com/static/images/"
    const navigate = useNavigate();

    let [phone,setPhone]= useState("");
    let [loading,setLoading] = useState("");
    let [error,setError] = useState("");
    let [success,setSuccess] = useState("");

    const submitForm = async (e) => {
        e.preventDefault()
        setError("")
        setSuccess("")
        setLoading("Please wait...processing payment")
        try {
            const data = new FormData()
            data.append("amount",product.product_cost)
            data.append("phone",phone)

            const response = await axios.post("https://richardthiongo.pythonanywhere.com/api/mpesa_payment",data)
            setLoading("")
            setSuccess(response.data.message);
            
            // Redirect to payment success page after 2 seconds
            setTimeout(() => {
                navigate('/payment-success');
            }, 2000);
        } catch (error) {
            setLoading("")
            setError(error.message);
        }
    };

    return (
        <div className="container-fluid px-0">
            <NavBar />
            
            <div className="single-product-section">
                <div className="container py-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="single-product-card">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <img 
                                            src={img_url + product.product_photo} 
                                            alt={product.product_name}
                                            className="single-product-image"
                                        />
                                    </div>
                                    <div className="col-md-7">
                                        <div className="single-product-details">
                                            <h2 className="single-product-title">
                                                {product.product_name}
                                            </h2>
                                            
                                            <div className="single-product-price mb-3">
                                                Ksh {product.product_cost.toLocaleString()}
                                            </div>

                                            <div className="single-product-description mb-3">
                                                {product.product_desc}
                                            </div>

                                            {loading && (
                                                <div className="text-center mb-3">
                                                    <div className="loading mx-auto"></div>
                                                    <p className="text-warning mt-2">{loading}</p>
                                                </div>
                                            )}

                                            {error && (
                                                <div className="single-product-error mb-3">
                                                    <i className="bi bi-exclamation-triangle me-2"></i>
                                                    {error}
                                                </div>
                                            )}

                                            {success && (
                                                <div className="alert alert-success tech-hover mb-3" role="alert">
                                                    <i className="bi bi-check-circle me-2"></i>
                                                    {success}
                                                </div>
                                            )}

                                            <form onSubmit={submitForm}>
                                                <div className="mb-3">
                                                    <label className="form-label text-light">
                                                        <i className="bi bi-currency-dollar me-2"></i>
                                                        Amount
                                                    </label>
                                                    <input 
                                                        type="number" 
                                                        readOnly 
                                                        value={product.product_cost} 
                                                        className="form-control tech-hover" 
                                                    />
                                                </div>

                                                <div className="mb-3">
                                                    <label className="form-label text-light">
                                                        <i className="bi bi-phone me-2"></i>
                                                        M-PESA Number
                                                    </label>
                                                    <input 
                                                        type="tel" 
                                                        required 
                                                        placeholder="Enter Mpesa No 254xxxxxxxxx" 
                                                        onChange={(e)=> setPhone(e.target.value)} 
                                                        className="form-control tech-hover" 
                                                    />
                                                </div>

                                                <button 
                                                    className="single-product-button w-100"
                                                    disabled={loading}
                                                >
                                                    <i className="bi bi-credit-card me-2"></i>
                                                    Pay Now
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;