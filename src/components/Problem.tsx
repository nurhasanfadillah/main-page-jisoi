"use client";

import { motion } from "framer-motion";
import { DollarSign, Clock, ShieldOff, AlertTriangle, CheckCircle2 } from "lucide-react";

const PROBLEMS = [
  { icon: DollarSign, problem: "Harga Tidak Transparan", desc: "Ditawar mahal, ternyata dari makelar" },
  { icon: ShieldOff, problem: "Kualitas Tidak Konsisten", desc: "Batch pertama bagus, batch kedua beda" },
  { icon: Clock, problem: "MOQ Terlalu Tinggi", desc: "Minimum 500-1000 pcs. UMKM mana sanggup?" },
  { icon: AlertTriangle, problem: "Vendor Abal-Abal", desc: "Foto bagus, hasil beda. Komplain susah" },
];

export default function Problem() {
  return (
    <section className="relative py-20 lg:py-32">
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase text-red-400 glass rounded-full">
            Masalah Umum
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Pernah Kena <span className="text-red-400">Tipu</span> Vendor Tas?
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Banyak bisnis mengalami ini. Kamu nggak sendirian — dan ada solusinya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PROBLEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 border-l-4 border-red-500/50"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <item.icon size={20} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.problem}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-2xl">
            <CheckCircle2 size={20} className="text-cyan-400" />
            <span className="text-slate-300">
              JISOI hadir sebagai solusi — <strong className="text-white">produksi sendiri, harga transparan</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
