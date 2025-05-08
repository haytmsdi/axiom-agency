"use client";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes"; ;
import { Star, ChevronRight, ChevronDown } from "lucide-react";

export default function Hero() { const ANIM_DURATION = parseFloat("2");
const ANIM_EASING = JSON.parse("[0.42,0,0.58,1]");
const TRANSITION_ANIM_TYPE = "FADE_IN";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const intrinsicVariants = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0 }, };
const { theme, setTheme } = useTheme();

return (

  <RoughNotationGroup show={true}>
    <SectionTag {...transitionProps} className="flex flex-col items-center relative mx-auto max-w-7xl px-6 pt-44 pb-16 text-center md:px-8">
      <div className="backdrop-filter-[12px] group inline-flex h-8 -translate-y-4 animate-fade-in items-center justify-between gap-2 rounded-full border dark:border-primary/10 bg-card dark:bg-foreground/5 px-4 text-xs text-primary transition-all ease-in hover:cursor-pointer hover:bg-primary/20 dark:text-foreground sm:text-sm">
        <Star className="mr-1 size-5 animate-pulse text-accent fill-accent" />
        <span>
          <span>
            Maximisez vos résultats
          </span>
        </span>
        <ChevronRight className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
      </div>
      <h1 className="animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl">
        <span>
          Automatisez.
        </span>
        {" "}
        <span>
          Scalez. Gagnez.
        </span>
      </h1>
      <p className="mb-12 mx-auto max-w-2xl text-center animate-fade-in text-lg tracking-tight text-gray-400 [--animation-delay:400ms] md:text-xl">
        <span>
          Transformez vos processus avec l'automatisation IA pour économiser du temps et de l'argent tout en augmentant votre efficacité.
        </span>
      </p>
      <a className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-3 bg-primary text-primary-foreground shadow hover:bg-primary/90 -translate-y-4 animate-fade-in gap-1 rounded-lg text-white ring-4 ring-primary/20 [--animation-delay:600ms] hover:scale-105 hover:shadow-xl hover:ring-primary/40 w-fit flex justify-center items-center group`} href="#">
        <div className="flex items-center">
          <span className="text-black group-hover:translate-x-1 transition-transform duration-300">Commencer maintenant</span>
          <ChevronRight className="translate-y-0.5 ml-2 size-4 transition-all duration-300 ease-in-out group-hover:translate-x-2 text-black" />
        </div>
      </a>
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="text-sm text-[#01E7B9] font-medium">Découvrir</span>
        <div className="animate-bounce">
          <ChevronDown className="size-8 text-[#01E7B9]" />
        </div>
      </div>
      <div className="relative group mt-14 mx-2 md:mx-0">
        <img width={1200} height={1200} fetchPriority="high" loading="eager" src={theme === "light" ? "/images/dashboard_light.png" : "/images/dashboard_dark.png"} className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 shadow-xl" />
        <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg" />
      </div>
    </SectionTag>
  </RoughNotationGroup>
); }
