import React from "react"
import styles from '../App.module.css';
import Registernow from "./Registernow";
export default function PreRegistration(){
  return (
    <div className={styles.preregisterwindow}>
            <h1>Pre-Registration is Open Now</h1>
        <div className="image">
        <img src="/ABLAZE 2K23.png" alt="ABlaze event poster" srcset="" />
        </div>
        <Registernow/>
    </div>
  )
}