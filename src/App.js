import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import HomePage from "./Pages/HomePage"
import PortfolioPage from "./Pages/PortfolioPage"
import Contact from "./components/Contact"
import Footer from "./components/Footer"




function App() {
  return (
    <div className="App">
         <Router basename="/react-portfolio">
      <div>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/portfolio" component={PortfolioPage} />
        <Route path="/contact" component={Contact} />
        < Footer/>
      </div>
    </Router>

    </div>
  );
}

export default App;
