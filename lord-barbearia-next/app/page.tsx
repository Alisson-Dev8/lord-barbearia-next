import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <Navbar />
      <Hero />
      <SectionDivider icon />
      <Services />
      <SectionDivider />
      <Gallery />
      <SectionDivider icon />
      <About />
      <SectionDivider />
      <Testimonials />
      <SectionDivider icon />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
