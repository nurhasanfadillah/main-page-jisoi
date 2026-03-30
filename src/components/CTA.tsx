"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-navy-900/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-royal-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Siap Bikin Tas Custom <br />
            <span className="gradient-text">untuk Bisnis Kamu?</span>
          </h2>

          <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-400 mb-10">
            Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhan kamu — kami bantu dari nol.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6285717561096"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-royal-600 to-cyan-600 rounded-2xl hover:shadow-xl hover:shadow-royal-500/20 transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle size={20} />
              Konsultasi via WhatsApp →
            </a>
            <a
              href="https://shopee.co.id/jisoi.official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-orange-400 border border-orange-500/40 rounded-2xl hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag size={20} />
              Beli di Shopee
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
