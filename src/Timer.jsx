import {useEffect} from "react";


const Timer = ()=>{
    let dateObj=new Date();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes()
    let seconds = dateObj.getSeconds()
    useEffect(()=>{
            document.title=`RudHarutyunyan | ${hour}:${minute}:${seconds}`
    },)
    return(<>
        </>)

}

export default Timer;