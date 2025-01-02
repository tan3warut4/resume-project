"use client"
import React, { useEffect, useRef, useContext } from 'react'
import Input from '../components/Input'
import { FaGoogle, FaFacebook } from "react-icons/fa";
import IconButton from '../components/IconButton';
import { LoginContext } from '../context';


const Page = () => {
  const InputRef = useRef<HTMLInputElement | null>(null)
  const loginContext = useContext(LoginContext);
  if (!loginContext) {
    throw new Error("Failed setting up login context")
  }
  const { loginState, setLoginState } = loginContext
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      username: e.target.value,
    })
  }
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      password: e.target.value
    })
  }
  useEffect(() => {
    InputRef.current?.focus()
  }, [])
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    console.log("Submited!!")
  }
  return (
    <form className='mt-10 flex justify-center' onSubmit={handleSubmit}>
      <div>
        <div className='w-96  rounded-lg  p-8 border bg-white'>
          <p className='font-bold text-3xl tracking-tigh text-center text-slate-500'>
            Sign-in or Sign-up
          </p>
          <div>
            <Input ref={InputRef} label='Email or username' type='text' value={loginState.username} onChange={handleUsernameChange} />
            <Input label='Password' type='password' value={loginState.password} onChange={handlePasswordChange} />
          </div>
          <div className='flex flex-col gap-4'>
            <IconButton text='Sign in' color="bg-slate-300" textColor='text-slate-600' hoverColor="hover:bg-slate-400" />
            <IconButton text='Sign in with facebook' color='bg-blue-700' hoverColor="hover:bg-blue-500">
              <FaFacebook />
            </IconButton>
            <IconButton text='Sign in with google' color='bg-white' textColor='text-slate-400' hoverColor="hover:bg-slate-200">
              <FaGoogle />
            </IconButton>
          </div>

        </div>
      </div>
    </form>
  )
}

export default Page