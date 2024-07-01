import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/lib/animate/animate.min.css"
import "./assets/lib/owlcarousel/assets/owl.carousel.min.css"
import './assets/css/style.css';
import RoutesPath from './Routes/RoutesPath';
import { useEffect, useMemo } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
//   useEffect(() => {
//     AOS.init();
//   }, [])
//   useEffect(() => {
//     const addScript = document.createElement('script');
//     addScript.setAttribute(
//         'src',
//         '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
//     );
//     document.body.appendChild(addScript);
//     // debugger
//     window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//             {
//                 pageLanguage: 'en',
//                 autoDisplay: true,
//             },
//             'google_translate_element'
//         );
//     };
// }, []);
  return (
    <>
      <ToastContainer />
      <RoutesPath />
    </>
  );
}

export default App;
