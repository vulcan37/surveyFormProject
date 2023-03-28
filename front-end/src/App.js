import SignUp from "./Pages/SignUp/SignUp";
import { Route, Routes } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";
import LogOut from "./Pages/Logout/LogOut";
import CreateSurvey from "./components/CreateSurveyList/CreateSurvey";
import SurveyList from "./components/SurveyList/SurveyList";
import Questions from "./components/QuestionsList/Questions";
import UpdateSurveyList from "./components/Update Survey/UpdateSurveyList";
import ThemeApp from "./ThemeApp";


function App() {
  const token = localStorage.getItem('token')

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/logout" element={token ? <LogOut /> : <SignIn />} />
        <Route path="/create" element={token ? <CreateSurvey /> : <SignIn />} />
        <Route path="/list" element={token ? <SurveyList /> : <SignIn />} />
        <Route path="/questions" element={token ? <Questions /> : <SignIn />} />
        <Route path="/update" element={token ? <UpdateSurveyList /> : <SignIn />} />
        <Route path="/theme" element={token ? <ThemeApp /> : <SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
