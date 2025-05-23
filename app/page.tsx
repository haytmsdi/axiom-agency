import Hero from "@/components/home/hero";
import Services4 from "@/components/home/services4";
import Logos from "@/components/home/logos";
import Steps4 from "@/components/home/steps4";
import Faq from "@/components/home/faq";
import Cta from "@/components/home/cta";
import ParticleNetwork from "@/components/particle-network/particle-network";
import FilloutEmbed from "@/components/home/fillout-embed";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col items-center overflow-clip z-20">
        <Hero />
        <FilloutEmbed />
        <Services4 />
        <Logos />
        <Steps4 />
        <Faq />
        <Cta />
      </div>
      <ParticleNetwork />
    </>
  );
}
