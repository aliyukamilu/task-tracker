import React from 'react'
import { Button, TextInput, Modal, Label } from "flowbite-react";
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='d-flex w-full'>
      <div className='shadow-2xl rounded-md p-5 w-[500px]'>
        <form className="flex flex-col gap-4">
          <h1 className='text-2xl font-bold'>Login</h1>
          <div>
            <div className="mb-2 block text-left">
              <Label
                htmlFor="username"
                value="Your username"
              />
            </div>
            <TextInput
              id="username"
              type="text"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block text-left">
              <Label
                htmlFor="password"
                value="Your password"
              />
            </div>
            <TextInput
              id="password"
              type="password"
              required={true}
              shadow={true}
            />
          </div>
          <Link to='/' className='w-full'>
            <Button type="submit" className='mt-10 w-full'>
              Login
            </Button>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login