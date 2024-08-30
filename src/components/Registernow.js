import React from "react"
import styles from '../App.module.css';
import {Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Registernow(){
  var style={
    margin:'10px',
  }
  return (
    <div className={styles.registerbar}>
      {/* <Button variant="contained" color="error" style={style}><Link to="/Eventupdates">Event Updates</Link></Button> */}
      {/* <Button variant="contained" color="error" style={style}><Link to="/Feedback">Feedbacks</Link></Button> */}
      <Button variant="contained" color="error"><Link target="_blank" to="https://forms.gle/PamBdT5NziSfN8Vt6">Register Now</Link></Button>
    </div>
  )
}
