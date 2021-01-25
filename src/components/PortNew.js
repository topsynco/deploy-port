import React from "react";
import {Card,CardImg, CardTitle, CardText,CardBody, CardHeader
} from 'reactstrap';
import {Link} from 'react-router-dom';
import Wrapper from './Wrapper';


function Projects(props) {
  return (
    <div className="container">
      <Wrapper>
      <div className="card portfolio">
        <div className="img-container">
          <Card>
            <CardHeader className="text-light bg-primary" block>{props.name}</CardHeader>
            <CardImg top width="100%" src={props.picture} alt="website image"/>
              <CardBody className="card body">
  
                
  
                <CardText 
                  style={{fontSize:"18px"}}> 
                  {props.description} 
                </CardText>
  
                
  
                <CardText> 
                  {props.tech }
                </CardText>
  
                <div className="portfolio-link">
                  <a
                    className="external-links"
                    id="github"
                    style={{fontSize: "18px", fontWeight: "bold", color:"#287bff",textAlign:"center"}}
                    tag={Link} href={`${props.github}`}
                    rel="noopener noreferrer" 
                    target="_blank"
                  > 
                    
                  </a>
                  |
                  <a
                    className="external-links"
                    id="website"
                    style={{fontSize: "18px", fontWeight: "bold", color:"#287bff", textAlign:"center"}}
                    tag={Link} 
                    href={`${props.site}`}
                    rel="noopener noreferrer" 
                    target="_blank"
                    > 
                     DEPLOYED SITE
                  </a>
                </div>
  
              </CardBody>
          </Card>
        </div>
      </div> 
  
      </Wrapper>


    </div>
    
  );
};
  
  export default Projects