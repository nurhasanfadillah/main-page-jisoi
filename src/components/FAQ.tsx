"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  { q: "Berapa minimum order?", a: "Untuk custom logo/teks, minimum 10 pcs. Full custom model mulai dari 50 pcs." },
  { q: "Berapa harga per pcs?", a: "Range harga pabrik mulai dari Rp7.800 - Rp32.500/pcs tergantung model dan bahan. Konsultasi via WhatsApp untuk harga spesifik." },
  { q: "Berapa lama proses produksi?", a: "Estimasi standar 7-14 hari kerja. Order partai besar (500+ pcs) sekitar 2-4 minggu." },
  { q: "Bisa bikin sample dulu?", a: "Bisa! Biaya sample bisa dikurangi dari total order nanti." },
  { q: "Bahan apa aja yang tersedia?", a: "Ada 5 pilihan: D300/Dinir, Cordura, Canvas, Bimo Waterproof, dan Kulit Sintetis." },
  { q: "Bisa kirim ke luar kota?", a: "Bisa! Kirim ke seluruh Indonesia via JNE, J&T, SiCepat." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase text-cyan-400 glass rounded-full">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Pertanyaan <span className="gradient-text">Umum</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Jawaban untuk pertanyaan yang sering ditanyakan tentang layanan kami.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full glass rounded-xl p-5 text-left hover:bg-white/10 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-white pr-4">{item.q}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={20} className="text-slate-400" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-2">
                      <p className="text-sm text-slate-400">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
