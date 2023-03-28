import SignUp from "./Pages/SignUp/SignUp";
import { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";
import LogOut from "./Pages/Logout/LogOut";
import CreateSurvey from "./components/CreateSurveyList/CreateSurvey";
import SurveyList from "./components/SurveyList/SurveyList";
import Questions from "./components/QuestionsList/Questions";
import UpdateSurveyList from "./components/Update Survey/UpdateSurveyList";
import ThemeApp from "./ThemeApp";


function App() {
  // const token = localStorage.getItem()
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
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/create" element={<CreateSurvey />} />
        <Route path="/list" element={<SurveyList />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/update" element={<UpdateSurveyList />} />
        <Route path="/theme" element={<ThemeApp />} />
     </Routes>
    </div>
  );
}

export default App;
