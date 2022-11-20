import React from 'react'
import { Button } from "flowbite-react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    sessionStorage.removeItem('todo_user')
    navigate('/login')
  }

  return (
    <header className='bg-[#000] fixed top-0 w-full left-0 z-10'>
      <div className='flex justify-between items-center p-3'>
        <div className='logo'>
          <h1 className='font-bold text-2xl'>TASK TRACKER</h1>
        </div>
        <div>
          <Button onClick={logMeOut}>Logout</Button>
        </div>
      </div>
    </header>
  )
}

export default Header