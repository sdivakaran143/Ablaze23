import React from "react"
import styles from '../App.module.css';
import {Link } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function PreRegistration(){
  return (
    <div className={styles.Feedback}>
      <h1>Event's Feedback</h1>
      <h2>Technical Events</h2>
        <div className={styles.Feedbackbuttons}>
              < Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">PaperBestoval</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Ideathon</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Code Olympia</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Koda Chrome</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Think Genuis</Link></Button>
        </div>
      <h2>Non-Technical Events</h2>
        <div className={styles.Feedbackbuttons}>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Ink and Imagination</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">FlimFights</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Picture Perfect</Link></Button>
              <Button variant="contained" color="primary"><Link target="_blank" to="https://forms.gle/AV2cJAdwFyhj8jFYA">Marketing Master</Link></Button>
        </div>
    </div>
  )
}