"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "I am very impressed to work with him. He is a very good and skilled person. I want to work with him again.",
    attribution: "Agency Owner",
  },
  {
    quote:
      "He is my partner. We work together. When I fall into an error or any other problem he support me always.",
    attribution: "HVAC Business",
  },
  {
    quote:
      "I was give him to make an webpage. He made me an awesome website. I recommend himself and wanna work with him again.",
    attribution: "SaaS Founder",
  },
  {
    quote:
      "I was finding someone to help me to build my Grocery website for my store. He made me an E-commerce Store. I am satisfied with his work.",
    attribution: "Trading Group",
  },
  {
    quote:
      "Really hard-working person. Deliver the work as promised. Planning to work more with this person.",
    attribution: "Automation Client",
  },
  {
    quote:
      "Ralph is a person of commitment. He is really good at what he is doing. I really like his work. Especially the unique point of view of designing.",
    attribution: "CTO",
  },
  {
    quote:
      "Really amazing communication skills. Always understand what I am trying to achieve. Also, his work is really amazing. Do really high-quality work.",
    attribution: "Marketing Agency",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate how many slides we can show (sliding window of 3)
  // If we have 10 items, we can show positions 0-7 (showing items 0-2, 1-3, 2-4, ..., 7-9)
  const maxIndex = Math.max(0, testimonials.length - 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 3000); // Auto-rotate every 3 seconds

    return () => clearInterval(interval);
  }, [maxIndex]);

  // Get the 3 items to display starting from currentIndex
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What My Clients Say
          </h2>
          <p className="text-slate-400 text-muted-foreground max-w-2xl mx-auto">
            Operators choose Ralph when outcomes matter.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex + index}`}
                className="bg-card p-8 rounded-2xl border border-gray-600 hover:border-gray-400 transition-all duration-700 ease-in-out hover:scale-105 group relative"
                style={{
                  animation: 'fadeInSlideRight 1s ease-in-out',
                }}
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                </div>

                <div className="pt-4 mb-6">
                  <p className="text-muted-foreground text-gray-400 italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold">{testimonial.attribution}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation dots */}
          {testimonials.length > 3 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <button
                  type="button"
                  key={`dot-${idx}`}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 w-6 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "bg-black"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

