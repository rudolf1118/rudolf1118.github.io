import react from "react";
import {IoTerminal} from "react-icons/io5";
import cv from './cv.png'
import classes from "./Links.module.css";
import {NavLink} from "react-router-dom";
let dateObj=new Date();
let month=dateObj.getUTCMonth() + 1
let year=dateObj.getUTCFullYear();
let day=dateObj.getDate()
console.log(month, year)

let monther=4;
let yearer=2022;
let dayer=1;

let deltaMont=month - monther;
let deltaYeat=year - yearer
let deltaDay=day - dayer;
if (deltaYeat === 0) {
    deltaYeat=false;
}


const CVs=()=>{
    return (
        <div className={classes.cvs}>
            <div className={classes.cv1}>My CV</div>
            <div className={classes.cv1small}>Achievements and Experience</div>
            <img src={cv} className={classes.port}/>
            <div>
                <a href={"https://www.linkedin.com/company/teams-am/"} target={"blank_"}>
                <img className={classes.company}
                     src={'https://media-exp1.licdn.com/dms/image/C4D0BAQFYNTW8txC5GA/company-logo_200_200/0/1614712703866?e=1661385600&v=beta&t=f_1AaEwkoLRVmw0fcx8H3bKP0_TJzSTbCf8ovvVXWJ4'}/>
                </a>
                <div className={classes.cvAttr}> Teams.am</div>
                <div className={classes.hastiq}>Front-End Developer</div>
                <div className={classes.time}><span className={classes.timer}> 01/04/2022-Present </span><br/>
                    {deltaYeat ? "Year," : ''} {deltaMont} month, {deltaDay} days
                </div>
                <div className={classes.cvAbout}> Chrome extension start up, that allows small commerce to grow by
                    replacing non-privileged advertising with content chosen by the community.
                </div>
            </div>
        </div>)
}

export default CVs