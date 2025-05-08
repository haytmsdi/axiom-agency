import InteriorBanner from "@/components/conditions-d-utilisation/interior_banner";
import TextContent from "@/components/conditions-d-utilisation/text_content";
import Particles from "@/components/particles/particles";

export default function ConditionsDutilisationPage() {
  return (
    <>
      <div className="flex flex-col items-center overflow-clip z-20">
        <InteriorBanner />
          <TextContent />
      </div>
      <Particles className="absolute inset-0 pointer-events-none z-20" quantity={15} shouldAdaptToTheme={true} />
          </>
  );
}
