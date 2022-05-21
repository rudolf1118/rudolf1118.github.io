import react from 'react'
import classes from "./Links.module.css";

const Text = ()=>{
    return (<div>
        <div className={classes.text3}>
          <div className={classes.texter1}>  ABOUT </div>

            <div className={classes.texter2}>  All the Details </div>

         <div className={classes.texter3 } >     Since the beginning of my career, I’ve focused on channeling my talent and creativity into meaningful and powerful<br/>
             results. I take pride in the work I do, as well as the strong relationships I’ve built with clients and colleagues. I firmly<br/>
             believe in working hard, working together and having fun along the way. If you’re interested in learning more about<br/>
             me or my work, simply reach out.</div>

        </div>
        <div className={classes.numberr}>
            +37494160595 <br/>
            <span className={classes.numberr1}>
            rud.haroutyunyan@gmail.com
            </span>
        </div>
        <div className={classes.product1}>
            ©2022 by Rudolf Harutyunyan.
        </div>

    </div>)
}
export default Text