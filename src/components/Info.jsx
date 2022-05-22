import react from 'react'
import classes from "./Links.module.css";
import back from "./back.jpg"

const Info=()=>{
    return (
        <>
            <div className={classes.photo}>
                <img
                    className={classes.photo} src={back}/>
            </div>
            <div className={classes.text}>
                RUDOLF HARUTYUNYAN <br/>WELCOMES YOU <br/>
                <span className={classes.text1}>Front-End Developer</span>
            </div>
        </>
    )
}

export default Info