"use client";
import { motion } from "framer-motion"; ;
import { Bot, Link2, Target, Webhook } from "lucide-react";

export default function Services4() { const ANIM_DURATION = parseFloat("2");
const ANIM_EASING = JSON.parse("[0.42,0,0.58,1]");
const TRANSITION_ANIM_TYPE = "SLIDE_IN_RIGHT";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0 }, };
const services = [ { icon: Bot, title: "Agent IA sur mesure", description: "Création d’agents intelligents pour déléguer des tâches entières : support client, qualification, analyse, etc.", link: "#", }, { icon: Link2, title: "Workflows personnalisés", description: "Des automatisations visuelles et robustes, connectées à vos outils (CRM, Google Sheets, Notion, et plein d'autres encore).", link: "#", }, { icon: Target, title: "Génération de leads automatisée", description: "Attirer des prospects qualifiés sans effort manuel. Des workflows intelligents optimisent la prospection, générant un flux constant de contacts intéressés, prêts à engager avec l'entreprise.", link: "#_2O_", }, { icon: Webhook, title: "Scraping & données intelligentes", description: "Collecte de données ciblées sur le web pour alimenter vos process marketing, veille ou growth hacking. ", link: "#", } ];

return (

  <SectionTag {...transitionProps} id="services4" className="w-full py-12 lg:py-[4.5rem]">
    <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-0">
      <div className="text-center mb-12">
        <span className="text-sm text-primary uppercase tracking-wider">
          <span>
            Nos Services
          </span>
        </span>
        <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">
          <span>
            Ce qu’on fait pour libérer votre business
          </span>
        </h2>
        <p className="text-foreground/80 max-w-2xl mx-auto">
          <span>
            Des solutions concrètes, pensées pour les entrepreneurs digitaux qui veulent sortir du mode “survie” et passer à l’échelle supérieure.
          </span>
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-card border border-secondary rounded-md hover:shadow-lg transition-shadow duration-300 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-4" >
            <div className="relative w-20 h-20 flex items-center justify-center bg-primary/10 rounded-full flex-shrink-0">
              <service.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-foreground mb-2 hover:text-primary transition-colors duration-300">
                <span>
                  {service.title}
                </span>
              </h3>
              <p className="text-foreground/80 text-sm">
                <span>
                  {service.description}
                </span>
              </p>
              <a className="w-full inline-block mt-4" href={service.link}>
                <span>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionTag>
) }
