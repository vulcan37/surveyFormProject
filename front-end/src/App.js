import SignUp from "./Pages/SignUp/SignUp";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from "./Pages/SignIn/SignIn";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={SignIn} />
          <Route path="/register" Component={SignUp} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
