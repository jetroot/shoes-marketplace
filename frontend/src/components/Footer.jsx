import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black text-white p-5 capitalize'>
        All copyrights reserved - ©️{new Date().getFullYear()}
    </div>
  )
}

export default Footer