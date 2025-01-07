//normal or regular function
import pic from './Jellyfish.jpg'
function One () {
    let h = 100;
    let w= 80;
    return (
        <div>
            <p> Display image </p>
            <img src={pic} height={h} width={w} />
        </div>
    )
}

//functional expression
let Two = function() {
    return (
        <div>
            <p> Handling event </p>
            <button onClick={function(){console.log("hi")}}>Click</button>
        </div>
    )
}

//arrow function - compact
let Three = () => {
    let names = ["bakul","amit","vaibhav","prachi"];
    let emps = [{empid:1000,ename:"Bakul"},{empid:1010,ename:"Amit"},{empid:1020,ename:"Vaibhav"}];
    return (
        <div>
            <ul>
                {
                    names.map(v => {
                        return <li key={v}>{v}</li>
                    })
                }
            </ul>
            <p> Emp information </p>
            <table>
                {
                    emps.map(v => {
                       return (
                        <tr key={v.empid}>
                            <td> {v.empid} </td>
                            <td> {v.ename} </td>
                        </tr>
                       )
                    })
                }
            </table>
        </div>
    )
}
//export multiple components from one js file
export {One, Two, Three};
//only one compoenent can be exported
//export default One