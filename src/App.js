import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/lib/animate/animate.min.css"
import './assets/css/style.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import RoutesPath from './Routes/RoutesPath';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-loading-skeleton/dist/skeleton.css";
// import { useEffect } from 'react';
// import { useGetUserDataQuery } from './Redux/Slices/AuthApis';

function App() {
//  const { refetch} = useGetUserDataQuery()

//   useEffect(() => {
//     const getProfile = () => {
//       if (localStorage.getItem("token")) {
//         // call profile api
//         refetch()
//       }
//     }
//     getProfile();
//   },[])

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RoutesPath />
    </>
  );
}

export default App;
