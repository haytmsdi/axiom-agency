"use client";
import { motion } from "framer-motion";

export default function TextContent() { const ANIM_DURATION = parseFloat("0.5");
const ANIM_EASING = JSON.parse("[0,0,1,1]");
const TRANSITION_ANIM_TYPE = "NONE";
const transitionVariants: any = { FADE_IN: { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_LEFT: { hidden: { x: -50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, SLIDE_IN_RIGHT: { hidden: { x: 50, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, ZOOM_IN: { hidden: { scale: 0.8, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_X: { hidden: { rotateX: 90, opacity: 0, transformPerspective: 600 }, show: { rotateX: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, FLIP_IN_Y: { hidden: { rotateY: 90, opacity: 0, transformPerspective: 600 }, show: { rotateY: 0, opacity: 1, transition: { duration: ANIM_DURATION, ease: ANIM_EASING } }, }, };
const SectionTag = motion.section;
const transitionProps = { variants: transitionVariants[TRANSITION_ANIM_TYPE], initial: "hidden", animate: "show", whileInView: "show", viewport: { once: true, amount: 0 }, };

return (

  <SectionTag {...transitionProps} className="w-full px-5 md:px-8 lg:px-0 py-12 lg:py-[4.5rem]">
    <div className="container mx-auto max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        <span>
          Conditions d'Utilisation de l'Agence Axiom
        </span>
      </h1>
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span>
              1. Conditions Générales
            </span>
          </h2>
          <p className="text-base md:text-lg">
            <span>
              En accédant au site web de l'Agence Axiom, vous reconnaissez et acceptez les conditions d'utilisation qui suivent. L'utilisation de notre service d'automatisation IA implique votre accord avec toutes les lois et réglementations applicables.
            </span>
            {" "} <a className="text-blue-400 hover:underline" href="#">
            <span>
              #
            </span>
          </a>
          {" "}
          <span>
            Si vous n'êtes pas d'accord avec une quelconque de ces conditions, vous n'êtes pas autorisé à utiliser ou accéder à ce site. Les contenus de ce site sont protégés par les droits d'auteur et de marque déposée en vigueur.
          </span>
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            2. Licence d'Utilisation
          </span>
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg">
          <li>
            <span>
              L'autorisation est accordée de télécharger temporairement une copie des documents (informations ou logiciels) sur le site de l'Agence Axiom pour un usage personnel et non commercial. Ceci constitue une licence, et non un transfert de propriété. Sous cette licence, vous ne pouvez pas :
            </span>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <span>
                  modifier ou copier les documents;
                </span>
              </li>
              <li>
                <span>
                  utiliser les documents à des fins commerciales ou pour un affichage public;
                </span>
              </li>
              <li>
                <span>
                  tenter de rétroconcevoir tout logiciel contenu sur le site de l'Agence Axiom;
                </span>
              </li>
              <li>
                <span>
                  supprimer les mentions de droits d'auteur ou autres notations de propriété des documents;
                </span>
              </li>
              <li>
                <span>
                  transférer les documents à une autre personne ou miroiter les documents sur un autre serveur.
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              Cette licence sera automatiquement résiliée si vous enfreignez une de ces restrictions et peut être résiliée par l'Agence Axiom à tout moment. En cas de résiliation, vous devez détruire les documents téléchargés, qu'ils soient en format électronique ou imprimé.
            </span>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            3. Décharge de Responsabilité
          </span>
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg">
          <li>
            <span>
              Les documents sur le site de l'Agence Axiom sont fournis tels quels. L'Agence Axiom ne fait aucune garantie, expresse ou implicite, et décline et nie toutes les autres garanties, y compris, sans limitation, les garanties implicites de qualité marchande, d'adéquation à un usage particulier ou de non-violation des droits de propriété intellectuelle.
            </span>
          </li>
          <li>
            <span>
              De plus, l'Agence Axiom ne garantit pas l'exactitude, les résultats probables ou la fiabilité de l'utilisation des documents sur son site internet ou autres sites liés.
            </span>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            4. Limitations
          </span>
        </h2>
        <p className="text-base md:text-lg">
          <span>
            En aucun cas l'Agence Axiom ou ses fournisseurs ne seront responsables de dommages (y compris, sans limitation, les dommages pour perte de données ou de profits, ou en raison d'interruption d'activité) résultant de l'utilisation ou de l'incapacité à utiliser les documents sur le site de l'Agence Axiom, même si l'Agence Axiom ou un représentant autorisé a été informé de la possibilité de tels dommages.
          </span>
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            5. Exactitude des Documents
          </span>
        </h2>
        <p className="text-base md:text-lg">
          <span>
            Les documents apparaissant sur le site de l'Agence Axiom peuvent inclure des erreurs techniques, typographiques ou photographiques. L'Agence Axiom ne garantit pas que les documents sur son site soient exacts, complets ou à jour. L'Agence Axiom peut apporter des modifications aux documents contenus sur son site à tout moment sans préavis, mais elle ne s'engage pas à actualiser les documents.
          </span>
        </p>
      </div>
    </div>
  </div></SectionTag>
); }
