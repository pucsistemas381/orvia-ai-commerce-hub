import { Plus, MessageCircle } from "lucide-react";
import { questions, conversationUrl } from "@/data/marketing";
import { SectionHeader } from "./Primitives";
export default function FaqSection() {
  return (
    <section className="section wrap faq-section" id="duvidas">
      <div data-reveal>
        <SectionHeader
          eyebrow="CLAREZA PARA O PRÓXIMO PASSO"
          title="Boas conexões começam com boas perguntas."
          text="Entenda como os produtos e as soluções da Orvia podem se conectar ao seu momento."
        />
        <a
          className="text-link faq-contact"
          href={conversationUrl("as soluções da Orvia")}
        >
          <MessageCircle size={18} aria-hidden="true" /> Tem outra pergunta?
          Converse com a Orvia.
        </a>
      </div>
      <div className="faq-list" data-reveal>
        {questions.map(({ question, answer }) => (
          <details key={question} className="faq-item">
            <summary>
              {question}
              <Plus size={20} aria-hidden="true" />
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
