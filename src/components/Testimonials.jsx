import React, { useState, useEffect } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

/**
 * Testimonial Card Component
 * - Client testimonial with image, name, company, and rating
 */
function TestimonialCard({ testimonial }) {
  if (!testimonial) return null;

  return (
    <div className="p-8 rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-sm hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300">
      {/* Star Rating */}
      <div className="flex gap-2 mb-4">
        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
          <FaStar key={i} className="text-emerald-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-300 text-lg mb-6 leading-relaxed">
        &ldquo;{testimonial.testimonial || testimonial.quote}&rdquo;
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        {testimonial.image && (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
          />
        )}

        <div>
          <h4 className="font-bold text-white">{testimonial.name}</h4>

          <p className="text-gray-500 text-sm">
            {testimonial.title || testimonial.role}
          </p>

          {testimonial.company && (
            <p className="text-emerald-400 text-sm font-semibold">
              {testimonial.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Testimonials Section Component
 * - Carousel of client testimonials
 * - Navigation controls
 */
export default function Testimonials() {
  const { testimonials = [] } = portfolioData;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
    setIsAutoPlay(false);
  };

  // Get visible testimonials
  const visibleCount =
    typeof window !== 'undefined' && window.innerWidth < 768
      ? 1
      : Math.min(3, testimonials.length);

  const visibleTestimonials = Array.from({
    length: visibleCount,
  }).map(
    (_, i) =>
      testimonials[(currentIndex + i) % testimonials.length]
  );

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 bg-[#050505] border-t border-white/10 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Clients{' '}
            <span className="text-emerald-400">
              Say
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Testimonials from satisfied clients and colleagues
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-emerald-400 mx-auto mt-6 rounded-full shadow-lg shadow-emerald-500/20" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-slide-up"
            >
              <TestimonialCard
                testimonial={testimonial}
              />
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-8">
          {/* Previous */}
          <button
            onClick={handlePrev}
            className="bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 p-3 rounded-full text-emerald-400 transition-all duration-300 shadow-sm shadow-emerald-500/10"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlay(false);
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-emerald-500 w-8 shadow-md shadow-emerald-500/30'
                    : 'bg-white/15 hover:bg-emerald-500/40 w-3'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={handleNext}
            className="bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black hover:border-emerald-400 p-3 rounded-full text-emerald-400 transition-all duration-300 shadow-sm shadow-emerald-500/10"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Autoplay Toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="text-sm text-gray-500 hover:text-emerald-400 transition-colors duration-300"
          >
            {isAutoPlay ? '⏸ Pause' : '▶ Play'} Autoplay
          </button>
        </div>
      </div>
    </section>
  );
}