//imports
import Header from "./components/Header"
import SideBar from "./components/SideBar";
import NoteView from "./views/NoteView";
import Home from "./views/Home";
import BinderView from "./views/BinderView"
import LogIn from "./components/LogIn"
import SignUp from "./components/SignUp"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react";

import tempData from './BinderData'

function App() {
  const [userId, setUserId] = useState("")
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedOut, setLoggedOut] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut}/>
        <Routes>
          <Route path="/" element={<Home loggedOut={loggedOut} setLoggedOut={setLoggedOut}/>}/>
          <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn} setUserId={setUserId}/>}/>
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} setUserId={setUserId}/>}/>
          <Route path="/binder" element={<BinderView Binders={tempData.Binders} userId={userId}/>}/>
          <Route path="/note/:id" element={<NoteView/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
