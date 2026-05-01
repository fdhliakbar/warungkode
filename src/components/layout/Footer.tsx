'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaPhoneAlt} from 'react-icons/fa';
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const menuItems = [
  { label: 'Beranda', href: '#home' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Harga', href: '#pricing' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#contact' },
];

const layananItems = [
  'Website Bisnis',
  'WhatsApp Bot',
  'E-commerce',
  'Custom Web',
  'Company Profile',
  'Maintenance & Support',
];

const kontakItems = [
  { icon: FaPhoneAlt, label: '+62 821-7997-2653', href: 'https://wa.me/6282179972653'},
  { icon: IoMdMail, label: 'hello.warungkode@gmail.com', href: 'mailto:hello.warungkode@gmail.com'},
  { icon: FaLocationDot, label: 'Indonesia' },
  { icon: FaClock, label: 'Senin - Sabtu, 08:00 - 20:00 WIB' },
];

const socialLinks = [
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaFacebook, href: '#', label: 'Facebook' },
  { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#121212] text-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Warung Kode Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-xs md:text-sm font-semibold text-white">Warung</span>
                <span className="text-xs md:text-sm font-semibold text-orange-400">Kode</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Partner digital untuk membantu bisnis Anda tumbuh di era digital
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Menu Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Menu</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <ul className="space-y-2">
                {menuItems.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {menuItems.slice(4).map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Layanan Column */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Layanan</h3>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <ul className="space-y-2">
                {layananItems.slice(0, 3).map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {layananItems.slice(3).map((item, index) => (
                  <li key={index + 3}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kontak Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Kontak</h3>
            <ul className="space-y-3">
              {kontakItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                    <Icon size={18} className="mt-1 shrink-0" />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm md:text-base">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Dapatkan tips digital & promo terbaru langsung ke email Anda
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 Warung Kode. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Privasi
            </Link>
            <Link href="#" className="hover:text-orange-400 transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}