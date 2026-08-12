"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
  FiDollarSign,
  FiTrendingUp,
  FiZap,
  FiCpu,
} from "react-icons/fi";

export default function FeaturesSection() {


  const features = [
    {
      icon: FiUsers,
      title: "Client Management",
      description:
        "Manage all your clients in one place. Store contact info, company details, and project history.",
      color: "white",
    },
    {
      icon: FiBriefcase,
      title: "Project Management",
      description:
        "Track projects from planning to completion. Set budgets, deadlines, and monitor progress.",
      color: "white",
    },
    {
      icon: FiCheckCircle,
      title: "Task Management",
      description:
        "Break projects into manageable tasks. Set priorities, due dates, and track completion.",
      color: "white",
    },
    {
      icon: FiDollarSign,
      title: "Payment Tracking",
      description:
        "Monitor project budgets, track received payments, and manage outstanding balances.",
      color: "white",
    },
    {
      icon: FiCpu,
      title: "AI Project Planner",
      description:
        "Generate project tasks instantly from a description. Save hours of planning time.",
      color: "white",
    },
    {
      icon: FiTrendingUp,
      title: "Analytics Dashboard",
      description:
        "Get real-time insights into your business performance with visual analytics and reports.",
      color: "white",
    },
  ];

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
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything You Need to
            <span className="relative inline-block mx-3">
              <span className="relative z-10 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Succeed
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-white/20 rounded-full blur-sm"></span>
            </span>
          </h2>
          <p className="text-lg text-white/40 max-w-2xl mx-auto">
            Powerful tools designed specifically for freelancers to manage their
            entire workflow
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-white/40 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-white/20 group-hover:w-full transition-all duration-300" />
              </div>
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
          <p className="text-white/40 mb-6">
            Ready to streamline your freelance business?
          </p>
          <a
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10"
          >
            Get Started Now
            <FiZap className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
