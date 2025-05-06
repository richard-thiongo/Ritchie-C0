import axios from "axios";
import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const AddProduct = () => {
    let [product_name, setProductName] = useState("");
    let [product_desc, setProductDesc] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_photo, setProductPhoto] = useState("");
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [success, setSuccess] = useState("");
    const fileInputRef = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            setError("");
            setSuccess("");
            setLoading("Please wait...");
            
            const data = new FormData();
            data.append("product_name", product_name);
            data.append("product_desc", product_desc);
            data.append("product_cost", product_cost);
            data.append("product_photo", product_photo);

            const response = await axios.post("https://richardthiongo.pythonanywhere.com/api/addproduct", data);
            setLoading("");
            setSuccess(response.data.success);
            setProductName("");
            setProductDesc("");
            setProductCost("");
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
            
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    return ( 
        <div className="container-fluid px-0">
            <NavBar />
            
            <div className="main-content">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card glass-effect tech-hover">
                                <div className="card-body p-4">
                                    <h2 className="text-center mb-4 text-gradient">
                                        <i className="bi bi-plus-circle me-2"></i>
                                        Add New Product
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
                                                <i className="bi bi-tag me-2"></i>
                                                Product Name
                                            </label>
                                            <input 
                                                type="text" 
                                                placeholder="Enter product name" 
                                                value={product_name} 
                                                required 
                                                className="form-control tech-hover" 
                                                onChange={(e) => setProductName(e.target.value)} 
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-card-text me-2"></i>
                                                Product Description
                                            </label>
                                            <textarea 
                                                className="form-control tech-hover" 
                                                value={product_desc} 
                                                required 
                                                placeholder="Enter product description" 
                                                onChange={(e) => setProductDesc(e.target.value)}
                                                rows="4"
                                            ></textarea>
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-currency-dollar me-2"></i>
                                                Product Cost
                                            </label>
                                            <input 
                                                type="number" 
                                                className="form-control tech-hover" 
                                                value={product_cost} 
                                                required 
                                                placeholder="Enter product cost" 
                                                onChange={(e) => setProductCost(e.target.value)} 
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label text-light">
                                                <i className="bi bi-image me-2"></i>
                                                Product Photo
                                            </label>
                                            <div className="input-group tech-hover">
                                                <input 
                                                    ref={fileInputRef}
                                                    type="file" 
                                                    className="form-control" 
                                                    required 
                                                    onChange={(e) => setProductPhoto(e.target.files[0])}
                                                    accept="image/*"
                                                />
                                                <span className="input-group-text bg-dark border-0">
                                                    <i className="bi bi-upload text-warning"></i>
                                                </span>
                                            </div>
                                        </div>

                                        <div className="text-center">
                                            <button 
                                                type="submit" 
                                                className="btn btn-warning btn-lg px-5"
                                                disabled={loading}
                                            >
                                                <i className="bi bi-plus-circle me-2"></i>
                                                Add Product
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AddProduct;