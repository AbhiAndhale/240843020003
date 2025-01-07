import { useState,useEffect } from "react";
import { useNavigate } from "react-router";

function ComplexFun () {
    //navigate - used as a function
    const navigate = useNavigate();
    const [nm,setNm] = useState("")

    useEffect(()=>{
        setNm(localStorage.getItem("uname"))
    },[]);    

    const dynamicRoute = () => {
        //specify route where u want to move
        navigate("/array");
    }
    let no = 10;
        return (<div>
            <h1> Complex Component  </h1>
            <h2> Learning JSX rules </h2>
            <p> {no*no} </p>
            <p> Local storage : {nm}</p>
            <button onClick={dynamicRoute}>Move to array addition</button>
        </div>)
}

export default ComplexFun;