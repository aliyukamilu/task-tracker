import React from 'react'
import { Button } from "flowbite-react";

const Header = () => {
  return (
    <header className='bg-[#000] fixed top-0 w-full left-0 z-10'>
      <div className='flex justify-between items-center p-3'>
        <div className='logo'>
          <h1 className='font-bold text-2xl'>TASK TRACKER</h1>
        </div>
        <div>
          <Button>Logout</Button>
        </div>
      </div>
    </header>
  )
}

export default Header