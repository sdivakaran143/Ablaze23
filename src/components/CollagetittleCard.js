import React from "react"
import styles from '../App.module.css';
export default function Collegetittlecard(){
  return (
    <div className={styles.Collegetittle}>
      <div>
      <h1>K.S.R College of engineering</h1>
      <p>Department of Computer Science and Engineering</p>
      <p>Proudly Presents</p>
      <h2> Ablaze23</h2>
      </div>
      {/* <img src="/1e35x8rl.png" alt="ksr_collage_image" /> */}
      {/* <img src={require(`../../public/${ablock}`).default} alt="Image" /> */}
    </div>
  )
}