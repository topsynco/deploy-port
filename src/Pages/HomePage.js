import React, {Component} from "react";
import '../App.css';
import AboutMe from '../components/AboutMe';
import Header from '../components/Header';
import Wrapper from '../components/Wrapper';

class App extends Component {
 

  render() {
  return (
  <main>
    <div className="App"> 
        <Wrapper>
        <Header/>
        <AboutMe/>
        </Wrapper>
       </div>
  </main>
  );
}
}
export default App;

