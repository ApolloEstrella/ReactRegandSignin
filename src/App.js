import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import { Counter } from "./features/counter/Counter";
import { useSelector, useDispatch } from 'react-redux'
//import { decrement, increment } from '../features/counter/counterSlice';


function App() {
  const username = useSelector((state) => state.counter.username)
  return (
    <>
      <Counter />
      <BrowserRouter>
        <div class="container-fluid bg-primary">

          <nav class="navbar navbar-dark navbar-expand-sm">
            <span class="navbar-brand">ABC CORP.</span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuItems" aria-controls="menuItems" aria-expanded="false" aria-label="Toggle Navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menuItems">
              <ul class="navbar-nav">
                <li class="navbar-brand">
                  <NavLink to="/home" style={{ color: "white" }}>Home</NavLink>
                </li>
                <li class="navbar-brand">
                  <NavLink to="/blogs" class="navbar-brand" style={{ color: "white" }}>Registration</NavLink>
                </li>
                <li class="navbar-brand">
                  <NavLink to="/contact" class="navbar-brand" style={{ color: "white" }}>Signin</NavLink>
                </li>
                <li class="navbar-brand" style={{ marginLeft: 1100 }}>
                   User:{" " + username}
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;