import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { SlLocationPin } from 'react-icons/sl';
import { emptyCart } from '@/assets/index';

import UserProfile from '../Profile';

function Header() {
  return (
    <header className=" bg-gray-800 text-white w-full h-20 flex items-center fixed top-0 left-0 z-50">
      <div className="container mx-auto flex  items-center px-4 gap-4">
    
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src={emptyCart} className=" w-32 object-cover " alt="Company Logo" />
          </Link>
        </div>

        {/* Shipping Section */}
        <div className="hidden sm:flex items-center gap-2 justify-between">
          <SlLocationPin className="text-xl" />
          <p className="text-sm">
            Shipping to the  <span className="font-bold">UGANDA</span>
          </p>
        
        </div>

      
      </div>

      <div className=' mr-14'>
      <UserProfile  />
      </div>
     
    </header>
  );
}

export default Header;
