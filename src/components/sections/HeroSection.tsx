'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaGetPocket } from "react-icons/fa";


export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 md:space-y-6" data-aos="fade-up">
            <div
              className="text-orange-500 font-semibold text-sm md:text-base tracking-wide uppercase"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Solusi Digital untuk Bisnis Anda
            </div>

            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Bikin Bisnis Makin Profesional dengan{' '}
              <span className="text-orange-500">Website & WhatsApp Bot</span>
            </h1>

            <p
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Warung Kode membantu UMKM dan bisnis modern membangun sistem digital yang cepat,
              aman, dan dapat dipertahankan.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 md:pt-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <button className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 w-full sm:w-auto">
                <FaWhatsapp size={20} /> Konsultasi Gratis
              </button>
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-gray-300 text-gray-900 px-6 md:px-8 py-3 rounded-lg font-semibold transition-all duration-200 w-full sm:w-auto">
                Lihat Portofolio <FaArrowRight size={17} />
              </button>
            </div>

            {/* Benefits Row */}
            <div
              className="flex flex-wrap gap-4 md:gap-6 pt-4 md:pt-8 text-sm md:text-base"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <FaGetPocket size={18} className="text-orange-500" />
                <span>Gratis Konsultasi</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaGetPocket size={18} className="text-orange-500" />
                <span>Pengerjaan Cepat</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <FaGetPocket size={18} className="text-orange-500" />
                <span>Garansi 30 Hari</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className="relative h-96 md:h-full md:min-h-125 order-first md:order-last"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="relative w-full h-full">
              <Image
                src="/warungkode-logo-2.webp"
                alt="Warung Kode Logo"
                fill
                className="object-contain p-8"
                sizes="(max-width: 780px) 100vw, 50vw"
              />
              
            </div>


          </div>
        </div>

        {/* Trusted By Section */}
        <div
          className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-gray-200"
          data-aos="fade-up"
        >
          <p className="text-center text-gray-600 text-sm md:text-base font-medium mb-8">
            Dipercaya oleh UMKM & Bisnis di berbagai industri
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
            {[
              'Kopi Kita',
              'LaundryKuy',
              'Bengkel Jaya',
              'Sahabat Print',
              'Homestayku',
              'Toko Bangunan',
            ].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-600 font-semibold text-xs md:text-sm"
                data-aos="zoom-in"
                data-aos-delay={100 + index * 100}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
