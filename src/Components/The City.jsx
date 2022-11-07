import React, { Component } from "react";

class TheCity extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="list"></div>
        <div className="containerCity">
          <div className="header">
            <h2 className="welcomeH1">Welcome to the city of Liverpool</h2>
          </div>
          <div className="shadowBox"></div>
          <div className="lightTrail">
            <h3 className="welcomeH3">What's been going on?</h3>
            <p className="welcomeP">
              Enourmous, towering, shimmering balls with no explanantion, at
              least not one that I found. Dandelions that resemble children's
              Bonfire Night illuminated toys. Hoops that dance and change color,
              creating loops and complicated venn diagrams in time with the
              music. All set against the backdrop of the a black night sky,
              scattered with history, modernity and the distant, red lights of
              cranes. Have you guessed where I was yet? Liverpool Light Trail,
              2022.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default TheCity;
