import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Singup() {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phonenumber,setPhonenumber] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newuser = {
            username,
            email,
            password,
            phonenumber
        }

        const storeddetail = JSON.parse(localStorage.getItem('userform')) || []

        const existuser = storeddetail.some(user=>user.username===username)

        if(existuser){
            alert("User Already Exists. Please Choose A Different One")
            return;
        }

        storeddetail.push(newuser)
        localStorage.setItem('userform',JSON.stringify(storeddetail));
        alert("User Registered Successfully!")
        navigate('/login')
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Enter Username'
            type='text'
            /><br/>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter Email'
            type='email'
            /><br/>
            <input
            value={phonenumber}
            onChange={(e)=>setPhonenumber(e.target.value)}
            placeholder='Enter Mobile Number'
            type='number'
            /><br/>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='Enter Password'
            type='password'
            /><br/>
            <button type='submit'>LogIn</button>
        </form>
    </div>
  )
}
