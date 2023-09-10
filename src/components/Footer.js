import React from "react"
import styles from '../App.module.css';
// import { Link } from "react-router-dom";
import {BsInstagram} from "react-icons/bs";
import {AiFillMail} from "react-icons/ai";

export default function Footer(){
  return (
    <div className={styles.Footer}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.3463608691513!2d77.82480971466879!3d11.356050691929795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96403619f2d5b%3A0x6eeb2e0b7fe9be97!2sKSRCE%20CSE%20Department!5e1!3m2!1sen!2sin!4v1678517364991!5m2!1sen!2sin"  loading="lazy" title="Google Map Pin To reach KSR College Of Engineering CSE Department"></iframe>
        <div className={styles.content}>
          <div className={styles.textcontent}>
            <p>Follow us!</p>
            #ksrce #ablaze23 #Ksrcecse
          </div>
        <div className={styles.socialmedias}>
            <a className={styles.link} title="mail" target='_blank' href="mailto:ksrce.ablaze@gmail.com"><AiFillMail/></a>
            <a className={styles.link} title="Instagram" target='_blank' href="https://www.instagram.com/ksrce_cse/"><BsInstagram/></a>
        </div>
        <span>Developed By Team Ablaze23</span>
        </div>
    </div>
  )
}