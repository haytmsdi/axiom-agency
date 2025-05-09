"use client";
import React from "react";
import { motion } from "framer-motion"; ;
import { Mail } from "lucide-react";

export default function Footer() { const ANIM_DURATION = parseFloat("0");
const ANIM_EASING = JSON.parse("[0,0,1,1]");
const TRANSITION_ANIM_TYPE = "NONE";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0 }, };

return (

  <SectionTag {...transitionProps} className="overflow-hidden relative z-10 px-5 md:px-8 lg:px-0 py-16 pb-5">
    <div className="mx-auto flex w-full flex-wrap justify-between gap-6 lg:max-w-7xl lg:flex-nowrap lg:gap-20">
      <div className="w-full lg:w-[30%] lg:max-w-[24rem]">
        <a className="mb-6 inline-block" href="/">
          <img src="/images/favicon_axiom.png" className="h-14 w-auto object-contain" />
        </a>
        <p className="mb-8 max-w-[15rem] text-sm text-foreground/80">
          <span>
          </span>
        </p>
        <a className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-primary" href="mailto:team.axiomagency@gmail.com">
          <Mail className="h-6 w-6" />
          <span>
            team.axiomagency@gmail.com
          </span>
        </a>
      </div>
      <div className="max-md:grid max-md:grid-cols-2 md:flex md:flex-row gap-20">
        <ul className="flex md:w-[45%] max-w-[12rem] flex-col items-start gap-4 lg:w-auto">
          <li>
            <span className="mb-2 block text-base font-bold text-foreground">
              <span>
              </span>
            </span>
          </li>
          {Object.entries({ "": "#", "": "#", "": "#", "": "#", }).map((item, index) => (
            <li key={index}>
              <a className="relative text-sm text-foreground/80 transition-colors hover:text-primary hover:after:w-full after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all" href={item[1]}>
                <span>
                  {item[0]}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex md:w-[45%] max-w-[12rem] flex-col items-start gap-4 lg:w-auto">
          <li>
            <span className="mb-2 block text-base font-bold text-foreground">
              <span>
                Navigation
              </span>
            </span>
          </li>
          {Object.entries({ "Nos Services": "#services4", "Notre Processus": "#steps4", "FAQ": "#faq", "": "#", }).map((item, index) => (
            <li key={index}>
              <a className="relative text-sm text-foreground/80 transition-colors hover:text-primary hover:after:w-full after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all" href={item[1]}>
                <span>
                  {item[0]}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex md:w-[45%] max-w-[12rem] flex-col items-start gap-4 lg:w-auto">
          <li>
            <span className="mb-2 block text-base font-bold text-foreground">
              <span>
                Contact
              </span>
            </span>
          </li>
          {Object.entries({ "Instagram": "https://www.instagram.com/axiom__agency/", "LinkedIn": "#", "Twitter": "#", }).map((item, index) => (
            <li key={index}>
              <a className="relative text-sm text-foreground/80 transition-colors hover:text-primary hover:after:w-full after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all" href={item[1]}>
                <span>
                  {item[0]}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex md:w-[45%] max-w-[12rem] flex-col items-start gap-4 lg:w-auto">
          <li>
            <span className="mb-2 block text-base font-bold text-foreground">
              <span>
                Legals
              </span>
            </span>
          </li>
          {Object.entries({ "Mentions Légales": "/mentions-legales", "Conditions d'utilisation": "/conditions-d-utilisation", }).map((item, index) => (
            <li key={index}>
              <a className="relative text-sm text-foreground/80 transition-colors hover:text-primary hover:after:w-full after:absolute after:bottom-[-2px] after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all" href={item[1]}>
                <span>
                  {item[0]}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="mx-auto mt-12 flex flex-wrap justify-center gap-6 border-t pt-8 lg:max-w-7xl lg:flex-nowrap lg:justify-start lg:gap-9">
      <span className="w-full text-center text-sm text-foreground/80 lg:w-auto lg:text-left">
        <span>
          Trust the process. @2025
        </span>
        {" "}
        <a className="text-foreground/80 transition-colors hover:text-foreground/60" href="/">
          <span>
            Axiom Agency
          </span>
        </a>
        {" "}
        <span>
        </span>
      </span>
      <a className="-translate-y-1 p-1 text-sm text-foreground/80 transition-colors hover:text-foreground/60" href="#">
        <span>
        </span>
      </a>
      <a className="-translate-y-1 p-1 text-sm text-foreground/80 transition-colors hover:text-foreground/60" href="#">
        <span>
        </span>
      </a>
    </div>
  </SectionTag>
); }
