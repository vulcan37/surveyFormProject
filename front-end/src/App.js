import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";
import LogOut from "./Pages/Logout/LogOut";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/register" Component={SignUp} />
          <Route path="/logout" Component={LogOut} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
