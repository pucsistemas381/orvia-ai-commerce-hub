import { ArrowUpRight, MessageCircle, MoveUpRight } from "lucide-react";
import { conversationUrl } from "@/data/marketing";
import { PrimaryCTA } from "./Primitives";
export default function ContactSection({
  product = false,
}: {
  product?: boolean;
}) {
  return (
    <section id="contato" className="contact-section">
      <div className="contact-circuits" aria-hidden="true" />
      <div className="wrap contact-inner">
        <div data-reveal>
          <span className="eyebrow">SEU PRÓXIMO MOVIMENTO</span>
          <h2>
            {product
              ? "Dê um novo olhar às suas oportunidades comerciais."
              : "Seu próximo salto de crescimento começa com a tecnologia certa."}
          </h2>
          <p>
            Conte o desafio da sua operação. Vamos conversar sobre como conectar
            tecnologia ao que sua empresa precisa.
          </p>
          <div className="actions">
            <PrimaryCTA
              to={conversationUrl(
                product
                  ? "o Retoma para minha empresa"
                  : "tecnologia para minha empresa",
              )}
            >
              {product ? "Conversar sobre o Retoma" : "Conversar com a Orvia"}
            </PrimaryCTA>
            <PrimaryCTA to="/#solucoes" secondary>
              Explorar soluções
            </PrimaryCTA>
          </div>
          <span className="contact-channel">
            <MessageCircle size={15} aria-hidden="true" /> WhatsApp comercial ·
            (11) 97753-6165
          </span>
        </div>
        <div className="contact-compass" aria-hidden="true">
          <div className="compass-orbit" />
          <span className="compass-label">DO SEU DESAFIO</span>
          <MoveUpRight strokeWidth={1} />
          <span className="compass-label">À PRÓXIMA POSSIBILIDADE</span>
        </div>
      </div>
      <div className="wrap contact-baseline">
        <span>PRODUTOS PRÓPRIOS</span>
        <span>INTELIGÊNCIA APLICADA</span>
        <span>
          SOLUÇÕES SOB MEDIDA <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </section>
  );
}
