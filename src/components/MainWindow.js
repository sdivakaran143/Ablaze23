import React from "react"
import Titlecard from "./Tittlecard"
import Registernow from "./Registernow"
import Events from "./Events"
import Footer from "./Footer"
import Contact from "./Contact"
import Schedule from "./Schedule"
import Collegetittlecard from "./CollagetittleCard"
import Regestrationfee from "./Regestrationfee"

export default function MainWindow() {
  return (
    <div>
      <Titlecard/>
      <span id="080916"/>
      <Collegetittlecard/>
      <Regestrationfee/>
      <Registernow/>
      <Events/>
      <span id="089765"></span>
      <h2>Schedule</h2>
      <Schedule/>
      <Contact/>
      <Footer/>
    </div>
  )
}