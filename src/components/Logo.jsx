import react from 'react'
import classes from "./Links.module.css";
import {NavLink} from "react-router-dom";


const Logo = ()=>{
    return (
        <div className={classes.logo}>
            <NavLink to={"/home"}>
                <img src={'https://static.wixstatic.com/media/60282d_8233bd2f096642f99d70bfd7924ca149~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/8665777_r_icon.png'} className={classes.img}/>
            </NavLink>

        </div>
    )
}
export default Logo;