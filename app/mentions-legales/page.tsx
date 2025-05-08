import TextContent from "@/components/mentions-legales/text_content";
import Particles from "@/components/particles/particles";

export default function MentionsLegalesPage() {
  return (
    <>
      <div className="flex flex-col items-center overflow-clip z-20 pt-28 md:pt-20 lg:pt-[5.5rem]">
        <TextContent />
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={15} shouldAdaptToTheme={true} />
          </>
  );
}
