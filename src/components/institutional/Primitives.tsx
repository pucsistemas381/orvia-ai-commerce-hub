import { ArrowRight, ArrowUpRight, Check, RotateCcw } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { products, solutions } from "@/data/company";
import { conversationUrl } from "@/data/marketing";
export function PrimaryCTA({
  to,
  children,
  secondary = false,
}: {
  to: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  const cls = `action ${secondary ? "action-secondary" : ""}`;
  return to.startsWith("http") || to.startsWith("mailto:") ? (
    <a href={to} className={cls}>
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  ) : (
    <Link to={to} className={cls}>
      {children}
      <ArrowRight size={17} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
export function ProductDiagram() {
  return (
    <div
      className="product-diagram"
      role="img"
      aria-label="Fluxo conceitual: organizar, acompanhar e recuperar oportunidades. Não representa uma tela da plataforma."
    >
      <div className="diagram-top">
        <span>
          <RotateCcw size={19} /> retoma
        </span>
        <span>POR ORVIA TECH</span>
      </div>
      <div className="diagram-caption">
        CADA OPORTUNIDADE MERECE CONTINUIDADE
      </div>
      {[
        "Organizar oportunidades",
        "Acompanhar propostas",
        "Retomar conversas",
      ].map((label, i) => (
        <div className="opportunity" key={label}>
          <span className="opportunity-number">0{i + 1}</span>
          <div>
            <strong>{label}</strong>
            <span>
              {
                [
                  "Mais clareza no processo comercial",
                  "Atenção ao que pode se perder",
                  "Novas possibilidades de negócio",
                ][i]
              }
            </span>
          </div>
          <Check size={17} />
        </div>
      ))}
      <p className="concept-label">
        Visualização conceitual · não é uma tela do produto
      </p>
    </div>
  );
}
export function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <article className="product-feature" data-reveal>
      <div className="product-copy">
        <span className="product-tag">ORVIA PRODUCTS</span>
        <div className="retoma-word">
          <RotateCcw />
          {product.name.toLowerCase()}
          <span>por Orvia</span>
        </div>
        <h3>Transforme orçamentos esquecidos em oportunidades de negócio.</h3>
        <p>{product.description}</p>
        <ul className="benefit-list">
          {product.benefits.map((b) => (
            <li key={b}>
              <Check size={16} />
              {b}
            </li>
          ))}
        </ul>
        <div className="actions">
          <PrimaryCTA to={product.url}>Conhecer o Retoma</PrimaryCTA>
          <a className="inline-link" href={product.accessUrl}>
            Acessar plataforma <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <span className="product-endorsement">
          Um produto do ecossistema Orvia Tech.
        </span>
      </div>
      <div className="product-showcase">
        <span className="showcase-label">
          DE UMA PROPOSTA A UMA NOVA POSSIBILIDADE
        </span>
        <ProductDiagram />
        <span className="showcase-base">
          ORGANIZAR <i /> ACOMPANHAR <i /> RETOMAR
        </span>
      </div>
    </article>
  );
}
export function SolutionCard({
  solution,
  index,
}: {
  solution: (typeof solutions)[number];
  index: number;
}) {
  const Icon = solution.icon;
  return (
    <article className="solution-card" data-reveal>
      <div className="solution-top">
        <Icon size={25} />
        <span>0{index + 1}</span>
      </div>
      <h3>{solution.title}</h3>
      <p>{solution.text}</p>
      <a
        href={conversationUrl(solution.title.toLowerCase())}
        className="solution-contact"
        aria-label={`Conversar sobre essa solução: ${solution.title.toLowerCase()}`}
      >
        Conversar sobre essa solução{" "}
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    </article>
  );
}
export function ProductHero({
  product,
}: {
  product: (typeof products)[number];
}) {
  return (
    <section className="product-hero wrap">
      <Link to="/#produtos" className="back-link">
        ← Ecossistema Orvia
      </Link>
      <div className="two-column">
        <div>
          <span className="eyebrow">RETOMA · UM PRODUTO ORVIA TECH</span>
          <h1>{product.headline}</h1>
          <p className="lead">{product.description}</p>
          <div className="actions">
            <PrimaryCTA to={product.accessUrl || "/produtos/retoma#contato"}>
              {product.accessUrl
                ? "Acessar o Retoma"
                : "Conversar sobre o Retoma"}
            </PrimaryCTA>
            <PrimaryCTA
              to={conversationUrl("uma demonstração do Retoma")}
              secondary
            >
              Conversar sobre o Retoma
            </PrimaryCTA>
          </div>
        </div>
        <ProductDiagram />
      </div>
    </section>
  );
}
