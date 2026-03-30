"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";

const TIPS = [
  {
    title: "Cek Produksi Sendiri atau Makelar",
    desc: "Vendor yang produksi sendiri = harga lebih kompetitif + kualitas konsisten. Makelar sering markup 30-50%.",
  },
  {
    title: "MOQ Rendah = Risiko Rendah",
    desc: "Mau coba vendor baru? Cari yang MOQ-nya rendah. Kalau hasilnya bagus, baru naikin volume.",
  },
  {
    title: "Minta Sample Sebelum Order Besar",
    desc: "Sample bukan biaya — itu investasi. Biaya sample yang bisa dikurangi dari total order = vendor serius.",
  },
  {
    title: "Garansi & QC Itu Wajib, Bukan Bonus",
    desc: "Vendor yang berani garansi = vendor yang percaya sama kualitasnya. Kalau nggak ada garansi, waspada.",
  },
];

export default function Edukasi() {
  return (
    <section className="relative py-20 lg:py-32 bg-navy-900/50">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-royal-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase text-cyan-400 glass rounded-full">
            <Lightbulb size={14} className="inline mr-1 -mt-0.5" aria-hidden="true" />
            Tips Gratis
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Cara Pilih Vendor Tas <span className="gradient-text">yang Tepat</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Edukasi dulu, jualan belakangan. Ini 4 hal yang harus dicek sebelum pilih vendor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TIPS.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 size={18} className="text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {tip.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-2xl">
            <span className="text-sm text-slate-300">
              Mau konsultasi lebih lanjut? Gratis, tanpa komitmen.
            </span>
            <a
              href="https://wa.me/6285717561096"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-royal-400 hover:text-royal-300 transition-colors flex items-center gap-1"
              aria-label="Hubungi JISOI via WhatsApp untuk konsultasi gratis"
            >
              Hubungi Kami <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
