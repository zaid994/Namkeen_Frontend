'use client';
import React from 'react';
import { FaShippingFast, FaUndo, FaPercentage, FaHeadset } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Top Info Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 text-center text-gray-800 py-6 px-4 md:px-12 gap-6">
        <div className="flex flex-col items-center">
          <FaShippingFast size={24} className="mb-2 text-green-600" />
          <h3 className="font-semibold">Fast Delivery</h3>
          <p className="text-sm">Get your favorite snacks quickly</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUndo size={24} className="mb-2 text-green-600" />
          <h3 className="font-semibold">Safe Payment</h3>
          <p className="text-sm">100% secure payment</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPercentage size={24} className="mb-2 text-green-600" />
          <h3 className="font-semibold">Minimum Order</h3>
          <p className="text-sm">5kg</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHeadset size={24} className="mb-2 text-green-600" />
          <h3 className="font-semibold">Help Center</h3>
          <p className="text-sm">Dedicated Support</p>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="relative bg-gray-800 text-white py-12 px-6 flex flex-col items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/banner3.jpg" 
            alt="Namkeen Banner" 
            layout="fill" 
            objectFit="cover"
            objectPosition="center"
            className="opacity-30"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Get The Latest Offers</h2>
          <p className="text-sm mt-2">Subscribe & get special discounts on Namkeen products</p>
          <div className="mt-4 flex w-full max-w-lg">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="p-3 flex-grow rounded-l-md text-gray-800 border-none focus:outline-none"
            />
            <button className="bg-yellow-500 text-white px-4 rounded-r-md hover:bg-yellow-600">Subscribe →</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer Links */}
      <div className="container mx-auto px-4 py-10 text-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Brand Info */}
          <div>
          <Image src='/logohindi.jpg' alt="slide" width={200} height={30}  />
            <p className="text-sm mt-2">Enjoy a variety of crispy, tasty Namkeen snacks, crafted with the finest ingredients.</p>
            <p className="text-sm mt-4 font-semibold">Got questions? Call us 24/7</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-green-600">About Us</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
              <li><a href="#" className="hover:text-green-600">How to Order</a></li>
              <li><a href="#" className="hover:text-green-600">FAQ</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold">Customer Service</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-green-600">Payment Methods</a></li>
              <li><a href="#" className="hover:text-green-600">Returns</a></li>
              <li><a href="#" className="hover:text-green-600">Shipping</a></li>
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
