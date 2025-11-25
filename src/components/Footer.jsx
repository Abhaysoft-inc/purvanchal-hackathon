import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: '#060010' }} className="footer bottom-0 text-gray-300 md:px-40 py-10 border-t border-[#2c0768]">
        <div className='md:grid md:grid-cols-3 gap-8'>
          <div className='col-span-2 flex flex-col gap-y-3'>
            <img className='w-32 rounded-xl' src="./logo3.jpg" alt="logo" />
            <p className='text-sm'>"Unleash your creativity, push your limits, and turn bold ideas into real innovation. Join brilliant minds and build solutions that shape the future."</p>
            <div className="add flex gap-4">
              {/* social icons */}
            </div>
          </div>

          <div className='col-span-1'>
            <h1 className='text-xl font-bold text-white mb-2'>Get in touch</h1>
            <p className='text-sm'>7392049577</p>
            <p className='text-sm'>gdgknit@knit.ac.in</p>
          </div>
        </div>

        <div className="w-full h-px bg-gray-500 my-6"></div>
        <div className='text-center text-sm'>
          <p>Copyright 2025 @ GDG knit Sultanpur - All Right Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer