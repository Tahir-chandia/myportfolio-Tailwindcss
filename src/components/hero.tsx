import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    
    <div className='flex justify-between items-center  main'>

    <div>
      <Image src={"/man.png"} width={300} height={300} alt='man' className='my-5 md:my-0 mx-10 md:mx-28 '/>
    </div>
 
<div className='mb-10 mt-5  sm:mt-20 md:mt-8 ml-20 md:ml-52 space-y-2 md:space-y-10'>
    <h3 className=' md:text-2xl '>Muhammad Tahir</h3>
    <h2 className='text-xl md:text-4xl '>I am <span>Frontend Developer</span></h2>
    <p className='text-sm  md:text-xl text-balance'>Crafting seamless user experiences with clean code and creative design.
Building sleek, responsive interfaces.
Turning designs into interactive experiences.
</p>


    <button className='w-full md:w-52 bg-transparent h-8  md:h-11  flex justify-center items-center   md:text-xl font-semibold butt2'>
        Download CV
    </button>
</div>

    </div>
  )
}

export default Hero
