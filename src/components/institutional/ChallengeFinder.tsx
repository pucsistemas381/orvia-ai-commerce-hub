import { useState } from "react";
import { ArrowUpRight, Check, ChevronRight, MessageCircle } from "lucide-react";
import { challenges, conversationUrl } from "@/data/marketing";
import { PrimaryCTA } from "./Primitives";

export default function ChallengeFinder() {
  const [selected, setSelected] = useState(challenges[0].id);
  const current = challenges.find((item) => item.id === selected)!;
  return (
    <div className="challenge-finder" data-reveal>
      <div
        className="challenge-options"
        role="group"
        aria-label="Escolha o desafio da sua empresa"
      >
        <span className="finder-label">QUAL É O SEU PRÓXIMO PASSO?</span>
        {challenges.map(({ id, icon: Icon, label, context }) => (
          <button
            key={id}
            type="button"
            aria-pressed={selected === id}
            aria-controls="challenge-recommendation"
            onClick={() => setSelected(id)}
          >
            <Icon size={22} aria-hidden="true" />
            <span>
              <strong>{label}</strong>
              <small>{context}</small>
            </span>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div
        id="challenge-recommendation"
        className="challenge-recommendation"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="eyebrow">{current.pillar}</span>
        <h3>{current.title}</h3>
        <p>{current.text}</p>
        <ul className="benefit-list">
          {current.benefits.map((b) => (
            <li key={b}>
              <Check size={17} aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
        <div className="actions">
          <PrimaryCTA to={current.href}>{current.cta}</PrimaryCTA>
          {current.id !== "software" && (
            <a
              className="finder-contact"
              href={conversationUrl(current.subject)}
            >
              <MessageCircle size={16} aria-hidden="true" /> Falar sobre esse
              desafio
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
