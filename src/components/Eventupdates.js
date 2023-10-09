import React,{useState,useEffect} from "react"
import styles from '../App.module.css';
import axios from 'axios';

function Eventupdates(){
    const[eventupdates,seteventupdates]=useState([]);
    useEffect(()=>{
            axios("https://script.google.com/macros/s/AKfycbwb3oRZIYbKsQP8aFB-iBHx3GauPQLPkFXqP9u6F70yJPY1AnvFGfPRARi0souKyH5LBg/exec").then(response=>{
            if(response.status===302){
                var redirectedUrl = response.headers.get("Location");
                if (redirectedUrl) {
                return fetch(redirectedUrl); 
                }
            }
            return seteventupdates(response.data);
        })   
    },[]);
    return (
    <div className={styles.eventsupdate}>
        <h2>Notification Center</h2>
        {
            eventupdates.map((data,i)=>{
                return(
                    <div key={i} className={styles.EventUpdateCard}>
                        <h1>{data.Name}</h1>
                        <p className={styles.Description}>{data.Description}</p>
                        <p><span>Time&nbsp;&nbsp;&nbsp; : </span>{data.EventTime}</p>
                        <p><span>Venue&nbsp; : </span>{data.Venue}</p>
                        <span className={styles.posttime}>Posted By {data.OrganizerName } | {data.PostingTime}</span>
                    </div>
                )})
        }
    </div>
  )
}
export default React.memo(Eventupdates);