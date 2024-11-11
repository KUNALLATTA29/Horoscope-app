import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <ul>
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/login'}>LogIn</Link>
            </li>
        </ul>
    </div>
  )
}
