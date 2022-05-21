import react from 'react'
import Logo from "./Logo";
import Links from "./Links";
import Info from "./Info";
import Citat from "./Citat";
import Map from "./Map";
import classes from "./Links.module.css";

const About=()=>{
    return (<div>
            <Logo/>
        <Links/>
        <Info/>
        <Citat/>
        <Map/>
    </div>)
}
export default About