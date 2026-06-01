import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import SelectedWork from "@/components/home/SelectedWork";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Pricing from "@/components/home/Pricing";
import ContactPreview from "@/components/home/ContactPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <SelectedWork />
      <About />
      <Services />
      <Pricing />
      <ContactPreview />
    </>
  );
}
