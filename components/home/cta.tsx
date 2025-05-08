"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

export default function Cta() { const ANIM_DURATION = parseFloat("1.5");
const ANIM_EASING = JSON.parse("[0,0,1,1]");
const TRANSITION_ANIM_TYPE = "SLIDE_IN_LEFT";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView:"show", viewport: { once: true, amount: 0 }, };

return (

  <SectionTag {...transitionProps} id="cta" className="py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0 border-y border-border">
    <div className="lg:w-[60%] mx-auto">
      <Card className="bg-transparent border-none shadow-none text-center flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle className="text-4xl md:text-5xl font-bold flex items-center">
            <div>
              <span>
                Prêt à transformer votre
              </span>
              <span className="text-transparent pl-2 bg-gradient-to-r from-accent to-primary bg-clip-text">
                <span>
                  Business?
                </span>
              </span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
          <span>
            Rejoignez notre communauté dynamique d'innovateurs et d'entrepreneurs qui transforment l'avenir avec l'automatisation IA. Connectez-vous, partagez et évoluez ensemble ! 🚀
          </span>
        </CardContent>
        <CardFooter>
          <a target="_blank" className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-3 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 px-7 w-fit flex justify-center items-center`} href="#">
<span className="dark:text-[#000000]">Rejoindre la Communauté
          </span>
        </a>
      </CardFooter>
    </Card>
  </div></SectionTag>
); }
