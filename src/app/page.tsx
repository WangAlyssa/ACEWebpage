import { LocaleProvider } from "@/lib/locale-context";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Campuses from "@/components/Campuses";
import CreditPolicy from "@/components/CreditPolicy";
import Benefits from "@/components/Benefits";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import News from "@/components/News";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";

export default function Home() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />
        <Campuses />
        <CreditPolicy />
        <Benefits />
        <Team />
        <Testimonials />
        <Gallery />
        <News />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <FloatingChat />
    </LocaleProvider>
  );
}
