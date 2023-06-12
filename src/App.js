import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Features from "./pages/Features";
import ChooseUs from "./pages/ChooseUs";
import Testimonial from "./pages/Testimonial";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Homepage />
      <About />
      <Features />
      <ChooseUs />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
