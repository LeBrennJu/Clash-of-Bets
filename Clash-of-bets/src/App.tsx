import { useState } from 'react'
// all import file meta data
import { Route, Routes } from "react-router-dom";
//CSS
import "./assets/css/reset.css"
import "./App.scss";
//Components
import Home from "./pages/Home/Home";
import Array from './pages/Array/Array';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tableau" element={<Array />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
