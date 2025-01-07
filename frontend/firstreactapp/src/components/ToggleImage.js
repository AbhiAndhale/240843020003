import { useState } from 'react';
import pic from './Jellyfish.jpg'
export default function ToggleImage () {

    const [flag, setFlag]    = useState(true);

    return (
        <div>
            <img src={pic} width="200" height="200"
            style={{display: flag?"block":"none"}}  />
            <input type="checkbox" name="display" 
            checked={flag} onClick={()=>{setFlag(!flag)}} /> Hide/show
            <br/>
            <p> Flag : {flag.toString()   }</p>
        </div>
    )

}