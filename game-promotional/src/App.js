import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/ContactHelp';
import About from './components/About-main/AboutMain';
import Gallery from './components/Gallery/GalleryMain';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path={'/'} element={<Navigate to={'/off_World'} />} />
    <Route path={'/off_World'} element={<Home />} />
    <Route to={'#Contacts'} element={<Contact />} />
    <Route to={'#Abouts'} element={<About />} />
    <Route to={'#Gallerys'} element={<Gallery />} />
    <Route to={'#Footer'} element={<Footer />} /> 
    </Routes>
    </BrowserRouter>
  );
  }

export default App;
