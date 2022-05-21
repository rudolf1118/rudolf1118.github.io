import react from "react";
import classes from "./Links.module.css";

const Citat = ()=>{
    return (
        <div className={classes.citat}>
        "You have to know a person inside and out to know if they're great or not. There are a lot of great people out there, but no one knows how great they are."<br/><br/>
            <span className={classes.citatsmall}>William Saroyan</span>
    </div>)
}

export default Citat