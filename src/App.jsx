import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SinhvienList from "./components/SinhvienList";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Container style={{ marginBottom: "80px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sinhvien" element={<SinhvienList />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}
export default App;
