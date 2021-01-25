import React from "react";


function Contact (){
    return (
        <div className="container">
        <section className="contact">
          <div>
            <h1>Contact</h1>
          </div>
          
            <div id="email-icon" className="icon">
              <h3 className="fa-align-centerr">topsynco05@gmail.com</h3>
              <a href="mailto:topsynco05@gmail.com"
                ><i
                  className="fa fa-envelope-o fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
      
            <div id="mobile-icon" className="icon">
              <h3 className="fa-align-centerr">(203)-864-8771</h3>
              <a href="tel:(203)-864-8771"
                ><i
                  className="fa fa-mobile fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
          
  
          <div id="github-icon" className="icon">
            <h3 className="fa-align-centerr">My Work</h3>
            <a href="https://github.com/topsynco"
              ><i
                className="fa fa-github fa-5x fa-align-centerr"
                aria-hidden="true"
              ></i></a>
          </div>
         
            <div id="linkedin-icon" className="icon">
              <h3 className="fa-align-centerr">LinkedIn!</h3>
              <a href="https://www.linkedin.com/in/joseluis-sierra-9421841b3/"
                ><i
                  className="fa fa-linkedin-square fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
          
            
        </section>
      </div>
    )
}

export default Contact;