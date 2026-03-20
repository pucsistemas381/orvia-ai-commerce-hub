import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Calendar, RefreshCw, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    emoji: '🎯',
    title: 'Prospecção Inteligente',
    subtitle: 'Qualificação de leads com IA',
    description: 'IA analisa e qualifica leads automaticamente, priorizando os mais propensos a converter.',
    features: ['Scoring automático', 'Enriquecimento de dados', 'Segmentação inteligente'],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Calendar,
    emoji: '📅',
    title: 'Atendimento Automatizado',
    subtitle: 'Agendamento e gestão',
    description: 'Chatbots inteligentes que agendam reuniões e respondem dúvidas 24/7.',
    features: ['Chatbot 24/7', 'Agendamento automático', 'Follow-up inteligente'],
    gradient: 'from-primary to-blue-400',
  },
  {
    icon: RefreshCw,
    emoji: '🔄',
    title: 'Pós-Vendas Estratégico',
    subtitle: 'Retenção e upsell',
    description: 'Identifica oportunidades de upsell e previne churn antes que aconteça.',
    features: ['Previsão de churn', 'Recomendações de upsell', 'NPS automatizado'],
    gradient: 'from-accent to-orange-400',
  },
];

const EcosystemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="ecossistema" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />
      <div className="absolute inset-0 hex-pattern opacity-20" />
      
      {/* Data stream lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block neon-card px-4 py-1.5 rounded-full text-primary font-medium mb-4 text-sm holo-shimmer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
          >
            OS 3 PILARES
          </motion.span>
          <h2 className="section-title font-display mb-4">
            Ecossistema <span className="gradient-text-accent">Comercial Integrado</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma solução completa que cobre todo o ciclo comercial
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="neon-card h-full p-8 relative overflow-hidden transition-all duration-300 holo-shimmer">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${pillar.gradient} opacity-50`} />

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{pillar.emoji}</span>
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{pillar.subtitle}</p>
                  <p className="text-muted-foreground mb-6">{pillar.description}</p>

                  <ul className="space-y-3">
                    {pillar.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pillar.gradient}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-primary font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>

              {/* Connection Lines */}
              {index < pillars.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                    className="w-full h-full bg-gradient-to-r from-primary/50 to-accent/50"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
