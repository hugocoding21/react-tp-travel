import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/home/Home";
import { Contact } from "./pages/contact/Contact.jsx";
import { Destination } from "./pages/destinations/Destination.jsx";
import { ParisPage } from "./pages/paris/Paris.jsx";
import { Terms } from "./pages/terms_and_conditions/Terms.jsx";
import { Agency } from "./pages/agency/Agency.jsx";
function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/paris' element={<ParisPage />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/about' element={<Agency />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
