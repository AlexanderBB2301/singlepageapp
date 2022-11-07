import React, { Component } from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import TheCity from "./Components/The City";
import TheWirral from "./Components/The Wirral";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="The City" element={<TheCity />} />
          <Route path="The Wirral" element={<TheWirral />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return <p>Sorry, this page doesn't seem to exist!</p>;
};

const Layout = () => {
  return (
    <>
      <h1>Liverpool Living</h1>
      <nav className="navBar">
        <NavLink className="navLink" to="/Home">
          Home
        </NavLink>
        <NavLink className="navLink" to="/The City">
          The City
        </NavLink>
        <NavLink className="navLink" to="/The Wirral">
          The Wirral
        </NavLink>
        <NavLink className="navLink" to="/Contact">
          Contact
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

// const Home = () => {
//   return (
//     <>
//       <h2>Home</h2>
//     </>
//   );
// };

// const TheCity = () => {
//   return <h2>The City</h2>;
// };

// const TheWirral = () => {
//   return <h2>The Wirral</h2>;
// };

// const Contact = () => {
//   return <h2>Get in Contact</h2>;
// };

export default App;
