import React,{useState } from 'react';
import {Link} from "react-router-dom";
import style from "./Signup.module.css";

const Signup =() => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const onSubmit = async(e)=> {
        e.preventDefault()
     try{
        const sendSign = await fetch(`http://localhost:3000/user/signup`,{
          method: "POST",
          headers:{
            'content-Type':"application/json",
          },
          body:JSON.stringify({name,email,password}),

        });

        const response = await sendSign.json();

        if(sendSign.ok){
            alert("Registration successfull");
            Navigate("/")
            console.log(response);
        }else{
            alert("Registration failed");
        }
     }catch (error){
      console.log(error);
     }

    };

     return (
        <div className={style.one}>
            <h1 className={style.two}>Signup</h1>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name="username" placeholder= "username" onChange={(e) => setname(e.target.value)}/>
                <br />
                <label htmlFor="">Email   </label>
                <input type="text" name="Email" placeholder= "Email" onChange={(e) => setemail(e.target.value)}/>
                <br />
                <label htmlFor="">Password</label>
                <input type="password" name="password" placeholder= "Password" onChange={(e) => setpassword(e.target.value)}/>
                <br />
                <br />
            
                <button onClick={onSubmit} >Submit</button>
            </div>
            <p>
                Already have an account? <Link to="/">Login</Link>
            </p>

        </div>
     )
}
   export default Signup;