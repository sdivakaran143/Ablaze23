import styles from '../App.module.css';
import React,{useEffect} from 'react';

export default function LoadingWindow(){
    useEffect(()=>{        
        console.log("Welcome,Developer👋!..\nThe console's door is open, and innovation awaits.");
    },[])
    return(
        <div  className={styles.LoadingWindow}>
                <img src="https://i.ibb.co/37W32CS/CSE.png" alt='cselogo'/>
                {/* <img src="/CSE.png" alt='cselogo'/> */}
                <h1>Welcome to Ablaze23</h1>
        </div>
    );
}   