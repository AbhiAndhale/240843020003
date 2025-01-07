import { useState } from "react"

export default function ArrayAddition () {
   
    const [names, setNames] = useState(["bakul","amit","milind"])
    const [ele, setEle] = useState("")
    return (
        <div>
            <ul>
                {
                    names.map(v=>{
                        return <li>{v}</li>
                    })
                }
            </ul>
            <input type="text" name="nm" value={ele}
            onChange={(e)=>{setEle(e.target.value)}} />
            <br/>
            <button onClick={()=>{setNames(names.concat([ele]))}} >Add Name</button>
            {ele}
        </div>
    )
}