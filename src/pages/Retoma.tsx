import { Check, ArrowRight } from "lucide-react";
import { products } from "@/data/company";
import {
  ProductHero,
  SectionHeader,
} from "@/components/institutional/Primitives";
import ContactSection from "@/components/institutional/ContactSection";
export default function Retoma() {
  const product = products[0];
  return (
    <>
      <ProductHero product={product} />
      <section className="section section-tinted">
        <div className="wrap two-column">
          <SectionHeader
            eyebrow="O DESAFIO COMERCIAL"
            title="A conversa não precisa terminar no orçamento."
          />
          <div>
            <p className="lead">
              Entre uma proposta enviada e uma decisão de compra, oportunidades
              podem ficar sem acompanhamento.
            </p>
            <p>
              O Retoma tem como proposta ajudar empresas a organizar esse
              contexto, acompanhar orçamentos e recuperar oportunidades que
              poderiam se perder ao longo do processo de vendas.
            </p>
          </div>
        </div>
      </section>
      <section id="beneficios" className="section wrap">
        <SectionHeader
          eyebrow="MAIS CONTINUIDADE PARA SUA OPERAÇÃO"
          title="Cada oportunidade merece atenção."
        />
        <div className="retoma-benefits">
          {product.benefits.map((b, i) => (
            <article key={b}>
              <Check />
              <h3>{b}</h3>
              <p>
                {
                  [
                    "Mantenha oportunidades relacionadas a propostas e orçamentos em perspectiva.",
                    "Dê continuidade ao processo comercial, com atenção às oportunidades em aberto.",
                    "Volte a olhar para propostas que podem representar novas possibilidades de negócio.",
                  ][i]
                }
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="section section-tinted">
        <div className="wrap">
          <SectionHeader
            eyebrow="UMA VISÃO CONCEITUAL DE USO"
            title="Do orçamento à próxima conversa."
            text="Um fluxo para explicar a proposta do Retoma, sem representar telas ou etapas obrigatórias da plataforma."
          />
          <ol className="product-flow">
            {[
              "Organizar oportunidades",
              "Acompanhar o contexto comercial",
              "Retomar possibilidades",
            ].map((t, i) => (
              <li key={t}>
                <span>0{i + 1}</span>
                <h3>{t}</h3>
                {i < 2 && <ArrowRight aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <ContactSection product />
    </>
  );
}
