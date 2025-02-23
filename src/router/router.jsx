import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"; 
import Register from "../Pages/Register/User_Register"; 
import Login from "../Pages/auth/Login";
import UserProfile from "../Pages/Profile_user";
import OrgProfile from "../Pages/Profile_org";
import Error from "../Pages/404"

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserRegister" element={<Register />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/UserProfile" element={<UserProfile/>}/>
        <Route path="/OrgProfile" element={<OrgProfile/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
