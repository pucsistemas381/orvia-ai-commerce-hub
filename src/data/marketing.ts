import { RotateCcw, Network, Code2 } from "lucide-react";
import { company } from "./company";

export function conversationUrl(subject?: string) {
  if (!subject || !company.contactUrl) return company.contactUrl;
  const url = new URL(company.contactUrl);
  url.searchParams.set(
    "text",
    `Olá, Orvia! Gostaria de conversar sobre ${subject}.`,
  );
  return url.toString();
}

export const challenges = [
  {
    id: "oportunidades",
    icon: RotateCcw,
    label: "Recuperar oportunidades",
    context: "Propostas enviadas. Conversas que precisam continuar.",
    pillar: "ORVIA PRODUCTS",
    title: "O próximo negócio pode estar em uma proposta que ficou para trás.",
    text: "Conheça o Retoma: uma plataforma voltada à organização, ao acompanhamento e à recuperação de oportunidades relacionadas a orçamentos e propostas.",
    benefits: [
      "Organizar oportunidades comerciais",
      "Dar continuidade ao acompanhamento",
      "Retomar possibilidades de negócio",
    ],
    href: "/produtos/retoma",
    cta: "Conhecer o Retoma",
    subject: "o Retoma e a gestão de oportunidades comerciais",
  },
  {
    id: "operacao",
    icon: Network,
    label: "Conectar a operação",
    context: "Ferramentas isoladas. Trabalho manual no caminho.",
    pillar: "ORVIA INTELLIGENCE + SOLUTIONS",
    title: "Menos ilhas de informação. Mais continuidade para a operação.",
    text: "Explore automação comercial, inteligência artificial e integrações para aproximar ferramentas, pessoas e processos. A viabilidade de cada conexão depende do seu contexto.",
    benefits: [
      "Reduzir tarefas operacionais repetitivas",
      "Conectar informações entre ferramentas",
      "Apoiar atendimento e produtividade",
    ],
    href: "/#tecnologia",
    cta: "Explorar inteligência aplicada",
    subject: "integrações e automação da minha operação",
  },
  {
    id: "software",
    icon: Code2,
    label: "Criar uma solução",
    context: "Um desafio específico. Uma nova possibilidade digital.",
    pillar: "ORVIA SOLUTIONS",
    title: "Quando o desafio é único, a tecnologia precisa acompanhar.",
    text: "Converse sobre plataformas comerciais, aplicações web, dashboards e sistemas sob medida. O ponto de partida é entender o que sua empresa precisa resolver.",
    benefits: [
      "Traduzir necessidades em software",
      "Dar mais clareza aos dados do negócio",
      "Desenhar soluções para sua realidade",
    ],
    href: conversationUrl("uma solução de software para minha empresa"),
    cta: "Conversar sobre meu projeto",
    subject: "uma solução de software para minha empresa",
  },
];
export const questions = [
  {
    question: "A Orvia trabalha apenas com inteligência artificial?",
    answer:
      "Não. A Orvia é uma empresa de tecnologia B2B que reúne produtos próprios, inteligência artificial, automações e desenvolvimento de soluções digitais. IA é uma das capacidades do ecossistema, aplicada onde faz sentido para o negócio.",
  },
  {
    question: "Qual é a relação entre o Retoma e a Orvia?",
    answer:
      "O Retoma é um produto do ecossistema Orvia Products. Sua proposta é ajudar empresas a organizar, acompanhar e recuperar oportunidades comerciais relacionadas a orçamentos e propostas.",
  },
  {
    question: "Minha empresa já usa outros sistemas. Por onde começar?",
    answer:
      "Compartilhe quais ferramentas utiliza e onde estão os principais desafios da operação. Integrações entre sistemas e APIs fazem parte das frentes de atuação da Orvia; a viabilidade de cada projeto depende dos recursos e acessos disponíveis.",
  },
  {
    question: "Preciso ter um projeto pronto para entrar em contato?",
    answer:
      "Você pode começar contando o problema que quer resolver, mesmo sem uma especificação técnica. O canal comercial é o lugar para conversar sobre o contexto, os objetivos e as possibilidades de solução.",
  },
  {
    question: "Como conhecer melhor o Retoma?",
    answer:
      "Acesse a página de apresentação do Retoma neste site ou visite retoma.orviabr.tech. Para conversar sobre a aplicação do produto na sua operação, entre em contato com a Orvia pelo WhatsApp comercial.",
  },
];
