function PropsFun (ps) {
    return (
        <div>
            <p> Welcome {ps.nm.concat("**")} </p>
            <p> Age : {ps.age > 18 ?"Valid":"Invalid"} </p>
        </div>
    )
}
PropsFun.defaultProps = {
    nm: "xxx",
    age:10
}
//npm install prop-types
//generates warning
/*PropsFun.propTypes = {
    nm: ,
    age: 
}*/
export default PropsFun
