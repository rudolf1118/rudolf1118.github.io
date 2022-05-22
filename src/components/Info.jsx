import react from 'react'
import classes from "./Links.module.css";

const Info=()=>{
    return (
        <>
            <div className={classes.photo}>
                <img
                    className={classes.photo} src={'https://static.wixstatic.com/media/c7e00e0037b14973aa4cca10d675a3ec.jpg/v1/fill/w_1902,h_880,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/c7e00e0037b14973aa4cca10d675a3ec.jpg'}/>
            </div>
            <div className={classes.text}>
                RUDOLF HARUTYUNYAN <br/>WELCOMES YOU <br/>
                <span className={classes.text1}>Front-End Developer</span>
            </div>
        </>
    )
}

export default Info