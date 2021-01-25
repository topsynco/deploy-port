import React from "react";
import Joseluis from "../Images/T014BHGTMCP-U017Q1ZEXMX-35dc78617fe3-512.png"

function AboutMe () {
    return (
        <div className="container-fluid">
            <div className="about-me">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 bg-light text-dark">
                            <h1>About Me</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 bg-light text-dark">
                        <img id="bio-image" 
                        src={Joseluis} 
                        className="img-fluid max-width: 100% height: auto" 
                        alt="Joseluis Sierra Headshot"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 bg-light text-dark">
                    <p className="pgraph">
                    Hello user! Welcome to my Github page where you’ll find a little bit of information about myself. First off my name is Joseluis Sierra. I am 20 years old coming straight out of Bridgeport, CT. My hobbies include taking photos and traveling. I have always been fond of software engineering but it wasn’t until hearing about the UConn coding bootcamp when I gained interest and decided to give it a shot. I was a student at an information technology high school and so I have prior knowledge of the material. Furthermore, I attended St.Johns University in Queens (NYC) for a year before I dropped out in order to really find my footing on what I want to do with my life career wise. In my time away from school, I can say I matured greatly and was able to discipline myself to really obtain the skills necessary to become an affluent member of society.
                    </p>
                    <div className="card skills">
                  <div className="card-body text-center">
                    <h3  id="skill-head" className="card-title">Technical Skills</h3>
                    <ul id="skill-list" className="card-text">
                      <li className="display"><span className="bold">Programming Languages:</span>HTML, CSS, JavaScript</li>
                      <li className="display"><span className="bold">Libraries/Frameworks:</span>JQuery, Express.js, BootStrap, React.js, Vue.js, MERN</li>
                      <li className="display"><span className="bold">Database Management:</span>MySql, Sequelize, MongoDB, Mongoose</li>
                      <li className="display"><span className="bold">Other Technologies:</span>Node.js, Passport.js, Express-Handlebars, git, Heroku, AJAX, REST API's, IndexedDB</li>
                    </ul>
                    
                  </div>
                </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;