import {
  Blocks,
  Workflow,
  Code2,
  Braces,
  Sparkles,
  ChartNoAxesCombined,
  Network,
  Layers3,
} from "lucide-react";
export const company = {
  origin: "https://orviatech-siteorvia.aj9jbc.easypanel.host",
  contactUrl: "https://wa.me/5511977536165",
  privacyUrl: "",
  socials: [] as { name: string; url: string }[],
};
export const pillars = [
  {
    name: "Products",
    label: "Software que abre possibilidades.",
    text: "Produtos próprios que simplificam processos e aproximam sua empresa de novas oportunidades.",
    icon: Blocks,
    href: "/#produtos",
    tone: "blue",
  },
  {
    name: "Intelligence",
    label: "Inteligência aplicada ao negócio.",
    text: "IA e automações para conectar ferramentas, qualificar oportunidades e apoiar sua operação.",
    icon: Workflow,
    href: "/#tecnologia",
    tone: "violet",
  },
  {
    name: "Solutions",
    label: "Seu desafio. Nossa engenharia.",
    text: "Sistemas e soluções digitais desenhados para a realidade e a evolução da sua empresa.",
    icon: Code2,
    href: "/#solucoes",
    tone: "teal",
  },
];
export const products = [
  {
    slug: "retoma",
    name: "Retoma",
    category: "Gestão de oportunidades comerciais",
    headline: "Uma proposta esquecida ainda pode ser uma oportunidade.",
    description:
      "Uma solução para organizar, acompanhar e recuperar oportunidades comerciais relacionadas a orçamentos e propostas.",
    benefits: [
      "Organização de oportunidades",
      "Acompanhamento comercial",
      "Recuperação de propostas",
    ],
    url: "/produtos/retoma",
    accessUrl: "https://retoma.orviabr.tech/",
  },
];
export const solutions = [
  {
    icon: Braces,
    title: "Desenvolvimento de software",
    text: "Transforme necessidades da operação em ferramentas que trabalham a favor do seu negócio.",
  },
  {
    icon: Workflow,
    title: "Automação comercial",
    text: "Reduza tarefas manuais e mantenha sua equipe focada nas oportunidades que importam.",
  },
  {
    icon: Sparkles,
    title: "Inteligência artificial",
    text: "Aplique inteligência ao atendimento, à qualificação de leads e à produtividade da equipe.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Business Intelligence e dados",
    text: "Dê contexto aos seus dados e mais clareza às decisões comerciais.",
  },
  {
    icon: Network,
    title: "Integração de sistemas",
    text: "Conecte ferramentas e informações para dar continuidade aos processos da empresa.",
  },
  {
    icon: Layers3,
    title: "Plataformas SaaS e soluções sob medida",
    text: "Crie uma base digital alinhada à sua operação e preparada para acompanhar o crescimento.",
  },
];
export const journey = [
  {
    title: "Entendemos o desafio.",
    text: "O ponto de partida é a realidade da operação: pessoas, processos e oportunidades.",
  },
  {
    title: "Desenhamos a solução.",
    text: "Conectamos a necessidade do negócio às possibilidades da tecnologia.",
  },
  {
    title: "Conectamos a tecnologia.",
    text: "Software, dados e inteligência trabalhando na mesma direção.",
  },
  {
    title: "Evoluímos com o negócio.",
    text: "Uma visão de continuidade para acompanhar novas necessidades.",
  },
];
