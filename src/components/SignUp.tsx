import React from 'react'

export default function SignUpComp() {
  return (
    <div className='flex justify-center items-center mb-4'>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder='Enter your email here'
        className='border-4'
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder='Enter your password here'
        className='border-4'
      />
    </div>
  );
}
