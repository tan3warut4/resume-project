import React from 'react'

interface InputProps {
  label?: string
  placeholder?: string
  value?: string
  type: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({ label, placeholder, value, onChange, type }) => {
  return (
    <>
      <div className='my-4'>
        {label && <p className='mb-2 text-sm text-slate-500'>{label}</p>}
        <input
          type={type}
          className='rounded-lg px-3 py-2 border w-full'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  )
}

export default Input