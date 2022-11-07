import React, { Component } from "react";
import Gallery from "./Gallery";
import { Routes, Route, NavLink } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Routes>
          <Route path="Gallery" element={<Gallery />} />
        </Routes>

        <h2>Home </h2>
        <div className="exploringNW">
          <h3 className="homeH3">Adventures in the North West</h3>
          <p className="nwWelcome">
            Documenting a new chapter in the North West. An area I only visited
            for the first time last year and never considered moving to...until
            I did.
          </p>
        </div>
        <div className="gallery">
          <NavLink className="galleryLink" to="/Gallery">
            Gallery
          </NavLink>
        </div>
      </>
    );
  }
}

export default Home;
