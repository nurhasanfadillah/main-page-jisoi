"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Users, Calendar, Award } from "lucide-react";

const ITEMS = [
  {
    icon: Building2,
    title: "PT Resmi",
    desc: "PT Redone Berkah Mandiri Utama — perusahaan legal, bukan rumahan",
  },
  {
    icon: MapPin,
    title: "Pabrik Sendiri",
    desc: "Jl. Raya Cileungsi - Jonggol Km. 10, Bogor — bisa visit langsung",
  },
  {
    icon: Calendar,
    title: "Produksi 7-14 Hari",
    desc: "Timeline real, transparan. 500+ pcs? 2-4 minggu",
  },
  {
    icon: Users,
    title: "500+ Bisnis Terlayani",
    desc: "EO, UMKM, corporate, komunitas — repeat order bukti kepercayaan",
  },
  {
    icon: Award,
    title: "QC Ketat Setiap Pcs",
    desc: "Setiap produk melewati quality control. Defect? Kami ganti.",
  },
];

export default function Kredibilitas() {
  return (
    <section id="kredibilitas" className="relative py-20 lg:py-32 bg-navy-900/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-royal-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase text-cyan-400 glass rounded-full">
            Kenapa JISOI?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Bukan Sekadar Klaim — <span className="gradient-text">Ini Buktinya</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Kami nggak cuma bilang terpercaya. Kami tunjukkan dengan fakta yang bisa diverifikasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-royal-500 to-cyan-500 flex items-center justify-center mb-4">
                <item.icon size={22} className="text-white" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="glass rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1"
          >
            <div className="w-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8!2d106.9609!3d-6.4627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69951234567890%3A0xabcdef1234567890!2sJl.+Raya+Cileungsi+-+Jonggol+Km.+10%2C+Cipeucang%2C+Kec.+Cileungsi%2C+Kabupaten+Bogor%2C+Jawa+Barat+16820!5e0!3m2!1sid!2sid!4v1711000000000"
                width="100%"
                height="200"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) saturate(0.5) brightness(0.9)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-2xl"
                title="Peta lokasi Pabrik JISOI di Jl. Raya Cileungsi - Jonggol Km. 10, Cileungsi, Bogor"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <MapPin size={16} className="text-royal-400 flex-shrink-0" aria-hidden="true" />
                <span>Cileungsi, Kabupaten Bogor, Jawa Barat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
