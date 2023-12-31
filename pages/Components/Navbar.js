import React, { useRef,useState } from 'react';
import Link from 'next/link';
import { BsFillBagCheckFill} from 'react-icons/bs';
import {MdAccountCircle} from 'react-icons/md'
import Image from 'next/image';
const Navbar = ({logout,user}) => {
  //console.log(user)
  return (
    <div className='sticky top-0 z-50 text-gray-600 body-font bg-gray-800'>
    <header className=" text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
    <Link href={'/'}>
     <Image src='https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg' alt='' height={50} width={50}/>
     </Link> 
    
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    <span className="ml-3 text-xl">Course.com</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-bold">
    {user.value && <span  onClick={logout}  className="mr-5 hover:text-gray-200 cursor-pointer">Logout</span>}
    {!user.value && <> 
      <Link href={'/Login'} className="mr-5 hover:text-gray-200 cursor-pointer">Login</Link></>}
     
    </nav>
   
   
  </div>
 
  
  
</header>
 
</div>

  )
  
}

export default Navbar