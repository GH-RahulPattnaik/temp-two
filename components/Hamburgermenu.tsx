"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi';
import CurrencySelector from './PaymentFromCountryDropdown';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
        
        <div className='flex flex-col justify-between items-end max-h-max w-72 border border-black absolute top-0 left-0 bg-white text-black dark:bg-zinc-800 dark:text-white font-semibold'>
            <div className='w-full flex flex-col p-5'>
                <div className='flex justify-end py-4 border-b'><IoClose size={24}/></div>                
                <div className='flex justify-between items-center py-4 border-b'>
                    <a href='#'>Shop</a>
                </div>
                <div className='flex justify-between items-center py-4 border-b'>
                    <a href='#'>About</a>
                </div>
                <div className='flex py-4 border-b'>
                    <a href='#'>Theme Feautures</a>
                </div>
            </div>
            <div className='flex w-full flex-col py-4'>
                <CurrencySelector/>
                <h3 className='px-7 pt-4 text-start border-t mt-4'>Log in</h3>
            </div>                    
        </div>
        ) : (
          <div className='text-black'>
            <GiHamburgerMenu size={24}/>
          </div>
        )}
      </button>
    );
  };
  
  export default HamburgerMenu;
  