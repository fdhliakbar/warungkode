'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Arifin',
    role: 'Owner Toko Kopi',
    company: 'Kopi Kita',
    image: '👨‍💼',
    quote:
      'Website yang dibuat Warung Kode sangat profesional dan mudah digunakan. Penjualan kami meningkat 150% setelah pakai website baru!',
    rating: 5,
  },
  {
    name: 'Dewi Lestari',
    role: 'Owner Laundry',
    company: 'LaundryKuy',
    image: '👩‍💼',
    quote:
      'WhatsApp Bot dari Warung Kode sangat membantu, customer bisa booking otomatis 24/7. Sangat rekomendasi!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Pemilik Bengkel',
    company: 'Bengkel Jaya',
    image: '👨‍🔧',
    quote:
      'Tim Warung Kode profesional dan responsif. Project selesai tepat waktu dengan hasil yang memuaskan. Terima kasih!',
    rating: 5,
  },
  {
    name: 'Siti Aminah',
    role: 'Manager Marketing',
    company: 'Sahabat Print',
    image: '👩‍💻',
    quote:
      'Integrasi sistem yang dibuat sangat smooth. Customer kami puas dengan kemudahan transaksi online.',
    rating: 5,
  },
  {
    name: 'Ahmad Rahman',
    role: 'Owner Homestay',
    company: 'Homestayku',
    image: '👨‍💼',
    quote:
      'Booking system yang dibuat Warung Kode membuat manajemen homestay jadi lebih mudah dan efisien.',
    rating: 5,
  },
  {
    name: 'Lisa Wijaya',
    role: 'Direktur Operasional',
    company: 'Toko Bangunan',
    image: '👩‍💼',
    quote:
      'Website dan WhatsApp Bot membantu kami handle customer inquiry dengan lebih baik. ROI-nya jelas terlihat!',
    rating: 5,
  },
  {
    name: 'Eko Priyanto',
    role: 'Owner Restoran',
    company: 'Resto Warung',
    image: '👨‍🍳',
    quote:
      'Dari consultation hingga after-sales service, tim Warung Kode sangat membantu. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Maya Kusuma',
    role: 'Business Owner',
    company: 'Fashion Online',
    image: '👩‍💼',
    quote:
      'Sistem inventory yang terintegrasi membuat bisnis online saya jadi lebih terorganisir. Sangat memuaskan!',
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const currentTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="testimonial" className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="text-orange-500 font-semibold text-sm md:text-base tracking-wide uppercase mb-3" data-aos="fade-up" data-aos-delay="100">
            TESTIMONI
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
            Apa Kata Klien Kami?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {currentTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
            >
              {/* Quote Icon */}
              <div className="text-4xl text-orange-500 mb-4">a</div>

              {/* Quote Text */}
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={16} />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} - {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Radio Button Navigation */}
        <div
          className="flex justify-center gap-2 flex-wrap"
          data-aos="fade-up"
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentPage === index
                  ? 'bg-orange-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}