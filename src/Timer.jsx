import {useEffect} from "react";


const Timer = ()=>{
    let dateObj=new Date();
    let hour = dateObj.getUTCHours();
    let minute = dateObj.getUTCMinutes()
    let seconds = dateObj.getUTCSeconds()
    useEffect(()=>{
            document.title=`RudHarutyunyan | ${hour}:${minute}:${seconds}`
    },)
    return(<>
        </>)

}

export default Timer;