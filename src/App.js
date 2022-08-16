import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import "./App.css";
import Logout from "./components/Logout/Logout";
import Login from "./pages/Login/Login";
import { auth, onAuthStateChanged } from "./config/firebase";
import Home from "./pages/Home/Home";

const App = () => {
  let [authState, setAuthState] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setAuthState(user);
      } else {
        console.log("user not found");
      }
    });
  }, []);

  return (
    <div className="container">
      <Router>
        <Logout />
        <Routes>
          <Route path="/" element={<Home data={authState} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
