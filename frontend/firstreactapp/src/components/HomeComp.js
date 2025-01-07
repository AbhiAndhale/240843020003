import { useState } from "react"

export default function HomeComp() {
    const [nm,setNm] = useState("")
    const handleClick = () => {
        //if the value is object, convert to json
        localStorage.setItem("uname",nm);
    }
    return (
        <div>
            <p> Welcome to web application </p>
            <form>
                Enter name :
                <input type="text" name="nm" value={nm}
                onChange={(e)=>{setNm(e.target.value)}} />
            </form>
            <p> {nm} </p>
            <button onClick={handleClick}> Save in local storage </button>
        </div>
    )
}