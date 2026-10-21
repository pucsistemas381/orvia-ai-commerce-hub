import { ArrowUpRight } from "lucide-react";
import { company } from "@/data/company";
import { PrimaryCTA } from "./Primitives";
export default function ContactSection({
  product = false,
}: {
  product?: boolean;
}) {
  return (
    <section id="contato" className="contact-section">
      <div className="wrap contact-inner">
        <div>
          <span className="eyebrow">VAMOS CONECTAR POSSIBILIDADES</span>
          <h2>
            {product
              ? "Dê um novo olhar às suas oportunidades comerciais."
              : "Seu próximo salto de crescimento começa com a tecnologia certa."}
          </h2>
          <p>
            Descubra como a Orvia pode ajudar sua empresa a transformar desafios
            comerciais em novas possibilidades.
          </p>
          <div className="actions">
            {company.contactUrl ? (
              <PrimaryCTA to={company.contactUrl}>
                {product
                  ? "Solicitar uma demonstração"
                  : "Conversar com a Orvia"}
              </PrimaryCTA>
            ) : (
              <p className="contact-pending">
                O canal comercial será disponibilizado em breve. Enquanto isso,
                conheça as frentes em que podemos ajudar.
              </p>
            )}
            <PrimaryCTA to="/#solucoes" secondary>
              Explorar soluções
            </PrimaryCTA>
          </div>
        </div>
        <div className="contact-arrow" aria-hidden="true">
          <ArrowUpRight />
        </div>
      </div>
    </section>
  );
}
