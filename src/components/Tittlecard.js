import React from "react"
import styles from '../App.module.css';
import {Link} from "react-router-dom"

function Titlecard(){
  return (
    <div>
      <div className={styles.tittle}>
        <img src="https://i.ibb.co/37W32CS/CSE.png" className={styles.cselogo} alt="cse logo"/>
        {/* <img src="/CSE.png" className={styles.cselogo} alt="cse logo"/> */}
        {/* <img src="/ABLAZE2023.png" alt="ablaze23 logo"/> */}
        <img src="https://i.ibb.co/ZdHRwtD/ABLAZE2023.png" alt="Ablaze Logo" />
        <h6>Event On 13th October 2023</h6>
        <div className={styles.buttonbox}>
          <Link target="_blank" className={styles.Link} to="https://forms.gle/44Wost3hpBsbo3oo8">Click to Register</Link>
          <a className={styles.Link} href="/ABLAZE 2K23.png" download >Download Broucher</a>
        </div>
        <div className={styles.scrolldown}>
          <a href="#080916">Scroll Down For More Stuffs <br/>&#8595;</a> 
        </div>
      </div>
    </div>
  )
}
export default React.memo(Titlecard);
