'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCheck } from 'react-icons/fa';

const pricingPlans = [
  {
    name: 'Starter',
    price: 1500000,
    desc: 'Untuk bisnis yang baru memulai',
    popular: false,
    features: [
      'Website 5 Halaman',
      'Design Responsif',
      'Kontak Form',
      'Gratis Konsultasi',
    ],
  },
  {
    name: 'Growth',
    price: 3500000,
    desc: 'Untuk bisnis yang ingin berkembang',
    popular: true,
    features: [
      'Website Unlimited Halaman',
      'WhatsApp Bot Basic',
      'SEO Dasar',
      'Gratis Domain & SSL',
    ],
  },
  {
    name: 'Premium',
    price: 7000000,
    desc: 'Solusi lengkap & custom',
    popular: false,
    features: [
      'Custom Website / Aplikasi',
      'WhatsApp Bot Advanced',
      'Integrasi Sistem',
      'Maintenance & Support',
    ],
  },
  {
    name: 'Business',
    price: 10000000,
    desc: 'Untuk bisnis menengah',
    popular: false,
    features: [
      'Enterprise Website',
      'WhatsApp Bot Pro',
      'Multiple Integration',
      'Priority Support',
    ],
  },
  {
    name: 'Enterprise',
    price: 15000000,
    desc: 'Solusi enterprise',
    popular: false,
    features: [
      'Custom Full Stack Development',
      'Advanced Bot & AI',
      'Custom Dashboard',
      '24/7 Dedicated Support',
    ],
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

export default function PricingSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = document.getElementById('pricing-carousel');
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          return prev >= maxScroll ? 0 : prev + 320;
        }
        return prev;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = document.getElementById('pricing-carousel');
    if (container) {
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]);

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="text-orange-500 font-semibold text-sm md:text-base tracking-wide uppercase mb-3" data-aos="fade-up" data-aos-delay="100">
            PAKET HARGA
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="200">
            Pilih Paket yang Sesuai Kebutuhan Anda
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="300">
            Untuk lebih lanjut konsultasi gratis dengan kami
          </p>
        </div>

        {/* Desktop Grid - hidden on small screens */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'lg:scale-105 border-2 border-orange-500 shadow-2xl bg-white'
                  : 'border-2 border-gray-200 shadow-lg bg-white hover:shadow-xl'
              }`}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 50}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                  Paling Populer
                </div>
              )}

              <div className={`p-6 ${ plan.popular ? 'pt-14' : 'pt-6'}`}>
                {/* Logo */}
                <div className="flex items-center justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-lg font-bold text-orange-500">K</span>
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">
                  {plan.name}
                </h3>
                <p className="text-xs text-gray-600 text-center mb-4">{plan.desc}</p>

                {/* Price */}
                <div className="mb-6 text-center">
                  <div className="text-3xl font-bold text-gray-900">
                    {formatCurrency(plan.price)}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-2 px-3 rounded-lg font-semibold text-sm transition-all duration-200 mb-6 ${
                    plan.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white'
                      : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  Pilih Paket
                </button>

                {/* Features List */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <FaCheck className="text-orange-500 mt-0.5 shrink-0" size={12} />
                      <span className="text-gray-700 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel - visible only on small/medium screens */}
        <div className="lg:hidden mb-12">
          <div
            id="pricing-carousel"
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative shrink-0 w-80 rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? 'border-2 border-orange-500 shadow-2xl bg-white'
                    : 'border-2 border-gray-200 shadow-lg bg-white'
                }`}
                data-aos="zoom-in"
                data-aos-delay={100 + index * 50}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    Paling Populer
                  </div>
                )}

                <div className={`p-8 ${ plan.popular ? 'pt-16' : 'pt-8'}`}>
                  {/* Logo */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                      <span className="text-xl font-bold text-orange-500">K</span>
                    </div>
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-4">{plan.desc}</p>

                  {/* Price */}
                  <div className="mb-6 text-center">
                    <div className="text-4xl font-bold text-gray-900">
                      {formatCurrency(plan.price)}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 mb-8 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                        : 'border-2 border-orange-500 text-orange-500 hover:bg-orange-50'
                    }`}
                  >
                    Pilih Paket
                  </button>

                  {/* Features List */}
                  <div className="space-y-3 border-t border-gray-200 pt-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheck className="text-orange-500 mt-1 shrink-0" size={16} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center py-8 border-t border-gray-200"
          data-aos="fade-up"
        >
          <p className="text-gray-600 text-base mb-4">
            Bingung paket custom? Konsultasi gratis sekarang →
          </p>
          <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
            💬 Chat WhatsApp Sekarang
          </button>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
