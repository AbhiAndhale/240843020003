import { useState,useEffect } from "react"

export default function UsingEffectComp () {
    //componentDidMount
    const [time,setTime]  = useState(new Date().toTimeString());
    useEffect( ()=>{ 
        console.log("mounted")
        //setting page refresh
        const flag = setInterval(()=>{ setTime(new Date().toTimeString()) }, 1000 );
        return ()=>{ 
            console.log("unmounted")
            clearInterval(flag)
        }
    }, [])
    useEffect( ()=> {
        console.log("updated")
    } ,[time])

    return (
        <div>
            <p> undesrstanding useEffect hook </p>
            <p> Time : {time}</p>
        </div>
    )
}