import { useEffect } from 'react';
import './css/App.css'
import Home from './pages/Home';
import { initFlowbite } from 'flowbite'
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

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
      </Routes>
    </>
  )
}

export default App
