import  react from "react";
import classes from "./Links.module.css";
import {NavLink} from "react-router-dom";

const Links = ()=>{
return (
    <div className={classes.links}>
        <div className={classes.links2}>
            <a href={"https://www.linkedin.com/in/rudharoutyunyan/"} target={'_blank'}>  <img className={classes.img1} src={'https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LinkedIn.png'}/></a>
            <NavLink to={"/home"} className={classes.links1}>Home</NavLink>
            <NavLink to={"/CV"}className={classes.links1}>CV </NavLink>
            <NavLink to={"/about"}className={classes.links1}> About</NavLink>
    </div>
    </div>
)
}
export default Links