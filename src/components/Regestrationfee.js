import React from "react";
import styles from "../App.module.css";

export default function Regestrationfee() {
  return (
    <div className={styles.regestrationfeesdiv}>
      <h2>Registration Fees</h2>
      <div className={styles.notice}>
        <h3>
          Early Bird registration is highly appreciated for the smooth conduct
          of programmes
        </h3>
        {/* <h3>On-Spot Registration Closed</h3> */}
      </div>
      <div className={styles.regestrationfee}>
        <div className={styles.feecard}>
          <h3>Paper Bestroval</h3>
          <h1>₹250/- per head</h1>
        </div>
        <div className={styles.feecard}>
          <h3>Other Events</h3>
          <h1>₹50/- per head</h1>
        </div>
        <div className={styles.feecard}>
          <h3>Workshop</h3>
          <h1>₹300/-per head</h1>
        </div>
      </div>
      <div className={styles.notice}>
        <h3>
          Food & Participation certificates will be provided for all participants
        </h3>
      </div>
    </div>
  );
}
