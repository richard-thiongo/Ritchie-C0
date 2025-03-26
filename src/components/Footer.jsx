const Footer = () => {
    return ( 
        <div>
            <section className="row bg-primary p-4">
            <div className="col-md-4 text-dark">
               <h4 className="text-center">About Us</h4>
               <p>We are dedicated to bring quality cars to our customers.</p>
               <p>We don't just sell cars but also ensure the garage you put your cars is ful;l of pure greatness.</p>

            </div>
            <div className="col-md-4">
               <h4 className="text-center">Contact us</h4>
               <form action="">
                  <input type="email" placeholder="Enter your email" className="form-control"/><br/>
                  <textarea name="" placeholder="Leave a comment" rows="7" className="form-control" id=""></textarea>
                  <br/>
                  <input type="submit" value="Send message" className="btn btn-outline-light"/>
               </form>
            </div>
            <div className="col-md-4">
               <h4 className="text-center">Stay connect</h4>
               <br/>
               <a href="http://facebook.com"><img src="images/fb.png" alt=""/></a>
               <a href="http://instagram.com"><img src="images/in.png" alt=""/></a>
               <p className="text-dark">Visit us in all social media platforms for any enqiuries. </p>

            </div>
          </section>
          <footer className="bg-primary text-dark text-center p-2">
            <h5>Developed by Richard &copy;2025. All rights reserved</h5>
          </footer>
        </div>
     );
}
 
export default Footer;