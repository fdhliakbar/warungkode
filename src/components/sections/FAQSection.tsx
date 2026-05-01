'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'Berapa lama pengerjaan website?',
    answer: 'Waktu pengerjaan website tergantung kompleksitas. Untuk paket Starter biasanya 2-3 minggu, Growth 3-4 minggu, dan Premium bisa lebih fleksibel sesuai kebutuhan.',
  },
  {
    question: 'Bagaimana proses pembayaran?',
    answer: 'Kami menerima pembayaran melalui transfer bank, e-wallet, dan cicilan. Proses pembayaran dimulai dari 50% di awal untuk deposit, dan sisanya setelah project selesai.',
  },
  {
    question: 'Apakah bisa request fitur khusus?',
    answer: 'Tentu saja bisa! Kami menyediakan custom feature sesuai kebutuhan bisnis Anda. Silakan konsultasi terlebih dahulu untuk mengetahui estimasi biaya dan waktu tambahan.',
  },
  {
    question: 'Apakah sudah termasuk domain & hosting?',
    answer: 'Untuk paket Growth dan Premium sudah termasuk domain gratis 1 tahun dan hosting. Untuk paket Starter, bisa menambah sebagai addon dengan biaya terpisah.',
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="text-orange-500 font-semibold text-sm md:text-base tracking-wide uppercase mb-3" data-aos="fade-up" data-aos-delay="100">
            PERTANYAAN YANG SERING DIAJUKAN
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900" data-aos="fade-up" data-aos-delay="200">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4" data-aos="fade-up">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-left text-base md:text-lg font-semibold text-gray-900">
                  {item.question}
                </span>
                <FaChevronDown
                  className={`flex-shrink-0 text-orange-500 transition-transform duration-300 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                  size={18}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 py-4 md:px-8 md:py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 md:mt-16 text-center"
          data-aos="fade-up"
        >
          <p className="text-gray-600 text-base mb-4">
            Masih ada pertanyaan? Hubungi kami sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              💬 Chat WhatsApp
            </button>
            <button className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              📧 Email Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
