import React from "react";
export default class StateCls extends React.Component {
    constructor(props){
        super(props);
        //initialize the state
        this.state = {
            nm: "Abhishek"
        }
        this.changeNm = this.changeNm.bind(this);
    }
    //arrow function
    /*changeNm = () =>{
        //this - current component object
        this.setState({ nm: "Bakul"});
    }*/
    /*changeNm = function() {
        //this - needs to bound explicutly 
        this.setState({ nm: "Bakul"});    //error
    }*/
    changeNm() {
        //this.state = {}
        //re-render the component with modified values
        this.setState({ nm: "Bakul"});    //error
    }

    render() {
        return (
            <div>
                {/* accessing the state */}
                <p> Welcome {this.state.nm} </p>
                {/* modify the state */}
                <button onClick={()=>{this.setState({nm:"xxxx"})}}> Change Name </button>
            </div>
        )
    }
}
