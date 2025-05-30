"use client";
import { useState, useEffect } from "react";
import ToggleTheme from "@/components/toggle-theme";
import cn from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // si on scroll vers le bas
          setShow(false); 
        } else { // si on scroll vers le haut
          setShow(true);  
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // Nettoyage
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  if (!mounted) return null;

  const routeList = [ 
    { label: "Nos Services", href: "#services4" }, 
    { label: "Notre Processus", href: "#steps4" }, 
    { label: "FAQ", href: "#faq" }, 
  ];

  const ANIM_DURATION = parseFloat("0");
  const ANIM_EASING = JSON.parse("[0,0,1,1]");
  const TRANSITION_ANIM_TYPE = "NONE";
  const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
  const SectionTag = motion.section;
  const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", whileInView:"show", viewport: { once: true, amount: 0 }, };

  return (
    <SectionTag {...transitionProps} className={cn(
      "fixed top-0 w-full shadow-none bg-background border-b border-secondary z-50 transition-transform duration-300",
      !show && "-translate-y-full"
    )}>
      <div className="hidden lg:block animate-in fade-in zoom-in p-4">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-0 flex justify-between items-center">
          <a className="font-bold text-xl flex gap-3 items-center" href="/">
            <img src={theme === "dark" ? "/images/axiom_logo.png" : "/images/axiom_logo_white.png"} className="object-contain h-9" />
          </a>
          <div className="flex items-center gap-[10px] select-none">
            {routeList.map(({ label, href }, index) => { 
              return (
                <a key={index} className="hover:bg-[#0005370d] px-4 py-1.5 hover:rounded-[10px] cursor-pointer flex items-center gap-2 font-[500] text-gray" href={href}>
                  <span>
                    {label}
                  </span>
                </a>
              );
            })}
            <a className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-3 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 w-fit flex justify-center items-center ml-4`} href="https://axiom-core.com">
              <span>
                Connexion
              </span>
            </a>
            <a className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-3 bg-primary text-primary-foreground shadow hover:bg-primary/90 w-fit flex justify-center items-center`} href="https://axiom.fillout.com/book-call">
              <span className="dark:text-[#000000]">Appel d'audit gratuit
              </span>
            </a>
            <ToggleTheme />
          </div>
        </div>
      </div>
      <div className={cn(
        "block lg:hidden w-full py-4 animate-in fade-in zoom-in",
        isOpen && "bg-background"
      )}>
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <a className="font-bold text-xl flex gap-2 items-center" href="/">
              <img src={theme === "dark" ? "/images/axiom_logo.png" : "/images/axiom_logo_white.png"} className="object-contain h-8" />
            </a>
          </div>
          <div className="flex items-center gap-1">
            <ToggleTheme />
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden rounded-md p-2 hover:bg-secondary/10 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
        <div 
          className={cn(
            "lg:hidden absolute left-0 w-full bg-background border-b border-secondary transition-all duration-300 ease-in-out",
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <ul className="flex flex-col items-center py-6 gap-4">
            {routeList.map((link, index) => (
              <li key={index}>
                <a 
                  className="text-lg transition-colors hover:text-primary" 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span>
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
            <li className="w-full flex flex-col gap-4 items-center mt-4">
              <a 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-3 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 w-[80%]" 
                href="https://axiom-core.com"
                onClick={() => setIsOpen(false)}
              >
                <span>
                  Connexion
                </span>
              </a>
              <a 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 p-3 bg-primary text-primary-foreground shadow hover:bg-primary/90 w-[80%]" 
                href="https://axiom.fillout.com/book-call"
                onClick={() => setIsOpen(false)}
              >
                <span className="dark:text-[#000000]">
                  Appel d'audit gratuit
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </SectionTag>
  );
}
