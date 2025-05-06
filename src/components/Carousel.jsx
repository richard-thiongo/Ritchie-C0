const Carousel = () => {
  return (
    <div>
      <section className="row">
        <div className="col-md-12" style={{ backgroundColor: "black" }}>
          <div className="carousel slide" data-bs-ride="carousel" id="myCarousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/shi.jpg" alt="Ready to Ship" height="500px" className="d-block w-100" />
                <div className="carousel-caption">
                  <h2>Ready to Ship</h2>
                  <p>We are ready to ship to where you are</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/germ.jpg" alt="German Cars" height="500px" className="d-block w-100" />
                <div className="carousel-caption">
                  <h2>German Cars</h2>
                  <p>We sell high performance German cars in our showrooms</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="images/new.jpg" alt="New Age Automobile" height="500px" className="d-block w-100" />
                <div className="carousel-caption">
                  <h2>New Age Automobile</h2>
                  <p>We have the new age automobiles in our various branches across the world.</p>
                </div>
              </div>
            </div>

            <a href="#myCarousel" data-bs-slide="prev" className="carousel-control-prev">
              <span className="carousel-control-prev-icon"></span>
            </a>

            <a href="#myCarousel" data-bs-slide="next" className="carousel-control-next">
              <span className="carousel-control-next-icon"></span>
            </a>

            <ol className="carousel-indicators">
              <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;