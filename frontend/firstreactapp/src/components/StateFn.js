import { useState } from "react"

export default function StateFn() {
    const [count, setCount] = useState(0);
    const [nm,setNm] = useState("nnn")
    //let str = ""
    return (
        <div>
            <p> Count : {count} </p>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        </div>
    )
}