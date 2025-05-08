import InteriorBanner from "@/components/conditions-d-utilisation/interior_banner";
import TextContent from "@/components/conditions-d-utilisation/text_content";
import ParticleNetwork from "@/components/particle-network/particle-network";

export default function ConditionsDutilisationPage() {
  return (
    <>
      <div className="flex flex-col items-center overflow-clip z-20">
        <InteriorBanner />
        <TextContent />
      </div>
      <ParticleNetwork />
    </>
  );
}
