import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutMe = () => {
    return (
        <div>

            <div className='flex   my-5 md:my-20 justify-between items-center  w-full'>

                <div className='ml-24 hidden md:flex'>
                    <Image src={"/man-2.png"} width={1400} height={600} alt='man' className='' />
                </div>

                <div className=' md:ml-20  ml-5 space-y-5 md:space-y-14 '>
                    <h4 className='text-sm md:text-2xl'  >I am  Muhammad Tahir</h4>
                    <h2 className='text-xl md:text-3xl '>About <span>Me</span></h2>
                    <p className='text-xs md:text-sm md:mr-48 mr-5 text-balance md:text-justify'>
                        
                        
                        
                        {`I'm a passionate frontend developer with a keen eye for design and a
                         commitment to creating seamless digital experiences. I specialize in building responsive, user-friendly interfaces that bring ideas to
                        life through clean and efficient code. With a strong foundation in HTML, CSS, TailwindCSS,Typescript,JavaScript, and modern frameworks like Nextjs, I bridge the gap between design and technology, ensuring that every project not only looks great but also 
                        performs flawlessly.`}
                    </p>

                    <div className='flex gap-10  items-end'>

                    

                    <Link href={"https://github.com/Tahir-chandia"} target='_blank' className='li p-2 rounded-lg'>
                    <Github />
                    </Link>
            
                    <Link href={"https://www.linkedin.com/in/muhammad-tahir-567a8a2b6/"} target='_blank'  className=' li rounded-lg p-2'>
                    <Linkedin /> 
                    </Link>
            
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe
