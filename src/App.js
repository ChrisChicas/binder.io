//imports
import Header from "./components/Header"
import SideBar from "./components/SideBar";
import NoteView from "./views/NoteView";
import Home from "./views/Home";
import BinderView from "./views/BinderView"
import LogIn from "./views/LogIn"
import SignUp from "./views/SignUp"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import tempData from './BinderData'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/binder" element={<BinderView Binders={tempData.Binders}/>}/>
          <Route path="/note/:id" element={<NoteView/>}/>
        </Routes>
      </Router>
      

    </div>
  );
}

export default App;
