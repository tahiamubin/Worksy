"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RiMicAiLine } from "react-icons/ri";
import { BiPhone } from "react-icons/bi";
import { ArrowUpRight, MapPinMinus } from "@gravity-ui/icons";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { GiThunderBlade } from "react-icons/gi";
import { LiaLinkedinIn } from "react-icons/lia";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
      { label: "Integrations", href: "/integrations" },
      { label: "Changelog", href: "/changelog" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "Help Center", href: "/help" },
      { label: "Community", href: "/community" },
      { label: "Status", href: "/status" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "GDPR", href: "/gdpr" },
    ],
  };

  const socialLinks = [
    { icon: BsTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: GiThunderBlade, href: "https://github.com", label: "GitHub" },
    { icon:LiaLinkedinIn , href: "https://linkedin.com", label: "LinkedIn" },
    { icon: BsYoutube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-white/20 blur-xl"></div>
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <span className="text-lg font-bold text-black">W</span>
                </div>
              </div>
              <Link href="/" className="text-xl font-bold text-white">
                Worksy
              </Link>
            </div>
            
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Streamline your workflow, manage projects, and collaborate with your team 
              in one powerful platform.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/40 hover:text-white/60 transition-colors">
                <RiMicAiLine className="w-4 h-4" />
                <span className="text-sm">hello@worksy.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 hover:text-white/60 transition-colors">
                <BiPhone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 hover:text-white/60 transition-colors">
                <MapPinMinus className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 rounded-full bg-white/5 blur group-hover:bg-white/10 transition-all duration-300"></div>
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 hover:text-white transition-all duration-300">
                    <social.icon className="w-4 h-4" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 + 0.2 }}
            >
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1 text-white/40 hover:text-white transition-all duration-200 text-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/30 text-sm">
            © {currentYear} Worksy. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              Terms
            </Link>
            <Link 
              href="/cookies" 
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              Cookies
            </Link>
            <button 
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top ↑
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}