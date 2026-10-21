import { Blocks, Code2, Sparkles, ArrowUpRight, CircleDot } from "lucide-react";
import { Link } from "react-router-dom";
import { Brand } from "@/components/Header";
export default function EcosystemVisual() {
  return (
    <div className="ecosystem-visual">
      <div className="visual-top">
        <span className="status-dot" />
        <span>ARQUITETURA DE POSSIBILIDADES</span>
        <span>ORVIA / TECH</span>
      </div>
      <div className="ecosystem-scene">
        <div className="scene-grid" aria-hidden="true" />
        <div className="scene-orbit" aria-hidden="true" />
        <svg
          className="circuit-map"
          viewBox="0 0 540 480"
          fill="none"
          aria-hidden="true"
        >
          <path d="M270 240H150Q130 240 130 220V105M270 240H405Q425 240 425 220V155M270 240V355Q270 375 290 375H395" />
          <path
            className="signal signal-one"
            d="M130 105V220Q130 240 150 240H270"
          />
          <path
            className="signal signal-two"
            d="M270 240H405Q425 240 425 220V155"
          />
          <path
            className="signal signal-three"
            d="M270 240V355Q270 375 290 375H395"
          />
          <circle cx="130" cy="105" r="4" />
          <circle cx="425" cy="155" r="4" />
          <circle cx="395" cy="375" r="4" />
        </svg>
        <div className="ecosystem-core">
          <div className="core-ring" />
          <Brand />
          <span>TECNOLOGIA QUE CONECTA</span>
        </div>
        <Link to="/produtos/retoma" className="ecosystem-node node-products">
          <span className="node-icon">
            <Blocks size={21} aria-hidden="true" />
          </span>
          <span>
            <small>ORVIA PRODUCTS</small>
            <strong>Retoma</strong>
            <em>Oportunidades em perspectiva</em>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <Link to="/#tecnologia" className="ecosystem-node node-intelligence">
          <span className="node-icon">
            <Sparkles size={21} aria-hidden="true" />
          </span>
          <span>
            <small>ORVIA INTELLIGENCE</small>
            <strong>Inteligência aplicada</strong>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <Link to="/#solucoes" className="ecosystem-node node-solutions">
          <span className="node-icon">
            <Code2 size={21} aria-hidden="true" />
          </span>
          <span>
            <small>ORVIA SOLUTIONS</small>
            <strong>Soluções sob medida</strong>
          </span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
        <span className="scene-label label-data">DADOS</span>
        <span className="scene-label label-people">PESSOAS</span>
        <span className="scene-label label-process">PROCESSOS</span>
      </div>
      <div className="visual-bottom">
        <CircleDot size={14} aria-hidden="true" />
        <span>
          Um ecossistema.
          <br />
          <strong>O seu próximo movimento.</strong>
        </span>
        <span className="visual-bottom-line" />
      </div>
    </div>
  );
}
