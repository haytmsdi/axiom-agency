"use client";

import { useEffect } from 'react';
import { motion } from "framer-motion";

export default function FilloutEmbed() {
  const ANIM_DURATION = parseFloat("1.5");
  const ANIM_EASING = JSON.parse("[0.42,0,0.58,1]");
  const TRANSITION_ANIM_TYPE = "FADE_IN";
  const transitionVariants: any = { 
    FADE_IN: { 
      hidden: { opacity: 0 }, 
      show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } } 
    }
  };
  const SectionTag = motion.section;
  const transitionProps = { 
    variants: transitionVariants[TRANSITION_ANIM_TYPE], 
    initial: "hidden", 
    whileInView: "show", 
    viewport: { once: true, amount: 0 } 
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SectionTag {...transitionProps} className="w-full py-12 lg:py-[4.5rem] px-5 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        <div 
          style={{width:"100%", height:"500px"}} 
          data-fillout-id="edWWX8xVdxus" 
          data-fillout-embed-type="standard" 
          data-fillout-inherit-parameters 
          data-fillout-dynamic-resize
        />
      </div>
    </SectionTag>
  );
} 