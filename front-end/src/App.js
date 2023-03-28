import SignUp from "./Pages/SignUp/SignUp";
import { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";
import ThemeApp from "./ThemeApp";
import './Theme1.css'

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/register') {
      document.body.style.background = 'linear-gradient(180deg, rgba(250, 250, 250, 1) 10%, rgba(110, 212, 255, 1) 92%)';
    } else {
      document.body.style.background = '';
    }

    // Clean up the effect by setting the background to its original value
    return () => {
      document.body.style.background = '';
    };
  }, [location.pathname]);
  return (
    <div className="App">

      <Routes>
        <Route path="/" Component={SignIn} />
        <Route path="/register" Component={SignUp} />
        <Route path="/theme" Component={ThemeApp} />
      </Routes>
    </div >
  );
}

export default App;
