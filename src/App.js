import React, { useEffect } from "react"
import MainWindow from "./components/MainWindow"
import { Routes, Route } from 'react-router-dom';
import PreRegistration from "./components/PreRegistration";
import Eventupdates from "./components/Eventupdates";
import Contact from "./components/Contact";
import axios from "axios";

function App() {
  useEffect(()=>{
    const NewVisitor=()=>{
      axios("https://script.google.com/macros/s/AKfycbweGUH_7rO7Nels4QaZ-btDr43803mcvwP62l16QhubHRrk7oW5vdR-FrI6O-uv9jT9/exec")
      .then(localStorage.setItem("Developer", "developerd.mailme@gmail.com"));
    }
    if(!(localStorage.getItem("Developer"))){
      NewVisitor();
    }
  },[])
  return (
    <div>
    <Routes>
       <Route exact path='/Feedback' element={< PreRegistration />}/>
       <Route exact path='/' element={<MainWindow/>}/>
       {/* <Route exact path='/Eventupdates' element={<Eventupdates/>}/> */}
      <Route exact path='/contact' element={<Contact/>}/>
   </Routes>
 </div>
  );
}

export default App;
