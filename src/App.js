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
  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedOut, setLoggedOut] = useState(false)

  return (
    <div className="App">
      <Router>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} setLoggedOut={setLoggedOut}/>
        <Routes>
          <Route path="/" element={<Home loggedOut={loggedOut} setLoggedOut={setLoggedOut}/>}/>
          <Route path="/login" element={<LogIn setLoggedIn={setLoggedIn}/>}/>
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn}/>}/>
          <Route path="/binder" element={<BinderView Binders={tempData.Binders}/>}/>
          <Route path="/note/:id" element={<NoteView/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
