import { useState } from "react"

const SignUp=()=>{

    const initialState={

        username:'',
        password:'',
    }
    const [formData,setFormData]=useState(initialState)

    const handleChange=()=>{
        console.log('handlechange')
    }

    return(
        <>
        <h1>Sign up form</h1>
        <form action="">
        <label htmlFor="">Username:</label>
        <input type="text" />
        <br />
        <label htmlFor="">Password</label>
        <input type="passord" />
        </form>
        
        </>
        
    )
}

export default SignUp