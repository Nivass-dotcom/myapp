import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Earbuds from "./pages/earbuds";
import SingleItem from "./pages/singleitem";
import Storage from "./pages/storage";
import Counter from "./pages/counter";
function App() {
  return (
    <div className="container-fluid">
      <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/earbuds" element={<Earbuds />} />
      <Route path="/earbuds/:id" element={<SingleItem />} />
      <Route path="/storage" element={<Storage />} />
      <Route path="/counter" element={<Counter />} />
      </Routes>
      </Router>
      </div>
  );
}
export default App;


