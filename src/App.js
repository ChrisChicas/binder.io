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
  const [userID, setUserID] = useState("")

  return (
    <div className="App">
      <Router>
        <Header userID={userID} setUserID={setUserID}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LogIn setUserID={setUserID}/>}/>
          <Route path="/signup" element={<SignUp setUserID={setUserID}/>}/>
          <Route path="/binder" element={<BinderView Binders={tempData.Binders}/>}/>
          <Route path="/note/:id" element={<NoteView/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
