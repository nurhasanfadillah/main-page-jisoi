import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Kredibilitas from "@/components/Kredibilitas";
import Problem from "@/components/Problem";
import Proses from "@/components/Proses";
import Produk from "@/components/Produk";
import Keunggulan from "@/components/Keunggulan";
import Testimoni from "@/components/Testimoni";
import Edukasi from "@/components/Edukasi";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-royal-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen">
        <Navbar />
        <Hero />
        <Kredibilitas />
        <Problem />
        <Proses />
        <Produk />
        <Keunggulan />
        <Testimoni />
        <Edukasi />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
