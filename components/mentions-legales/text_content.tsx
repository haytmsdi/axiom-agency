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
          Mentions Légales pour Axiom Agency
        </span>
      </h1>
      <div className="space-y-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span>
              Conditions d'Utilisation
            </span>
          </h2>
          <p className="text-base md:text-lg">
            <span>
              En accédant à notre site web et en utilisant nos solutions d'automatisation IA, vous acceptez de respecter nos conditions de service, toutes les lois et réglementations applicables, et reconnaissez votre responsabilité quant à la conformité avec les lois locales. Si vous n'acceptez pas ces conditions, vous ne pouvez pas utiliser ou accéder à ce site. Les matériaux présents sur ce site sont protégés par les lois de propriété intellectuelle.
            </span>
            {" "} <a className="text-blue-400 hover:underline" href="#">
            <span>
              #
            </span>
          </a>
          {" "}
          <span>
            Cette licence vous est accordée pour consulter temporairement une copie des matériaux (informations ou logiciels) sur le site web de Axiom Agency pour un usage personnel et non commercial. Il s'agit d'une licence, et non d'un transfert de titre, et selon cette licence, vous ne pouvez pas :
          </span>
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            Licence d'Utilisation
          </span>
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg">
          <li>
            <span>
              Permission est accordée pour télécharger temporairement une copie des matériaux sur le site de Axiom Agency pour un visionnage personnel et non commercial transitoire. Cela constitue une licence, et non un transfert de titre, et sous cette licence, vous ne pouvez pas :
            </span>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <span>
                  modifier ou copier les matériaux ;
                </span>
              </li>
              <li>
                <span>
                  utiliser les matériaux à des fins commerciales ou pour tout affichage public ;
                </span>
              </li>
              <li>
                <span>
                  tenter de décompiler ou de désassembler tout logiciel sur le site de Axiom Agency ;
                </span>
              </li>
              <li>
                <span>
                  retirer les notations de droits d'auteur ou autres notations propriétaires des matériaux ;
                </span>
              </li>
              <li>
                <span>
                  transférer les matériaux à une autre personne ou dupliquer les matériaux sur tout autre serveur.
                </span>
              </li>
            </ul>
          </li>
          <li>
            <span>
              Cette licence sera automatiquement résiliée si vous enfreignez l'une de ces restrictions et peut être résiliée par Axiom Agency à tout moment. À la fin de votre consultation des matériaux ou à la résiliation de cette licence, vous devez détruire tous les matériaux téléchargés en votre possession, qu'ils soient sous format électronique ou imprimé.
            </span>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            Clause de Non-Responsabilité
          </span>
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg">
          <li>
            <span>
              Les matériaux sur le site de Axiom Agency sont fournis en l'état. Axiom Agency ne donne aucune garantie, expresse ou implicite, et décline et annule toutes autres garanties, y compris, sans limitation, les garanties implicites de qualité marchande, d'adéquation à un usage particulier, ou de non-violation de la propriété intellectuelle ou de violation des droits.
            </span>
          </li>
          <li>
            <span>
              De plus, Axiom Agency ne garantit ni ne fait de déclarations concernant la précision, les résultats probables ou la fiabilité de l'utilisation des matériaux sur son site web ou autrement relatifs à ces matériaux ou sur tout site lié à ce site.
            </span>
          </li>
        </ol>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            Limitations
          </span>
        </h2>
        <p className="text-base md:text-lg">
          <span>
            En aucun cas Axiom Agency ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison de l'interruption des affaires) résultant de l'utilisation ou de l'impossibilité d'utiliser les matériaux sur le site de Axiom Agency, même si Axiom Agency ou un représentant autorisé de Axiom Agency a été informé oralement ou par écrit de la possibilité de tels dommages.
          </span>
        </p>
      </div>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          <span>
            Exactitude des Matériaux
          </span>
        </h2>
        <p className="text-base md:text-lg">
          <span>
            Les matériaux présents sur le site de Axiom Agency pourraient inclure des erreurs techniques, typographiques ou photographiques. Axiom Agency ne garantit pas que les matériaux sur son site sont exacts, complets ou actuels. Axiom Agency peut apporter des modifications aux matériaux contenus sur son site web à tout moment sans préavis. Cependant, Axiom Agency ne s'engage pas à mettre à jour les matériaux.
          </span>
        </p>
      </div>
    </div>
  </div></SectionTag>
); }
