"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Tentang", href: "#kredibilitas" },
  { label: "Proses", href: "#proses" },
  { label: "Produk", href: "#produk" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Navigasi utama"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-2" aria-label="JISOI - Kembali ke beranda">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-500 to-cyan-500 flex items-center justify-center font-bold text-white" aria-hidden="true">
                J
              </div>
              <span className="text-xl font-bold text-white">JISOI</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-royal-400 focus:ring-offset-2 focus:ring-offset-navy-900 rounded-lg px-2 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://shopee.co.id/jisoi.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-400 border border-orange-500/40 rounded-full hover:bg-orange-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-orange-400"
                aria-label="Buka toko JISOI di Shopee (buka di tab baru)"
              >
                <ShoppingBag size={16} aria-hidden="true" />
                Shopee
              </a>
              <a
                href="https://wa.me/6285717561096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-royal-600 to-cyan-600 rounded-full hover:shadow-lg hover:shadow-royal-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
                aria-label="Konsultasi gratis via WhatsApp (buka di tab baru)"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Konsultasi Gratis
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-royal-400 rounded-lg"
              aria-label={mobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {mobileOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl md:hidden pt-20"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi mobile"
        >
          <div className="flex flex-col items-center gap-6 p-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4 w-full max-w-xs">
              <a
                href="https://shopee.co.id/jisoi.official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-orange-400 border border-orange-500/40 rounded-full"
              >
                <ShoppingBag size={18} />
                Shopee
              </a>
              <a
                href="https://wa.me/6285717561096"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-royal-600 to-cyan-600 rounded-full"
              >
                <MessageCircle size={18} />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
