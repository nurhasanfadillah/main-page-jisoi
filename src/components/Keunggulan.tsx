"use client";

import { motion } from "framer-motion";
import { Factory, Package, Shield, DollarSign, Zap, Palette } from "lucide-react";

const KEUNGGULAN = [
  { icon: Factory, title: "Produksi Sendiri", desc: "Pabrik sendiri di Cileungsi — harga pabrik langsung" },
  { icon: Zap, title: "Stok Siap Sablon", desc: "Tas polos ready stock — proses lebih cepat" },
  { icon: Palette, title: "Sablon DTF Full Color", desc: "Tanpa batas warna! Gradasi, foto, detail rumit" },
  { icon: Package, title: "MOQ Rendah", desc: "Mulai 10 pcs. Custom model? 50 pcs" },
  { icon: Shield, title: "5 Bahan Premium", desc: "D300, Cordura, Canvas, Bimo, Kulit Sintetis" },
  { icon: DollarSign, title: "Bisa Sample Dulu", desc: "Biaya sample bisa dikurangi dari total order" },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="relative py-20 lg:py-32 bg-navy-900/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-royal-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase text-cyan-400 glass rounded-full">
            Keunggulan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Alasan Bisnis <span className="gradient-text">Pilih JISOI</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Bukan cuma vendor — kami partner produksi yang bikin bisnis kamu lebih efisien.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {KEUNGGULAN.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-500 to-cyan-500 flex items-center justify-center mb-4">
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
