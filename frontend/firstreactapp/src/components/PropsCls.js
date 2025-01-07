import React from "react";
class PropsCls extends React.Component {
    render() {
        return (
            <div>
                <p> Welcome {this.props.nm.toUpperCase() } </p>
                <p> Age : {this.props.age > 18 ?"Valid":"Invalid" }</p>
            </div>
        )
    }
}
PropsCls.defaultProps = {
    nm: "guest",
    age: 0
}
//npm install prop-types
//if data is not valid, generate warning
/*PropsCls.propTypes = {
    nm: PropTypes.string.isRequired,
    age: PropTypes.number
}*/
export default PropsCls;