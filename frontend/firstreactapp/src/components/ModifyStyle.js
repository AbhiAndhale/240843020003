import { useState } from "react"

export default function ModifyStyle () {
    const [cl, setCl] = useState("red")
    return (
        <div>
        <p style={{color: cl}}> This para is changing color dynamically </p>
        <button onClick={()=>{setCl("blue")}}>Change Color </button>
        <input type="text" name="mycolor" value={cl} 
        onChange={(e)=>{setCl(e.target.value)}}/>
        <input type="color" name="mycolor" value={cl} 
        onChange={(e)=>{setCl(e.target.value)}}/>
        </div>
    )

}