import React from 'react'
import Input from '../components/Input'

const pages = () => {
  return (
    <div className='mt-10 flex justify-center'>
      <div>
        <div className='w-96  rounded-lg  p-5 border bg-white'>
          <p className='font-bold text-3xl tracking-tigh text-center text-slate-500'>
            Sign-in or Sign-up
          </p>
          <div>
            <Input label='Email or username' type='text' />
            <Input label='Password' type='password' />
          </div>
          <button className='
          my-2
          rounded-lg p-2
           shadow-sm w-full bg-slate-400
             text-white hover:bg-slate-200'>
            Sign in
          </button>
          <button className='rounded-lg p-2 my-2
           shadow-sm w-full bg-blue-700
             text-white hover:bg-blue-500'>
            Sign in with Facebook
          </button>
          <button className='rounded-lg p-2 my-2
           shadow-sm w-full bg-white
             text-slate-500 border hover:bg-slate-200'>
            Sign in with Google
          </button>

        </div>
      </div>
    </div>
  )
}

export default pages