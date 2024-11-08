'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Wildlife Conservation
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/species" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Species
              </Link>
              <Link href="/donate" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Donate
              </Link>
              <Link href="/volunteer" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Volunteer
              </Link>
              <Link href="/resources" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Resources
              </Link>
              <Link href="/contact" className="hover:bg-green-700 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {/* Add hamburger icon */}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}