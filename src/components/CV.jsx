import react from 'react'
import Logo from "./Logo";
import Links from "./Links";
import Text from "./Text";
import CVs from "./CVs";
import classes from "./Links.module.css";

const CV = ()=>{
    return (
        <div className={classes.cv}>
        <Logo/>
        <Links/>
            <CVs/>
    </div>)
}

export default CV