'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Warung Kode Logo"
                width={50}
                height={50}
                className="w-8 h-8 md:w-10 md:h-10"
                priority
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-xl md:text-sm font-bold text-gray-800">Warung</span>
                <span className="text-xl md:text-sm font-bold text-orange-400">Kode</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-2 lg:px-3 py-2 text-sm lg:text-base text-gray-700 hover:text-orange-500 transition-colors duration-200 font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm lg:text-base whitespace-nowrap">
                <FaWhatsapp size={18} /> Konsultasi Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 focus:outline-none transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button className="w-full mt-4 flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200">
                <FaWhatsapp size={18} /> Konsultasi Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
