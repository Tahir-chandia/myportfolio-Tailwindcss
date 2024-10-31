import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const navItems = [{
    title:"Home",
    href:"/"
},
{
    title:"About",
    href:"/about"
},{
    title:"Projects",
    href:"/projects"
}]

const Header = () => {
  return (
    <main>

        <header>
<nav className='flex justify-between back px-8 md:px-14 py-3 max-w-screen-2xl  mx-auto'>


        <div >
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt='logo' width={150} height={70}/>
          </Link>
        </div>

<ul  className='flex gap-20 py-2 mr-5 ' >
{navItems.map(nav=>(
    <li key={nav.href} >
        <Link href={nav.href} className='hidden md:block'> {nav.title}</Link>
    </li>

))}
</ul>



<div className='hidden md:block'>
    

    <Link href={"/contact"}>
<button className='w-40 bg-transparent h-11 flex justify-center items-center   text-xl font-semibold butt'>
        Contact
    </button>
    </Link>
</div>



<Sheet>
  <SheetTrigger className='md:hidden  text-xl'>
    <Menu  /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
     <ul  className=' text-xl py-5 space-y-3 text-start text-gray-950 ' >
{navItems.map(nav=>(
    <li key={nav.href} >
        <Link href={nav.href} > {nav.title}</Link>
    </li>
    
    
))}
</ul>   

<button className='w-40 bg-transparent h-11 flex justify-center items-center   text-xl font-semibold butt'>
        Contact
    </button>

      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>




</nav>
        </header>
    </main>
  )
}

export default Header
