"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  FiUserPlus, 
  FiBriefcase, 
  FiCheckCircle,
  FiArrowRight,
  FiCpu,
  FiUsers,
  FiDollarSign
} from "react-icons/fi";

export default function HowItWorksSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      icon: FiUserPlus,
      title: "Create Your Account",
      description: "Sign up for free and set up your freelance profile in minutes.",
      number: "01"
    },
    {
      icon: FiUsers,
      title: "Add Clients & Projects",
      description: "Add your clients, create projects, and set budgets and deadlines.",
      number: "02"
    },
    {
      icon: FiCpu,
      title: "Let AI Plan Your Work",
      description: "Use the AI Project Planner to generate tasks from your project description.",
      number: "03"
    },
    {
      icon: FiCheckCircle,
      title: "Track & Manage Tasks",
      description: "Break down projects into tasks, set priorities, and track progress.",
      number: "04"
    },
    {
      icon: FiDollarSign,
      title: "Monitor Payments",
      description: "Track budgets, received payments, and outstanding balances.",
      number: "05"
    },
    {
      icon: FiArrowRight,
      title: "Grow Your Business",
      description: "Get insights and analytics to scale your freelance business.",
      number: "06"
    },
  ];

  return (
    <section className="relative w-full py-24 bg-black/50 overflow-hidden">
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Started in
            <span className="relative inline-block mx-3">
              <span className="relative z-10 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Simple Steps
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-white/20 rounded-full blur-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            From setup to success — follow these steps to manage your freelance business efficiently
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                {/* Number */}
                <div className="absolute -top-3 -right-3 text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/40 leading-relaxed">
                  {step.description}
                </p>

                {/* Step indicator */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-white/10 group-hover:bg-white/30 transition-colors" />
              </div>

              {/* Connector line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/5">
                  <FiArrowRight className="absolute -right-1 -top-2 w-4 h-4 text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10"
          >
            Start Your Free Trial
            <FiArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}