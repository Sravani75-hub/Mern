import React,{useState} from 'react';
import {Link} from "react-router-dom"
import style from "./Login.module.css";
import {useNavigate} from 'react-router-dom';
const Login = () => {
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const navigate = useNavigate();

    const onSubmit = async(e)=> {
        e.preventDefault()
     try{
        const sendSign = await fetch(`http://localhost:3000/user/Login`,{
          method: "POST",
          headers:{
            'content-Type':"application/json",
          },
          body:JSON.stringify({email,password}),

        });

        const response = await sendSign.json();

        if(sendSign.ok){
            alert("Login successfull");
            navigate('/home')
            localStorage.setItem("token",response.token)
        }else{
            alert("login failed");
        }
     }catch (error){
      console.log(error);
     }
    }                                                 
  return (
    <div className={style.full}>
      <div>
        <h1 className={style.hello}>Login</h1>
        <div>
            <input type="text" id=""placeholder='Email' onChange = {(e) => setemail(e.target.value)}/><br />
        </div>
        <div>
            <input type="password" id="" placeholder='password' onChange={(e) => setpassword(e.target.value)}/> 
            <br />
            <br />
           
            <button onClick={onSubmit} >Login</button>
        </div>
        <div>
          <p>
          Do you have an account?
          </p>
          <Link to="/Signup">Signup</Link>
        
        </div>
      </div>
    </div>
  )
}

export default Login; 
