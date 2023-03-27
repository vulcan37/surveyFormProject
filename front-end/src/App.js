import SignUp from "./Pages/SignUp/SignUp";
import SignIn from "./Pages/SignIn/SignIn";
import CreateSurvey from "./components/CreateSurveyList/CreateSurvey";
import Questions from "./components/QuestionsList/Questions";
import SurveyList from "./components/SurveyList/SurveyList";
import UpdateSurveyList from "./components/Update Survey/UpdateSurveyList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
        <Route path="/" Component={SignIn} />
          <Route path="/register" Component={SignUp} />
          <Route path="/list" element={<SurveyList />} />
          <Route path="/create" element={<CreateSurvey />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/update" element={<UpdateSurveyList />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

