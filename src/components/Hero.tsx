"use client";

import { motion } from "framer-motion";
import { ArrowDown, Shield, Factory, Package, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-royal-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full"
        >
          <Shield size={16} className="text-cyan-400" />
          <span className="text-sm text-slate-300">
            Pabrik Tas Custom Terpercaya — Produksi Sendiri
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          <span className="text-white">Tas Custom untuk</span>
          <br />
          <span className="gradient-text">Bisnis yang Berkembang</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10"
        >
          Harga pabrik langsung, MOQ mulai 10 pcs, kapasitas 30.000+ pcs/bulan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://wa.me/6285717561096"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-royal-600 to-cyan-600 rounded-2xl hover:shadow-xl hover:shadow-royal-500/20 transition-all hover:scale-105"
          >
            Konsultasi Gratis via WhatsApp →
          </a>
          <a
            href="https://shopee.co.id/jisoi.official"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 text-lg font-semibold text-white border border-slate-600 rounded-2xl hover:bg-white/5 transition-all"
          >
            Lihat di Shopee
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: Factory, value: "30.000+", label: "Kapasitas/bulan" },
            { icon: Package, value: "24", label: "Model Tas" },
            { icon: Shield, value: "10", label: "MOQ (pcs)" },
            { icon: Zap, value: "DTF", label: "Sablon Full Color" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-4 text-center">
              <stat.icon size={20} className="mx-auto mb-2 text-cyan-400" />
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={24} className="mx-auto text-slate-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
