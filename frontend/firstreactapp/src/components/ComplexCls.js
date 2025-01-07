import React  from "react";
class ComplexCls extends React.Component{

    render() {
        let no = 10;
        return (<div>
            <h1> Complex Component  </h1>
            <h2> Learning JSX rules </h2>
            <p> {no*no} </p>
            </div>)
    }
}

export default ComplexCls;