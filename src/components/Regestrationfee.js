import React from "react"
import styles from '../App.module.css';

export default function Regestrationfee(){
  return (
    <div className={styles.regestrationfeesdiv}>
        <h2>Registration Fees</h2>
        <div className={styles.notice}>
            <h3>Early Bird registration is highly appreciated for the smooth conduct of programmes</h3>
        </div>
        <div className={styles.regestrationfee}>
            <div className={styles.feecard}>
                <h3>Events</h3>
                <h1>200 RS</h1>
            </div>
            <div className={styles.feecard}>
                <h3>Events + Workshop</h3>
                <h1>250 RS</h1>
            </div>
        </div>
        <div className={styles.notice}>
            <h3>Food & Participation certificates will be provided for participants</h3>
        </div>
    </div>
  )
}
