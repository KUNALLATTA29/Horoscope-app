import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import axios from 'axios'

export default function Home() {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false)
    const [islogged,setIslogged] = useState(false);
    const navigate = useNavigate();

    const fetch = async()=>{
        setLoading(true)

        try{
            const response = await axios.get('https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=cancer&day=TODAY')
            setData(response.data)
            setLoading(false)
            console.log(data)
        }catch{
            alert('there is an error in showing data')
        }
        
    }

    useEffect(()=>{
        fetch()
    },[])

  return (
    <div>
        {islogged ? (
            <p>hello world</p>
        ): <Login islogged={setIslogged}/>}
    </div>
  )
}
