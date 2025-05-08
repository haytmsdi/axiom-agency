"use client";
import { motion } from "framer-motion";

export default function Logos() { const ANIM_DURATION = parseFloat("1.5");
const ANIM_EASING = JSON.parse("[0.42,0,0.58,1]");
const TRANSITION_ANIM_TYPE = "FADE_IN";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView:"show", viewport: { once: true, amount: 0 }, };
const logos = [ "/images/n8n_logo.avif", "/images/slack_logo.png", "/images/vercel_logo.png", "/images/react_logo.png", "/images/supabase_logo.png", ];

return (

  <SectionTag {...transitionProps} className="w-full bg-gradient-to-r from-primary/10 to-transparent py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0">
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
        <span>
          Les Technologies pour Transformer votre Business
        </span>
      </h2>
      <div className="w-full flex justify-evenly items-center lg:mx-10">
        {logos.map((logo, index) => (
          <div className="flex justify-center items-center" key={index}>
            <img width={120} loading="lazy" src={logo} className="h-16 w-fit" />
          </div>
        ))}
      </div>
    </div>
  </SectionTag>
); }
