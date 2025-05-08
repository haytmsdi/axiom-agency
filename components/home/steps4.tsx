"use client";
import cn from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Steps4() { const ANIM_DURATION = parseFloat("1.5");
const ANIM_EASING = JSON.parse("[0.25,0.46,0.45,0.94]");
const TRANSITION_ANIM_TYPE = "SLIDE_IN_LEFT";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0 }, };
const steps = [ { title: "Audit", description: "Nous collaborons avec vous pour analyser vos process actuels, vos outils, et identifier vos points de friction et vos opportunités.", number: "01" }, { title: "Stratégie", description: "Nous élaborons une stratégie sur-mesure pour intégrer des agents IA et optimiser vos opérations.", number: "02" }, { title: "Implémentation", description: "Nous déployons les automatisations, agents IA, scrapers et intégrations sans perturber votre flux actuel, assurant une transition fluide et un impact immédiat.", number: "03" }, { title: "Optimisation", description: "Nous mesurons, ajustons, et améliorons en continu pour que vos systèmes évoluent avec votre business.", number: "04" } ];

return (

  <SectionTag {...transitionProps} id="steps4" className="w-full py-12 lg:py-[4.5rem] px-5 md:px-8">
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center lg:gap-12">
      <div className="w-full flex flex-col items-start">
        <span className="text-sm uppercase tracking-wider text-primary mb-2">
          <span>
            Notre Processus
          </span>
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          <span>
            Notre méthode pour automatiser
          </span>
          <br />
          <span>
            votre croissance
          </span>
        </h2>
      </div>
      <ul className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step, index) => ( <li key={index} className={cn( "min-h-[290px] p-4 flex flex-col items-start border-b lg:border-b-0 md:last:border-b-0 md:nth-last-child(-n+2):border-b-0", index != steps.length - 1 && "lg:border-r", )} >
        <h3 className="text-2xl font-medium text-primary mb-3">
          <span>
            {step.title}
          </span>
        </h3>
        <p className="text-base text-foreground/80">
          <span>
            {step.description}
          </span>
        </p>
        <span className="text-6xl font-black text-primary mt-auto">
          <span>
            {step.number}
          </span>
        </span>
      </li>
    ))}
  </ul></div></SectionTag>
); }
