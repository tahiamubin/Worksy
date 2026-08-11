"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CgArrangeBack } from "react-icons/cg";


type NavItem = {
  label: string;
  href: string;
  icon: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: "layout-dashboard" },
  { label: "Clients", href: "/clients", icon: "users" },
  { label: "Projects", href: "/projects", icon: "briefcase" },
  { label: "Tasks", href: "/tasks", icon: "checklist" },
  { label: "Payments", href: "/payments", icon: "credit-card" },
  { label: "Signup", href: "/signup", icon: "credit-card" },

];

type NavUser = {
  name: string;
  email: string;
  imageUrl?: string;
};

type AppNavbarProps = {
  user: NavUser;
};

export default function AppNavbar({ user }: AppNavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string): boolean =>
    pathname === href || pathname?.startsWith(`${href}/`);

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
    },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-white/5" 
          : "bg-black"
      } border-b border-white/10`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-white/20 blur-xl"></div>
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white">
              <span className="text-lg font-bold text-black"><CgArrangeBack /></span>
            </div>
          </div>
          <Link 
            href="/dashboard" 
            className="text-2xl font-bold text-white"
          >
            Worksy
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full bg-white/5 px-2 py-1 backdrop-blur-sm border border-white/10 md:flex">
          {NAV_ITEMS.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-black"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {isActive(item.href) && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", duration: 0.6, bounce: 0.2 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Profile section */}
        {/* <div className="hidden items-center gap-4 md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="hidden text-right sm:block"
          >
            <p className="text-sm font-medium text-white">{user.name}</p>
            <p className="text-xs text-white/40">{user.email}</p>
          </motion.div>
          
          <Link href="/profile" aria-label="Profile settings">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-white/20 blur-md"></div>
              <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/30 shadow-lg shadow-white/10">
                {user.imageUrl ? (
                  <img
                    src={user.imageUrl}
                    alt={user.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-white text-sm font-bold text-black">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
            </motion.div>
          </Link>

        
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-0.5 rounded-full bg-white/20 blur group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative rounded-full bg-white px-5 py-2 text-sm font-semibold text-black shadow-lg shadow-white/10">
              Sign up
            </div>
          </motion.button>
        </div> */}

        {/* Mobile hamburger */}
        <motion.button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-4 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-full bg-white"
              animate={{
                rotate: menuOpen ? 45 : 0,
                y: menuOpen ? 7 : 0,
              }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute left-0 top-1/2 h-0.5 w-full bg-white -translate-y-1/2"
              animate={{
                opacity: menuOpen ? 0 : 1,
                x: menuOpen ? -10 : 0,
              }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 w-full bg-white"
              animate={{
                rotate: menuOpen ? -45 : 0,
                y: menuOpen ? -7 : 0,
              }}
              transition={{ duration: 0.25 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 py-6">
              {/* User info card */}
              {/* <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-2xl bg-white/5 p-4 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-full bg-white/20 blur-md"></div>
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white/30">
                      {user.imageUrl ? (
                        <img
                          src={user.imageUrl}
                          alt={user.name}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-white text-lg font-bold text-black">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{user.name}</p>
                    <p className="text-sm text-white/40">{user.email}</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Navigation items */}
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-white text-black"
                        : "text-white/60 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`text-lg ${
                        isActive(item.href) ? "text-black" : "text-white/30"
                      }`}>•</span>
                      {item.label}
                    </span>
                    {isActive(item.href) && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-xs font-bold text-white"
                      >
                        ✓
                      </motion.span>
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Sign up button in mobile */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black shadow-lg shadow-white/10"
              >
                Sign up
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}