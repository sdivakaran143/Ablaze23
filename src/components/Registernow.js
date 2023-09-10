import React from "react"
import styles from '../App.module.css';
import {Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Registernow(){
  return (
    <div className={styles.registerbar}>
      {/* <Button variant="contained" color="error" style={{marginRight:'10px'}}><a href="#089765">Schedule</a></Button> */}
      <Button variant="contained" color="error"><Link target="_blank" to="https://forms.gle/44Wost3hpBsbo3oo8">Register Now</Link></Button>
    </div>
  )
}