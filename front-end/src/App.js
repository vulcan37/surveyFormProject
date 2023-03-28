import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";
import LogOut from "./Pages/Logout/LogOut";
import CreateSurvey from "./components/CreateSurveyList/CreateSurvey";
import SurveyList from "./components/SurveyList/SurveyList";
import Questions from "./components/QuestionsList/Questions";
import UpdateSurveyList from "./components/Update Survey/UpdateSurveyList";
import ThemeApp from "./ThemeApp";


function App() {
  // const token = localStorage.getItem()
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
