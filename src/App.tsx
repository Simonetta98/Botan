import { useEffect } from 'react';
import './css/App.css'
import Home from './pages/Home';
import { initFlowbite } from 'flowbite'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import About from './pages/About';
import Plants from './pages/Plants';
import Contacts from './pages/Contacts';

function App() {

  const location = useLocation();

  useEffect(() => {
    const html = document.querySelector('html') as HTMLHtmlElement;
    html.style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    html.style.scrollBehavior = ''
    initFlowbite();
  }, [location.pathname]); // triggered on route change

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
