 import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
 
 const Header = () => {
   return (
     <nav className='text-center bg-white text-black p-5'>
       <Link className='p-4 font-bold border-y-2 mr-4 uppercase border-t-0' to='/home'>Home</Link>
       <Link className='p-4 font-bold border-y-2 mr-4 uppercase border-t-0' to='/reviews'>Review</Link>
       <Link className='p-4 font-bold border-y-2 mr-4 uppercase border-t-0' to='/about'>About</Link>
       <Link className='p-4 font-bold border-y-2 mr-4 uppercase border-t-0' to='/dashboard'>Dashboard</Link>
       <Link className='p-4 font-bold border-y-2 mr-4 uppercase border-t-0' to='/blogs'>Blogs</Link>
     </nav>
   );
 };
 
 export default Header;