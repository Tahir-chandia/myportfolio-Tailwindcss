import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <main>
              <footer className='p-10 bg-gray-950'>
                <div className='flex justify-center items-center w-full mb-8'>

            <Image className="footer-logo" src="/logo.svg" width={150} height={50}  alt="logo" />
                </div>
            
            <div className="copyright text-center text-slate-400">
                Copyright 2024 © My portfolio
            </div>
        </footer>
    </main>
  )
}

export default Footer
