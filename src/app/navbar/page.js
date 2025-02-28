'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaShoppingCart, FaSearch, FaBars } from "react-icons/fa";
import Image from 'next/image';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-red-500 shadow-md">
      {/* Top Section */}
      <div className="flex items-center justify-around px-6 py-3 border-b border-gray-300">
        {/* Logo */}
        <Image src='/logo.png' alt="slide" width={200} height={30}  />
       
        
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 pl-10 border rounded-full focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        
        {/* Account & Cart */}
        <div className="flex items-center gap-6">
            <div>
            <FaUser className="text-xl cursor-pointer text-gray-700" />
            Account 
            </div>
            <div>
            <FaShoppingCart className="text-xl cursor-pointer text-gray-700" />
            Cart
            </div>
        
         
        </div>
      </div>
      
      {/* Navigation Section */}
      <div className="relative">
        <nav className="flex items-center justify-around px-6 py-4 bg-white">
          <button
            className="bg-[#15803d] text-white px-4 py-2 rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaBars className="inline-block mr-2" /> BROWSE CATEGORIES
          </button>
          
          {/* Dropdown */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute left-6 top-16 w-64 bg-white shadow-lg border rounded-md z-50"
            >
              <ul className="divide-y divide-gray-200">
                {["Snacks", "Sweets", "Dry Fruits", "Spicy Mix", "Specials"].map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          
          <ul className="flex gap-6 text-gray-700">
            <li className="cursor-pointer hover:text-[#d97706]">HOME</li>
            <li className="cursor-pointer hover:text-[#d97706]">SHOP</li>
            <li className="cursor-pointer hover:text-[#d97706]">PRODUCT</li>
            <li className="cursor-pointer hover:text-[#d97706]">CONTACT</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
