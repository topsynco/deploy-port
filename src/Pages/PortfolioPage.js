import React, { Component } from 'react';
import Portfolio from '../components/Portfolio'
import projects from "../projects.json";
import Wrapper from '../components/Wrapper';



class PortfolioPage extends Component {

    state = {
        projects
    };

render () {
return (
    
    <div>
    <div id="projects" className="page-header">projects.</div>
    <Wrapper>
        {projects.map(project => (
            <Portfolio
                key={project.id}
                id={project.id}
                picture={project.image}
                name={project.name}
                description={project.description}
                tech={project.tech}
                github={project.github}
                site={project.site}
            />
        ))}
    </Wrapper>
    </div>
  );
}
}

export default PortfolioPage