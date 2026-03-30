"use client";

import { motion } from "framer-motion";
import { MessageCircle, PenTool, Factory, Truck } from "lucide-react";

const STEPS = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Konsultasi & Brief",
    desc: "Ceritakan kebutuhan tas kamu — model, jumlah, desain, deadline. Gratis, tanpa komitmen.",
    color: "from-royal-500 to-royal-700",
    accent: "text-royal-400",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Desain & Konfirmasi",
    desc: "Kami bantu rancang desain. Setelah cocok, konfirmasi detail dan harga final.",
    color: "from-cyan-500 to-cyan-700",
    accent: "text-cyan-400",
  },
  {
    icon: Factory,
    step: "03",
    title: "Produksi & QC",
    desc: "Proses produksi 7-14 hari. Setiap pcs melewati QC ketat sebelum packing.",
    color: "from-royal-600 to-cyan-600",
    accent: "text-cyan-300",
  },
  {
    icon: Truck,
    step: "04",
    title: "Kirim ke Lokasi",
    desc: "Packing aman, kirim ke seluruh Indonesia via JNE, J&T, atau SiCepat.",
    color: "from-cyan-600 to-royal-600",
    accent: "text-royal-300",
  },
];

export default function Proses() {
  return (
    <section id="proses" className="relative py-20 lg:py-32 bg-navy-900/50">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-royal-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase text-cyan-400 glass rounded-full">
            Proses Mudah
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            4 Langkah ke <span className="gradient-text">Tas Custom Kamu</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Transparan, tanpa ribet. Dari konsultasi sampai barang sampai — semua jelas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line (hidden on last item) */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-slate-600 to-transparent" />
              )}

              <div className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300 group-hover:-translate-y-1">
                {/* Step number */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={28} className="text-white" />
                </div>

                <span className={`text-xs font-bold ${item.accent} uppercase tracking-widest`}>
                  Langkah {item.step}
                </span>

                <h3 className="text-lg font-bold text-white mt-2 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
