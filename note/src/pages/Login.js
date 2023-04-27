//import react de manera global
import * as React from "react";
import{googleAuth} from './funct-fire.js'

const Login =()=>{
    return (
        <div>
        <p>autentificación con google</p>
        <button onClick={googleAuth}>autentificación con google</button>        
        </div>
    )
}
export default Login;