import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Carousel from "./Carousel";

const GetProducts = () => {
    let [products, setProducts] = useState([]);
    let [filteredProducts, setFilteredProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");
    let [searchQuery, setSearchQuery] = useState("");
    
    const img_url = "https://richardthiongo.pythonanywhere.com/static/images/"
    const navigate = useNavigate();

    const getProducts = async () => {
        setError("");
        setLoading("Please wait, receiving the products...");
        try {
            const response = await axios.get("https://richardthiongo.pythonanywhere.com/api/getproducts");
            setLoading("")
            setProducts(response.data)
            setFilteredProducts(response.data)
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        
        const filtered = products.filter(product => 
            product.product_name.toLowerCase().includes(query) ||
            product.product_desc.toLowerCase().includes(query)
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container-fluid px-4">
            <NavBar />
            <Carousel />
            
            <div className="products-section py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-light fw-bold">Available Products</h2>
                    <div className="text-end">
                        <b className="text-danger d-block">{error}</b>
                        <b className="text-warning d-block">{loading}</b>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-md-6 mx-auto">
                        <div className="input-group">
                            <span className="input-group-text bg-dark border-0">
                                <i className="bi bi-search text-warning"></i>
                            </span>
                            <input
                                type="text"
                                className="form-control bg-dark text-light border-0"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>

                <div className="row g-4">
                    {filteredProducts.map((product) => (
                        <div className="col-md-4 col-sm-6" key={product.id}>
                            <div className="card h-100 product-card border-0 shadow-sm hover-shadow">
                                <div className="position-relative">
                                    <img 
                                        src={img_url + product.product_photo} 
                                        alt={product.product_name}
                                        className="card-img-top product-image p-3" 
                                    />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <span className="badge bg-secondary text-light">
                                            <i className="bi bi-car-front me-1"></i>
                                            Used
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title fw-bold text-truncate">{product.product_name}</h5>
                                    <p className="card-text text-muted small mb-3">
                                        {product.product_desc.length > 50 
                                            ? product.product_desc.slice(0, 50) + '...' 
                                            : product.product_desc}
                                    </p>
                                    <div className="mt-auto">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <span className="h4 text-warning mb-0">
                                                Ksh {product.product_cost.toLocaleString()}
                                            </span>
                                            <span className="text-muted small">
                                                <i className="bi bi-truck me-1"></i>
                                                Free Shipping
                                            </span>
                                        </div>
                                        <button 
                                            className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                                            onClick={() => navigate("/singleproduct", {state: {product}})}
                                        >
                                            <i className="bi bi-car-front"></i>
                                            See Product
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default GetProducts;