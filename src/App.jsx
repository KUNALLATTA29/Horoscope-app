import React, { useState } from 'react'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <div className="starry-background"></div> 
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
