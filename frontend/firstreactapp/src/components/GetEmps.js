import { useState, useEffect } from "react";
export default function GetEmps () {

    const[emps,setEmps] = useState([]);

    //call only once
    useEffect(()=>{
        //server interaction
        //fetching emps - JSON - parsed
        //update the state = emps
        fetch("http://localhost:9000/getEmps")
        .then(resp=> resp.json())
        .then(data=>setEmps(data))

    },[]) 

    return (
        <div>
            <p> List of Emps </p>
            <table>
                {
                    emps.map(v => {
                        return (
                            <tr>
                                <td> {v.EMPNO} </td>
                                <td> {v.ENAME} </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}