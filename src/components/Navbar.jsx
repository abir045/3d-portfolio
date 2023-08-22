import React from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import { navLinks } from '../constants'
import logo from "../assets/dall.svg"
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"
import { useState } from 'react'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import cv from '../assets/cv.svg'


const Navbar = () => {
const [active, setActive] = useState("")
const [toggle, setToggle] = useState(false);


  return (
    <nav className={ `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-slate-700` }>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
       <Link 
       to="/"
       className='flex items-center gap-2'
       onClick={() => {
        setActive("");
        window.scrollTo(0,0)
       }}
       >
       <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
       <p className='text-white text-[18px] font-bold cursor-pointer flex '>Salekin Imran</p>
       </Link>

       <ul className='list-none hidden sm:flex flex-row gap-10'>
        {
          navLinks.map((link)=> {
            return (

              <>
              
              <li
              key={link.id}
              className={`${
                active === link.title ? "text-white  tracking-widest font-bold" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              
              onClick={() => setActive(link.title)}
              >
                <a 
                href={`#${link.id}`}
                

                >{link.title} </a>
              </li>

              

              
              </>
              
            )
          })
        }

        

       </ul>

       {/* social icons */}    
      
       <ul className='list-none  hidden sm:flex space-x-5'>
       <li className='hover:bg-white'>
          <a href='https://github.com/abir045' target='_blank'>
            <img src={github} className='w-[50px]' />
          </a>
          </li>

          <li className='hover:bg-white'>
          <a href='https://www.linkedin.com/in/salekinimran/' target='_blank'>
            <img src={linkedin} className='w-[50px]' />
          </a>
          </li>

          <li className='hover:bg-white'>
          <a href='https://drive.google.com/file/d/19s3curyckE2gKBkoHRUGp0i4Tftx_0P5/view?usp=sharing' target='_blank'>
            <img src={cv} className='w-[50px]' />
          </a>
          </li>
       </ul>

       {/* mb menu */}

      <div className='sm:hidden flex flex-1 justify-end items-center '>
        <img 
        src={ toggle? close : menu} 
        alt="menu" 
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={()=> setToggle(!toggle)}
        
        />

        <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gray-700 absolute top-20 right-0 
        mx-4 my-2 min-w-[250px] z-10 rounded `}>
          <ul className='flex flex-col items-center mx-auto gap-10 '>
        {  
          navLinks.map((link)=> {
            return (
              
              <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } font-poppins text-base font-medium cursor-pointer `}
              
              onClick={() => { 
                
                 setToggle(!toggle)
                setActive(link.title)}}
                
              
              >
                <a 
                href={`#${link.id}`}
                
                

                >{link.title} </a>
              </li>
            )
          })
        }
        
        <li className='hover:bg-white'>
          <a href='https://github.com/abir045' target='_blank'>
            <img src={github} className='w-[50px]' />
          </a>
          </li>

          <li className='hover:bg-white'>
          <a href='https://www.linkedin.com/in/salekinimran/' target='_blank'>
            <img src={linkedin} className='w-[50px]' />
          </a>
          </li>

          <li className='hover:bg-white'>
          <a href='https://drive.google.com/file/d/19s3curyckE2gKBkoHRUGp0i4Tftx_0P5/view?usp=sharing' target='_blank'>
            <img src={cv} className='w-[50px]' />
          </a>
          </li>


       </ul>

        {/* <div > */}
       <ul className='flex' >
       {/* <li className='hover:bg-white'>
          <a href='https://github.com/abir045' target='_blank'>
            <img src={github} className='w-[50px]' />
          </a>
          </li>

          <li className='hover:bg-white'>
          <a href='https://www.linkedin.com/in/salekinimran/' target='_blank'>
            <img src={linkedin} className='w-[50px]' />
          </a>
          </li> */}
       </ul>
       {/* </div>  */}


        </div>
      


       </div>

      </div>

    </nav>
  )
}

export default Navbar