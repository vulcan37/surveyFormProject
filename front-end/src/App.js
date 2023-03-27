import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";
import ThemeApp from "./ThemeApp";
import './Theme1.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/register" Component={SignUp} />
          <Route path="/theme" Component={ThemeApp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
