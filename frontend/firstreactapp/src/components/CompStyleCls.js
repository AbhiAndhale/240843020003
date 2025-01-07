import React from 'react'
import './external_style.css'
class CompStyleCls extends React.Component {
   
    render() {
        //js object
        //styling attribute - camel casing name
        const mystyle= {
            letterSpacing: "5px",            
            textDecoration: "underline"
        }

        return (
            <div class="container-fluid text-bg-success">
                <h1 style={{color:"red",backgroundColor:"blue",textAlign:"center"}}> Comp style </h1>
                <p style={mystyle}> using inline style(separate object) </p>
                <p className="info"> Using external css </p>
                <p className="bg-primary" style={{marginLeft:"50px"}}> Styled using bootstrap </p>
            </div>
        )
    }
}

export default CompStyleCls;