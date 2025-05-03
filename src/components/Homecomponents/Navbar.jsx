"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between p-6 bg-transparent absolute w-full z-10">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/images/logo/logo.jpg"
              alt="Sierra Business Logo"
              className="h-15 w-auto object-contain cursor-pointer"

            />
          </Link>
        </div>

        <ul className="hidden md:flex space-x-6 text-white text-base">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
              
            </Link>
          </li>
          <li>
            <Link href="/product" className="hover:text-gray-300">
              Product
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-gray-300">
              Project
            </Link>
          </li>
          <li>
            <Link href="/service" className="hover:text-gray-300">
              Service
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        <div className="hidden md:block">
          <Link href="/#">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm md:text-base">
              Take Action
            </button>
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-black bg-opacity-90 text-white text-center z-20 space-y-4 py-6">
          <Link href="/" className="block hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-300">
            About
          </Link>
          <Link href="/product" className="block hover:text-gray-300">
            Product
          </Link>
          <Link href="/project" className="block hover:text-gray-300">
            Project
          </Link>

          <Link href="/service" className="block hover:text-gray-300">

            Service
          </Link>
          <Link href="/contact" className="block hover:text-gray-300">
            Contact
          </Link>
          <Link href="/action">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full mt-4">
              Take Action
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
