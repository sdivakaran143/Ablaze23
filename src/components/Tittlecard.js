import React from "react"
import styles from '../App.module.css';
import { Link } from "react-router-dom"

function Titlecard() {
  return (
    <div>
      <div className={styles.tittle}>
        <img src="https://i.ibb.co/37W32CS/CSE.png" className={styles.cselogo} alt="cse logo" />
        <img src="\Ablaze_2024.png" alt="Ablaze Logo" className={styles.ablazeImage}/>
        <h6>Event On 27th & 28th September 2024</h6>
        <div className={styles.buttonbox}>
          <Link
            target="_blank"
            className={styles.Link}
            to="https://forms.gle/PamBdT5NziSfN8Vt6"
          >
            Click to Register
          </Link>
          <a className={styles.Link} href="https://i.ibb.co/vhKFSNr/ABLAZE-2-K24.png" download>
            Download Broucher
          </a>
        </div>
        <div className={styles.scrolldown}>
          <a href="#080916">Scroll Down For More Stuffs <br />&#8595;</a>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Titlecard);
