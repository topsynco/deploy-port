import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap"

function NavBar () {
    return (
        <Navbar className="navbar fixed-top navbar-dark bg-primary text-white">
          <a className="navbar-brand" href="https://www.instagram.com/topsynco/"
            >Joseluis Sierra</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <section className="navbar-nav">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>

            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>



            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
             Contact
            </Link>



            </section>
          </section>
        </Navbar>
    )
}

export default NavBar;