"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CATEGORIES = ["Semua", "Souvenir", "Merchandise", "Premium"];

const PRODUCTS = [
  { name: "Cluta", category: "Souvenir", desc: "Clutch compact untuk souvenir acara & wedding", image: "/products/cluta.png" },
  { name: "Pouch Dompet", category: "Merchandise", desc: "Pouch serbaguna untuk merchandise brand", image: "/products/athae.png" },
  { name: "Handbag Premium", category: "Premium", desc: "Handbag premium dengan bahan kulit sintetis", image: "/products/apenta.png" },
  { name: "Tas Selempang", category: "Merchandise", desc: "Selempang mini yang praktis", image: "/products/selempang.png" },
  { name: "Tas Serut", category: "Souvenir", desc: "Goodie bag serut — simple, murah, efektif", image: "/products/aruma.png" },
  { name: "Backpack", category: "Premium", desc: "Backpack custom dengan kapasitas besar", image: "/products/bagpack.png" },
  { name: "Waist Bag", category: "Merchandise", desc: "Tas pinggang trendi untuk komunitas & event", image: "/products/waistbag.png" },
  { name: "Tas Laptop", category: "Premium", desc: "Tas laptop custom untuk corporate & kampus", image: "/products/taslaptop.png" },
  { name: "Tote Bag", category: "Merchandise", desc: "Tote bag everyday — ringan, kuat, serbaguna", image: "/products/axelo.png" },
];

export default function Produk() {
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section id="produk" className="relative py-20 lg:py-32">
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase text-cyan-400 glass rounded-full">
            Koleksi Produk
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            9 Model Tas <span className="gradient-text">Siap Custom</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-400">
            Dari souvenir sampai merchandise premium — pilih model, custom desain, mulai dari 10 pcs.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                active === cat
                  ? "bg-gradient-to-r from-royal-600 to-cyan-600 text-white"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="relative h-56 bg-gradient-to-br from-navy-800 to-navy-900">
                <Image
                  src={product.image}
                  alt={`${product.name} - ${product.desc} | Tas custom JISOI kategori ${product.category}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{product.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{product.desc}</p>
                <a
                  href={`https://wa.me/6285717561096?text=Halo%20JISOI,%20saya%20mau%20tanya%20harga%20${encodeURIComponent(product.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Tanya Harga →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
