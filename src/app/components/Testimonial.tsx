"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMessageSquare, FiStar } from "react-icons/fi";
import { FileQuestion } from "@gravity-ui/icons";


export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Web Developer",
      company: "Digital Craft Studio",
      avatar: "SJ",
      content: "Worksy has completely transformed how I manage my freelance business. The AI Project Planner saves me hours of planning time, and the client management features keep everything organized.",
      rating: 5,
      image: null
    },
    {
      name: "Michael Chen",
      role: "UI/UX Designer",
      company: "Creative Pixel",
      avatar: "MC",
      content: "I've tried many project management tools, but Worksy is the only one designed specifically for freelancers. The payment tracking and task management features are game-changers.",
      rating: 5,
      image: null
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Marketer",
      company: "Marketing Pro",
      avatar: "ER",
      content: "The ability to manage clients, projects, and payments all in one place is invaluable. Worksy has helped me scale my business and stay organized.",
      rating: 5,
      image: null
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FiStar
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-white fill-white" : "text-white/20"
        }`}
      />
    ));
  };

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our
            <span className="relative inline-block mx-3">
              <span className="relative z-10 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Users Say
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-white/20 rounded-full blur-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Hear from freelancers who have transformed their workflow with Worksy
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              {/* Quote icon */}
              <FileQuestion className="absolute top-6 right-6 w-6 h-6 text-white/10 group-hover:text-white/20 transition-colors" />

              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-white/60 leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-white/40 text-xs">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-sm text-white/40">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">10K+</p>
            <p className="text-sm text-white/40">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">50K+</p>
            <p className="text-sm text-white/40">Projects Managed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">4.9</p>
            <p className="text-sm text-white/40">Average Rating</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/40 mb-6">
            Join thousands of satisfied freelancers
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10"
          >
            <FiMessageSquare className="w-4 h-4" />
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}