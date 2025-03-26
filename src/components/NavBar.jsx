import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
            <section className="row">
        <div className="col-md-12">
          <div className="navbar navbar-expand-md navbar-light bg-light">
            <Link to="/" className="navbar-brand">Ritchie & Co</Link>
            <button className="navbar-toggler" data-bs-target="#ivy" data-bs-toggle="collapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="ivy">
              <div className="navbar-nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/addproduct" className="nav-link">Add Product</Link>
                <Link to="/aboutus" className="nav-link">About Us</Link>
              </div>

              <div className="navbar-nav ms-auto">
                <Link to="/signin" className="nav-link">Sign In</Link>
                <Link to="/signup" className="nav-link">Sign Up</Link>
              </div>
            </div>
          </div>
        </div>
       </section>
        </div>
     );
}
 
export default NavBar;