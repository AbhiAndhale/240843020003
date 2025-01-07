import { useState,useReducer } from "react";
const init = {
    empid:0,
    ename:"XXX",
    sal:0,
    dept:0
}

const reducer = (state, action)=>{
    switch(action.type) {
        case 'update':{
            //return modified state
            return {...state, [action.fld]:action.val}
        }
        case 'reset':{
            return init;
        }
    }
}
export default function EmpForm () {
    const [emp, dispatch] = useReducer(reducer, init);
    const [msg, setMsg] = useState("")
    const sendData=(e)=>{
        e.preventDefault();
        //console.log(JSON.stringify(emp));
        const reqInfo = {
            method: "post",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                eid: emp.empid,
                enm:emp.ename,
                sal:emp.sal,
                dept: emp.dept
            })
        }
        fetch("http://localhost:9000/insertEmp",reqInfo)
        .then(resp => resp.text())
        .then(msg => setMsg(msg))
        .catch(error => setMsg("Response failed, Try Later"))
    }

    return (
        <div className="container">
            <p> Emp Form </p>
            <form>
                <div>
                Enter empid : 
                <input type="number" name="empid" value={emp.empid} 
                className="form-control"
                onChange={(e)=>{dispatch({type:"update",fld:"empid",val:e.target.value})}}
                />
                </div>
                <div>
                Enter ename : 
                <input type="text" name="ename" value={emp.ename}
                className="form-control"
                onChange={(e)=>{dispatch({type:"update",fld:"ename",val:e.target.value})}}
               />
                </div>
                <div>
                Enter sal : 
                <input type="number" name="sal" value={emp.sal}
                className="form-control" 
                onChange={(e)=>{dispatch({type:"update",fld:"sal",val:e.target.value})}}
                />
                </div>
                <div>
                Enter dept : 
                <input type="number" name="dept" value={emp.dept}
                className="form-control" 
                onChange={(e)=>{dispatch({type:"update",fld:"dept",val:e.target.value})}}
                />
                </div>
                <input type="submit" value="Emp Info"
                onClick={(e)=>{sendData(e)}} />
                <input type="reset" value="Clear"
                onClick={()=>{dispatch({type:"reset"})}} />
            </form>
            <p>
                {JSON.stringify(emp)}
            </p>
            <p> {msg}</p>
        </div>
    )

}