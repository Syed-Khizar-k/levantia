import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catalogue from "./pages/Catalogue";
import Printing from "./pages/Printing";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CompanyProfile from "./pages/CompanyProfile";
import Signage from "./pages/Signage";
import AcrylicWoodworks from "./pages/AcrylicWoodworks";
import FilmWrapping from "./pages/FilmWrapping";

function App() {
 return (
  <Router>
   <div className="min-h-screen bg-[white] font-sans text-gray-900 overflow-x-hidden flex flex-col">
    <Header />
    <div className="grow">
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/3m-catalogue" element={<Catalogue />} />
      <Route path="/printing-services" element={<Printing />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/company-profile" element={<CompanyProfile />} />
      <Route path="/signage" element={<Signage />} />
      <Route path="/acrylic-woodworks" element={<AcrylicWoodworks />} />
      <Route path="/3m-film-wrapping" element={<FilmWrapping />} />
     </Routes>
    </div>
    <Footer />
   </div>
  </Router>
 );
}

export default App;
