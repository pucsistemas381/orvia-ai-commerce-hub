import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Database,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { pillars, products, solutions, journey } from "@/data/company";
import {
  PrimaryCTA,
  ProductCard,
  SectionHeader,
  SolutionCard,
} from "@/components/institutional/Primitives";
import EcosystemVisual from "@/components/institutional/EcosystemVisual";
import ChallengeFinder from "@/components/institutional/ChallengeFinder";
import FaqSection from "@/components/institutional/FaqSection";
import { conversationUrl } from "@/data/marketing";
import ContactSection from "@/components/institutional/ContactSection";

export default function Index() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span /> TECNOLOGIA COM PROPÓSITO. NEGÓCIOS COM FUTURO.
            </div>
            <h1>
              Tecnologia que transforma operações.
              <br />
              <span>Inteligência que impulsiona negócios.</span>
            </h1>
            <p>
              Desenvolvemos plataformas, soluções digitais e tecnologias
              inteligentes para empresas que querem vender melhor, operar com
              eficiência e crescer de forma sustentável.
            </p>
            <div className="actions">
              <PrimaryCTA to={conversationUrl("tecnologia para minha empresa")}>
                Falar sobre minha empresa
              </PrimaryCTA>
              <PrimaryCTA to="/#solucoes" secondary>
                Encontre sua solução
              </PrimaryCTA>
            </div>
            <p className="hero-assurance">
              Uma conversa sobre o seu negócio. Tecnologia na direção certa.
            </p>
          </div>
          <EcosystemVisual />
        </div>
        <div className="wrap hero-bottom">
          <span className="hero-bottom-caption">
            <span className="status-dot" /> SOFTWARE · INTELIGÊNCIA · SOLUÇÕES
          </span>
          <a href="#ecossistema" aria-label="Ir para o ecossistema">
            <ArrowDown size={18} />
          </a>
          <span>TRANSFORMANDO TECNOLOGIA EM DIREÇÃO ESTRATÉGICA</span>
        </div>
      </section>
      <section className="section wrap" id="ecossistema">
        <SectionHeader
          eyebrow="01 / O ECOSSISTEMA ORVIA"
          title="Um ecossistema de tecnologia para cada etapa do seu crescimento."
          text="Unimos software, inteligência e integração para resolver desafios comerciais e operacionais de ponta a ponta."
        />
        <div className="pillar-grid">
          {pillars.map(({ icon: Icon, ...p }, i) => (
            <Link
              to={p.href}
              className={`pillar pillar-${p.tone}`}
              key={p.name}
              data-reveal
            >
              <div className="pillar-top">
                <Icon size={26} />
                <span>0{i + 1}</span>
              </div>
              <span className="pillar-brand">ORVIA</span>
              <h3>{p.name}</h3>
              <h4>{p.label}</h4>
              <p>{p.text}</p>
              <span className="text-link">
                Explorar {p.name.toLowerCase()}
                <ArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section className="section section-tinted" id="produtos">
        <div className="wrap">
          <SectionHeader
            eyebrow="02 / PRODUTOS ORVIA"
            title="Tecnologia proprietária. Soluções para desafios reais."
            text="Conheça as plataformas desenvolvidas para simplificar processos e ampliar oportunidades."
          />
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
      <section className="section wrap" id="solucoes">
        <div className="heading-row">
          <SectionHeader
            eyebrow="03 / SOLUÇÕES PARA EMPRESAS"
            title="O desafio é do seu negócio. A tecnologia é nossa."
          />
          <p>
            Da primeira conexão à próxima etapa de crescimento, desenvolvemos a
            tecnologia que faz sentido para sua operação.
          </p>
        </div>
        <ChallengeFinder />
        <div className="solutions-intro">
          <span className="eyebrow">CAPACIDADES QUE SE COMPLEMENTAM</span>
          <p>Uma visão integrada. Diferentes formas de avançar.</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <SolutionCard key={s.title} solution={s} index={i} />
          ))}
        </div>
      </section>
      <section className="intelligence-section" id="tecnologia">
        <div className="wrap two-column">
          <div className="intelligence-art" aria-hidden="true" data-reveal>
            <div className="flow-node">
              <Database />
              Dados da operação
            </div>
            <div className="flow-line" />
            <div className="flow-node flow-center">
              <Sparkles />
              Inteligência aplicada
            </div>
            <div className="flow-line" />
            <div className="flow-outcomes">
              <span>Atendimento</span>
              <span>Vendas</span>
              <span>Processos</span>
            </div>
            <span className="art-caption">
              PESSOAS NO CENTRO. TECNOLOGIA A FAVOR.
            </span>
          </div>
          <div>
            <span className="eyebrow">ORVIA INTELLIGENCE</span>
            <h2>
              Inteligência artificial.
              <br />
              Impacto no mundo real.
            </h2>
            <p>
              IA é parte da nossa engenharia. Aplicamos agentes inteligentes,
              assistentes e automações onde podem ajudar a operação: do
              atendimento à orquestração de processos comerciais.
            </p>
            <ul className="benefit-list">
              <li>
                <Check size={16} />
                Qualificação de leads e assistentes de vendas
              </li>
              <li>
                <Check size={16} />
                Integração de ferramentas e workflows
              </li>
              <li>
                <Check size={16} />
                Mais espaço para o trabalho estratégico
              </li>
            </ul>
            <PrimaryCTA to="/#contato" secondary>
              Conecte inteligência ao seu negócio
            </PrimaryCTA>
          </div>
        </div>
      </section>
      <section className="section wrap" id="jornada">
        <SectionHeader
          eyebrow="04 / NOSSA VISÃO DE TRANSFORMAÇÃO"
          title="Da complexidade à eficiência."
          text="Uma abordagem que conecta o contexto do negócio às possibilidades da tecnologia."
        />
        <ol className="journey" data-reveal>
          {journey.map((step, i) => (
            <li key={step.title}>
              <span className="step-index">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="results-section" id="resultados">
        <div className="wrap two-column">
          <SectionHeader
            eyebrow="05 / TECNOLOGIA APLICADA A RESULTADOS"
            title="Inovação que faz sentido para o negócio."
            text="Quando processos deixam de trabalhar isolados, novas possibilidades aparecem. A equipe ganha contexto, a operação ganha clareza e o negócio encontra espaço para evoluir."
          />
          <div className="outcomes" data-reveal>
            {[
              "Mais produtividade",
              "Processos conectados",
              "Maior visibilidade comercial",
              "Menos trabalho operacional",
              "Escalabilidade",
              "Decisões orientadas por dados",
            ].map((t, i) => (
              <div key={t}>
                <span>0{i + 1}</span>
                {t}
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section wrap about-section" id="sobre">
        <div className="about-identity" aria-hidden="true" data-reveal>
          <img
            src="/brand/orvia-symbol.webp"
            alt=""
            width="424"
            height="439"
            loading="lazy"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="06 / SOBRE A ORVIA"
            title="Nascemos para aproximar tecnologia e negócios."
          />
          <p>
            Acreditamos que a tecnologia só gera valor quando resolve problemas
            reais. Por isso, desenvolvemos soluções que conectam inovação,
            inteligência e estratégia para ajudar empresas a evoluir seus
            processos e ampliar suas possibilidades.
          </p>
          <p>
            Somos uma empresa de tecnologia B2B com visão de ecossistema:
            produtos, plataformas e soluções digitais que evoluem junto aos
            desafios de quem empreende.
          </p>
          <span className="about-signature">
            ORVIA TECH <span>— Tecnologia que impulsiona negócios.</span>
          </span>
        </div>
      </section>
      <FaqSection />
      <ContactSection />
    </>
  );
}
