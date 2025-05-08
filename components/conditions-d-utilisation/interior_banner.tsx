"use client";
import React from "react";
import { motion } from "framer-motion"; ;
import { Shield } from "lucide-react";

export default function InteriorBanner() { const ANIM_DURATION = parseFloat("0");
const ANIM_EASING = JSON.parse("[0,0,1,1]");
const TRANSITION_ANIM_TYPE = "NONE";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView:"show", viewport: { once: true, amount: 0 }, };

return (

  <SectionTag {...transitionProps} className="mt-20 w-full relative bg-black px-4 py-20">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-black/70 dark:bg-black/80 md:bg-black/60 md:dark:bg-black/70 z-10" />
      <img fetchPriority="high" loading="eager" src="https://img.b2bpic.net/premium-vector/modern-abstract-technology-background-design-vector-illustration_29865-5353.jpg?w=1511" className="w-full h-full object-cover" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full flex items-center justify-center gap-4 mb-3">
        <div className="h-[1px] w-full max-w-[9rem] bg-white/70" />
        <Shield className="w-10 h-10 text-white" />
        <div className="h-[1px] w-full max-w-[9rem] bg-white/70" />
      </div>
      <h1 className="text-4xl lg:text-6xl font-black text-center text-white mb-4">
        <span>
          Conditions d'Utilisation
        </span>
      </h1>
      <p className="text-white/90 text-center max-w-2xl">
        <span>
          Découvrez nos conditions d'utilisation pour garantir une collaboration transparente et efficace avec Axiom Agency. Nos solutions IA sont conçues pour optimiser vos processus tout en respectant vos droits et obligations.
        </span>
      </p>
    </div>
  </SectionTag>
); }
