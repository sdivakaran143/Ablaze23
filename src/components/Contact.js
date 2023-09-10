import React from "react"
import styles from '../App.module.css';
import data from './content.json'
import Mailservice from "./MailService";

export default function Contact(){
  return (
    <div>
        <h2>Contacts</h2>
        <div className={styles.Contact}>
           <div className={styles.persons}>
           {
                data.contatcpersons.map((data,i )=>{
                    return(<div className={styles.contatcpersons} key={i}>
                        <h3>{data.name}</h3>
                        <h4>{data.position}</h4>
                        <h4>{data.Conatct}</h4>
                    </div>
                )})
            }
           </div>
           <div className={styles.contactform}>
                <Mailservice/>
           </div>
        </div>
    </div>
  )
}