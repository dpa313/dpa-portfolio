import React from 'react'
import Logo from './Navbar/Logo'

const Footer = () => {
  return (
    <footer className='py-6 border border-t-primary/5'>
        <div className="container mx-auto">
            <div className='flex flex-col justify-center items-center'>
            <Logo/>
            <div className='text-white'>
                <p>All right&apos;s reserved by <span className='text-primary'>Apu Ahmed</span></p>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer