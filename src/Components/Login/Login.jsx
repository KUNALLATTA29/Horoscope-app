import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login({setIslogged}) {

    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        const storeddetail = Json.parse(localStorage.getItem("userform")) || [];

        const user = storeddetail.find(user=>user.username===username && user.password === password)

        if(user){
            alert("LogIn Successfully")
            setIslogged(true)
            navigate('')
        }else{
            alert("Invalid Username OR Password")
            setIslogged(false)
        }
    }

  return (
    <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter Username'
                        type='text'
                        className="input-field"
                    /><br />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Enter Password'
                        type='password'
                        className="input-field"
                    /><br />
                    <button type='submit' className="submit-button">LogIn</button>
                </form>
                <Link to={'/singup'}>
                    <p>SingUp</p>
                </Link>
            </div>
        </div>
  )
}
