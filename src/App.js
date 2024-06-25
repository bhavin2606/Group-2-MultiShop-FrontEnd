import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/lib/animate/animate.min.css"
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css"
import './assets/css/style.css';
import RoutesPath from './Routes/RoutesPath';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <RoutesPath/>
    </>
  );
}

export default App;
