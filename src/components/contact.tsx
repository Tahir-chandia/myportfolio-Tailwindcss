
import React from 'react'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <main className='contact pb-10  ' >
      <div>

<h3 className='contact2 text-center text-xl md:text-2xl py-2 md:py-5 md:text-black'>Contact <span className='text-white'>Us</span></h3>
      </div>

      <div className="container2 flex justify-center">
      <div className="content flex justify-between items-center space-y-1 md:space-y-3">
        <div className="left-side w-1/4 h-full flex flex-col items-center justify-center  relative mt-4">
          <div className="m-3  text-center text-gray-400 ml-10 md:ml-0">
            <i className="flex items-center justify-center text-2xl  md:text-3xl mb-2 add"><FaMapMarkerAlt className=' ' /></i>
            <div className="text-white md:text-xl text-xs">Address</div>
            <div className='md:text-base text-xs'>Sindh,Karachi</div>
            
          </div>
          <div className="text-center text-gray-400 ml-10 md:ml-0">
            <i className="flex items-center justify-center text-2xl  md:text-3xl mt-6 add"><FaPhoneAlt /></i>
            <div className="text-white md:text-xl text-xs">Phone</div>
            <div className='md:text-base text-xs'>03022172137</div>
                 </div>
          <div className="text-center text-gray-400 ml-10 md:ml-0">
            <i className="flex items-center justify-center text-2xl  md:text-3xl  mt-6  add"><MdOutlineEmail /></i>
            <div className="text-white md:text-xl text-xs">Email</div>
            <div className="text-one md:text-base text-xs">tk624444@gmail.com</div>
          </div>



        </div>
        <div className="right-side w-3/4 md:ml-10 ml-14">
          <div className="topic-text md:text-xl text-sm md:font-semibold md:mb-4 mb-2" >Send us a message</div>
          <p className='paraghaph3'>
            {`If you have any work from me or any types of quries,
             you can send me message from here. It's my pleasure to help you.`}</p>
          <form action="#">
            <div className="input-box w-full h-14 mb-4 mt-4">
              <input type="text" placeholder="Enter your name" className='h-full w-full  outline-none
               resize-none px-1 md:px-4 text-xs md:text-sm' />
            </div>
            <div className="input-box w-full h-14 mb-4">
              <input type="text" placeholder="Enter your email" className='h-full w-full  outline-none
               resize-none px-1 md:px-4 text-xs md:text-sm' />
            </div> <div className="input-box min-h-20 md:min-h-28">
              <textarea className='h-full w-full 
               outline-none resize-none px-1 md:px-4 text-xs md:text-sm pt-2'
               cols={10} rows={5} placeholder="Enter your message"></textarea>
            </div>
            <div className="inline-block mt-3 md:text-2xl text-sm">
              <input type="button" className='button' value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Contact
