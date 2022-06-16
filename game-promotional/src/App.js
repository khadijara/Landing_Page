import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path={'/'} element={<Navigate to={'/off_World'} />} />
    <Route path={'/off_World'} element={<Home />} />
    {/* <Route path={'/login'} element={<Login />} />
    <Route path={'/Signup'} element={<Signup />} />
    <Route path={'/Contact'} element={<Contact />} />
    <Route path={'/About'} element={<About />} />
    <Route path={'/Team'} element={<Team />} />*/
    <Route path={'/Footer'} element={<Footer />} /> }
    </Routes>
    </BrowserRouter>
  );
}

export default App;
