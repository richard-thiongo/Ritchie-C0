import axios from "axios";
import { useEffect, useState,  } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Carousel from "./Carousel";


const GetProducts = () => {
    let [products,setProducts] = useState([]);
    let [loading, setLoading]= useState("");
    let [error,setError]= useState("");
    
    const img_url = "https://richardthiongo.pythonanywhere.com/static/images/"
    const navigate = useNavigate();


    //function to fetch products  from api
    const getProducts = async () => {
        setError("");
        setLoading("Please wait, receiving the products...");
        try {
            const response = await axios.get("https://richardthiongo.pythonanywhere.com/api/getproducts");
            console.log(response.data)
            setLoading("")
            setProducts(response.data)
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(()=>{
        getProducts();
    }, []);
    return (
        <div className="row">
            
            {/* Mount your navbar */} <NavBar /> 

            {/* Mount carousel component */} 
             <Carousel />
            
            
            <h3>Available products</h3>
            <b className="text-danger">{error}</b>
            <b className="text-warning">{loading}</b>
            

            {products.map((product)=>(
                  <div className="col-md-3 justify-content-center mb-4">
                      <div className="card shadow">
                          <img src={img_url + product.product_photo} alt="" className="product_img mt-4" />
                          <div className="card-body">
                              <h5 className="mt-2">{product.product_name}</h5>
                              <p className="text-muted">{product.product_desc.slice(0, 10)}</p>
                              <b className="text-warning">Ksh {product.product_cost}</b>
                              <button className="btn btn-primary w-100" onClick={()=> navigate("/singleproduct",{state: {product}})} >See Product</button>
                          </div>
                      </div>
                    </div>
            ))}

            <Footer/>


      
        </div>
    );
}
 
export default GetProducts;