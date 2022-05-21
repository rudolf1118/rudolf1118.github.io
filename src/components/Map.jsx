import react from "react";
import classes from "./Links.module.css";

const Map = ()=>{
    return (<div>
        <iframe className={classes.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.709820385088!2d44.459109652703816!3d40.205401428247285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a97d71bdc53e5%3A0x6c829adce3f2a7d1!2sBashinjaghyan%202%20bstr.%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1652992437527!5m2!1sen!2s"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className={classes.number}>
                +37494160595 <br/>
               <span className={classes.number1}>
            rud.haroutyunyan@gmail.com <br/>
            </span>
        </div>
        <div className={classes.product}>
            ©2022 by Rudolf Harutyunyan.
        </div>
    </div>)
}

export default Map