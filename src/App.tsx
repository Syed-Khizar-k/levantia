import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";

function App() {
 return (
  <Router>
   <div className="min-h-screen bg-[white] font-sans text-gray-900 overflow-x-hidden flex flex-col">
    <Header />
    <div className="grow">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/3m-catalogue" element={<Catalogue />} />
     </Routes>
    </div>
    <Footer />
   </div>
  </Router>
 );
}

export default App;
