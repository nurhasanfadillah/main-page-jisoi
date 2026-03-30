"use client";

import { MapPin, Phone, Mail, ShoppingBag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-royal-500 to-cyan-500 flex items-center justify-center font-bold text-white">
                J
              </div>
              <span className="text-xl font-bold text-white">JISOI</span>
            </div>
            <p className="text-sm text-slate-400">
              Pabrik tas custom terpercaya. Produksi sendiri, harga pabrik langsung.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-4">Produk</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Cluta</li>
              <li>Pouch Dompet</li>
              <li>Handbag Premium</li>
              <li>Tas Selempang</li>
              <li>Backpack</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-royal-400" />
                <span>Jl. Raya Cileungsi - Jonggol Km. 10, Bogor</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <a href="https://wa.me/6285717561096" className="hover:text-white">0857 1756 1096</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-royal-400" />
                <a href="mailto:info@jisoi.net" className="hover:text-white">info@jisoi.net</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white uppercase mb-4">Marketplace</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a
                  href="https://shopee.co.id/jisoi.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <ShoppingBag size={16} className="text-orange-400" />
                  Shopee — jisoi.official
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © 2026 PT Redone Berkah Mandiri Utama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
