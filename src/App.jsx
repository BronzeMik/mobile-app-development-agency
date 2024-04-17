import './App.css'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Nav from './components/nav/nav';
import Footer from './components/footer/Footer';
import FeaturesPage from './pages/FeaturesPage';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <>
    <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
