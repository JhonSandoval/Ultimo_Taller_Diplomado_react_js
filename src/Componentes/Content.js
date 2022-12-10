import React from "react";
import Toggle from "./toggle";
//import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Reference from "./Reference";

class contenido extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Toggle />
        {/** <Header /> */}
        <Hero />
        <About />
        <Skills />
        <Resume />
        <Portfolio />
        <Reference />
      </div>
    );
  }
}

export default contenido;
