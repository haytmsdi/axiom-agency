import TextContent from "@/components/mentions-legales/text_content";
import ParticleNetwork from "@/components/particle-network/particle-network";

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="flex flex-col items-center overflow-clip z-20 pt-28 md:pt-20 lg:pt-[5.5rem]">
        <TextContent />
      </div>
      <ParticleNetwork />
          </>
  );
}
