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
                return fetch(redirectedUrl); // Make a new fetch request to the redirected URL
                }
            }
            return seteventupdates(response.data);
        })   
    },[]);
    return (
    <div className={styles.eventsupdate}>
        <h1>Notification Center</h1>
        { console.log(eventupdates) }
        {
            eventupdates.map((data,i)=>{
                return(
                    <div key={i} className={styles.EventUpdateCard}>
                        <h2>{data.Name}</h2>
                        <p>{data.Description}</p>
                        <p>Time : {data.EventTime}</p>
                        <p>Venue: {data.Venue}</p>
                        <span>{data.PostingTime}</span>
                        <span>posted by {data.OrganizerName }</span>
                    </div>
                )})
        }
    </div>
  )
}
export default React.memo(Eventupdates);