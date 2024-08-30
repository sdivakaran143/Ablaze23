    import React, { useRef,useState } from 'react';
    import  emailjs  from '@emailjs/browser';
    import styles from '../App.module.css';
    import Button from '@mui/material/Button';
    import TextField from '@mui/material/TextField';
    import Box from '@mui/material/Box';
    import CircularProgress from '@mui/material/CircularProgress';

    export default function Mailservice() {
        const[response,useresponse]= useState("Click to Send Message");
        const[loading,setloading]= useState(false);
        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
            setloading(true);
            emailjs.sendForm('service_pf7r9fa', 'template_op8ihmt', form.current,"YxYsX9aqHstR4gsk_")
                .then((result) => {
                    setloading(false);
                    useresponse("Message Sucessfully Send...")
                    // console.log(result.text);
                },(error) => {
                    // console.log(error.text);
                });
        };
        return (
            <div className={styles.mailservice}>
            <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { m: 2.5, width: '95%' },
            }}
            validate='true'
            ref={form} onSubmit={sendEmail} className={styles.mailserviceform}
            >
            <div className={(loading)?styles.progressbar:""}>
                {loading?(<CircularProgress/>):""}
            </div>
                <h2>message us!</h2>
                <TextField id="outlined-basic" label="Name" variant="outlined"  type="text" className={styles.halfinput} name="username" placeholder="Name" required/>
                <TextField id="outlined-basic" label="Email ID" variant="outlined"  type="email" className={styles.fullinput} placeholder="Email id" name="useremail" required/>
                <TextField id="outlined-basic" label="Contact NO" variant="outlined"  type="number" className={styles.fullinput} name="userphone" placeholder="Phone Number without +91" required/>
                <TextField id="outlined-basic" label="Message" variant="outlined" type='text' rows="4" cols="50" className={[styles.fullinput, styles.largebox].join(' ')} name="usermessage" placeholder="Write a message" required/>
                <Button type="submit" className={styles.send_button} value="Send" variant="contained">Send Message</Button>
                <span className={styles.responsemessage}>{response}</span>
            </Box>
            </div>
        );
    }