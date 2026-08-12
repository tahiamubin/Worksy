"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  FiArrowRight, 
  FiUsers, 
  FiBriefcase, 
  FiCheckCircle, 
  FiDollarSign,
  FiZap,
  FiCpu,
  FiShield,
  FiTrendingUp
} from "react-icons/fi";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: FiUsers, label: "Clients Managed", value: "10K+" },
    { icon: FiBriefcase, label: "Projects Tracked", value: "50K+" },
    { icon: FiCheckCircle, label: "Tasks Completed", value: "100K+" },
    { icon: FiDollarSign, label: "Payments Processed", value: "$2M+" },
  ];

  const features = [
    {
      icon: FiZap,
      title: "AI Project Planner",
      description: "Automatically generate project tasks from a simple description using AI",
    },
    {
      icon: FiCpu,
      title: "Smart Automation",
      description: "Streamline your workflow with intelligent task management",
    },
    {
      icon: FiShield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with Auth.js authentication",
    },
    {
      icon: FiTrendingUp,
      title: "Real-time Insights",
      description: "Track payments, deadlines, and progress at a glance",
    },
  ];

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-[600px] w-[600px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-white/5 blur-3xl" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 flex items-center min-h-screen px-6 py-20 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-xs font-medium text-white/60 uppercase tracking-wider">
                  Launching Soon
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                The All-in-One
                <span className="relative inline-block mx-3">
                  <span className="relative z-10 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Freelance
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-white to-white/20 rounded-full blur-sm"></span>
                </span>
                <br />
                Management Platform
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white/60 leading-relaxed mb-8 max-w-lg"
              >
                Manage clients, projects, tasks, and payments in one place. 
                Let AI handle the planning while you focus on delivering exceptional work.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link href="/signup">
                  <button className="group relative px-8 py-4 bg-white text-black font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-white/10">
                    <span className="absolute -inset-0.5 rounded-xl bg-white/20 blur group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      Get Started Free
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </Link>
                <Link href="/features">
                  <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all duration-300">
                    See Features
                  </button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-white/40" />
                    </div>
                    <p className="text-xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Features Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Floating decoration */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

              <div className="relative grid gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* AI Feature Highlight */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-6 p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-transparent backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="absolute -inset-1 rounded-full bg-white/20 blur"></div>
                        <div className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center">
                          <FiCpu className="w-8 h-8 text-black" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        AI Project Planner
                      </h4>
                      <p className="text-sm text-white/40">
                        Describe your project and let AI generate a complete task list instantly.
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                          🚀 Save hours
                        </span>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                          💡 Smart suggestions
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}