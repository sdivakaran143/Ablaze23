import React from "react"
import MainWindow from "./components/MainWindow"
import { Routes, Route } from 'react-router-dom';
import PreRegistration from "./components/PreRegistration";
import Eventupdates from "./components/Eventupdates";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
    <Routes>
       <Route exact path='/PreRegistion' element={< PreRegistration />}/>
       <Route exact path='/' element={<MainWindow/>}/>
       <Route exact path='/Eventupdates' element={<Eventupdates/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
   </Routes>
 </div>
  );
}

export default App;
