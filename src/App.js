import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import AuthorizedApp from "./components/AuthorizedApp";
import UnauthorizedApp from "./components/UnauthorizedApp";
import UserForm from "./components/UserForm";
import Users from "./components/Users";
 /* 
  /login UnauthorizedApp
     — login form
  / AuthorizedApp contents
    - Sidebar: several links
    - MainContent:
    AuthorizedApp routes:
      /forma — a form to add user data
      /koristnici - saved users from the form
 */
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorizedApp/>}>
          <Route path="korisnici" element={<Users/>} />
          <Route path="forma" element={<UserForm/>} />
        </Route>
        <Route path="login" element={<UnauthorizedApp/>}/>
      </Routes>
    </div>
  );
}

export default App;
