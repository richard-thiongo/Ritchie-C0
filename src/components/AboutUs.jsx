import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        
        
        
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Driven by passion, innovation, and a commitment to quality.</p>
      </header>
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

      
      <section className="company-intro">
        <h2>Welcome to Ritchie & Co </h2>
        <p>
          At Ritchie & Co, we pride ourselves on building cutting-edge cars that blend innovation, safety, and style. With decades of experience in the automotive industry, we are dedicated to pushing the limits of performance and sustainability.
        </p>
      </section>

      <section className="company-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Innovation:</strong> We continuously innovate to create the best vehicles for our customers.</li>
          <li><strong>Quality:</strong> We prioritize excellence in every car we make.</li>
          <li><strong>Sustainability:</strong> We are committed to making eco-friendly vehicles to help protect the planet.</li>
          <li><strong>Customer Satisfaction:</strong> Our customers' needs are at the heart of everything we do.</li>
        </ul>
      </section>

      <section className="company-history">
        <h2>Our History</h2>
        <p>
          Founded in 2007, Ritchie & Co started as a small famirous accolades, we continuely-owned business with a mission to design cars that bring people together. Over the years, we have grown into a global leader in the automotive industry, known for our luxury, performance, and eco-conscious vehicles.
        </p>
        <p>
          With over 18 years of experience and nume to lead the way in automotive design, technology, and safety.
        </p>
      </section>

     
    </div>

     );
}
 
export default AboutUs;