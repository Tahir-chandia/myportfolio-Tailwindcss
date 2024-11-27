import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div>
                <section  className="work pb-20 pt-14  w-full">
            <div >
                <h1 className="pt-2 text-center  text-xl"><span>My</span> Projects</h1>
                <p className='pb-10 text-center'>We provide high standar clean website for your business solutions</p>
                <div className="card-wrapper md:grid space-y-10 md:space-y-0  grid-cols-3 gap-12 mx-20 ">
                    <div className="card md:flex items-center relative h-60">
                        <div className="overlay">
                            <div>
                            <h4 className='text-black text-center '>
                                Project-01
                                                       </h4>
                            <Link href={"https://resume-builder-tau-five.vercel.app/"} 
                            target='_blank' className='cursor-pointer'>
                            <span className='text-white '>Static Resume Website
                            </span>
     
                            
                            </Link>
                            </div>
                        </div>
                        <Image src={"/project-1.png"} alt="image" width={300} height={200}
                         className='w-full h-full object-cover'/>
                    </div>

                    <div className="card relative h-60">
                        <div className="overlay">
                        <div>
                            <h4 className='text-black text-center'>
                                Project-02
                                                       </h4>
                            <Link href={"https://young-tour-website.vercel.app/"} target='_blank' className='cursor-pointer'>
                            <span className='text-white '>Yound Tour Website
                            </span>
     
                            
                            </Link>
                                </div>

                        </div>
                        <Image src={"/project-2.png"} alt="image" width={300} height={200} className='w-full h-full object-cover'/>
                    </div>
                    <div className="card relative h-60">
                        <div className="overlay">
                        <div>
                            <h4 className='text-black text-center'>
                                Project-03
                                                       </h4>
                            <Link href={"https://furnio-website.vercel.app/"} target='_blank' className='cursor-pointer'>
                            <span className='text-white '>E-commerce Furnio Website
                            </span>
     
                            
                            </Link>
                            </div>
                        </div>
                        <Image src={"/project-3.png"} alt="image" width={300} height={200} className='w-full h-full object-cover'/>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects


