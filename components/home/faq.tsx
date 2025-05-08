"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import cn from "@/lib/utils";
interface FAQItem { question: string;
answer: string; }; ;
import { ChevronDown } from "lucide-react";

export default function Faq() { const ANIM_DURATION = parseFloat("1");
const ANIM_EASING = JSON.parse("[0,0,1,1]");
const TRANSITION_ANIM_TYPE = "FADE_IN";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView:"show", viewport: { once: true, amount: 0 }, };
const [activeIndex, setActiveIndex] = useState<number>
  (0);
const faqData: FAQItem[] = [ { question: "Comment l'automatisation peut-elle aider mon entreprise à évoluer ?", answer: "L'automatisation avec un agent IA optimise vos processus, vous permettant ainsi de gagner du temps et de l'argent, tout en facilitant la croissance de votre entreprise." }, { question: "Comment puis-je commencer avec l'automatisation IA ?", answer: "Vous pouvez débuter par une consultation gratuite avec notre équipe pour déterminer les besoins spécifiques de votre entreprise et élaborer un plan sur mesure." }, { question: "Quels services offrez-vous pour l'automatisation ?", answer: "Nous proposons une gamme complète de services incluant l'audit, la stratégie, l'implémentation et l'optimisation pour assurer une automatisation efficace et adaptée à votre entreprise." }, { question: "Pourquoi choisir notre agence pour l'automatisation IA ?", answer: "Notre agence se distingue par son expertise en IA et son approche personnalisée, garantissant des solutions sur mesure qui maximisent les économies de temps et d'argent." }, { question: "Quels sont les avantages de l'automatisation IA ?", answer: "L'automatisation IA offre une meilleure efficacité, une réduction des coûts opérationnels, et une capacité accrue à se concentrer sur le développement stratégique de votre entreprise.", }, ];
const toggleFAQ = (index: number) => { setActiveIndex(activeIndex === index ? -1 : index); };

return (

    <SectionTag {...transitionProps} id="faq" className="w-full py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <span className="text-primary text-sm uppercase tracking-wider mb-2 block">
            <span>
              QUESTIONS & RÉPONSES
            </span>
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            <span>
              Foire Aux Questions (a refaire)
            </span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border bg-card rounded-md overflow-hidden" >
              <button onClick={() =>
                toggleFAQ(index)} className={`w-full text-left p-4 lg:p-5 flex justify-between items-center transition-colors duration-200 ${activeIndex === index ? "border-b" : "text-foreground hover:bg-muted" }`} >
                <span className="font-medium pr-8 text-card-foreground">
                  <span>
                    {faq.question}
                  </span>
                </span>
                <div className={`flex-shrink-0 w-5 h-5 transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`} >
                  <ChevronDown />
                </div>
              </button>
              <div className={`bg-card overflow-hidden transition-all duration-200 ${activeIndex === index ? "max-h-96" : "max-h-0"}`} >
                <p className="p-4 lg:p-5 text-foreground/80">
                  <span>
                    {faq.answer}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionTag>
  ); };
