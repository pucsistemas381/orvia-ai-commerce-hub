import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const metrics = [
  {
    value: 52,
    suffix: '%',
    label: 'redução de custos',
    color: 'text-primary',
  },
  {
    value: 38,
    suffix: '%',
    label: 'Aumento na conversão',
    color: 'text-accent',
  },
  {
    value: 0,
    suffix: '',
    label: 'Leads perdidos',
    color: 'text-foreground',
  },
];

const AnimatedCounter = ({ 
  value, 
  suffix, 
  inView 
}: { 
  value: number; 
  suffix: string; 
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
};

const ResultsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="resultados" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display mb-4">
            Resultados <span className="gradient-text">Tangíveis</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Números reais de empresas que transformaram seu comercial
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                {index === 1 && (
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent animate-pulse" />
                )}
                <span className={`font-display text-6xl md:text-7xl font-bold ${metric.color}`}>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
                </span>
              </div>
              <p className="text-muted-foreground">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials / Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold">
                JC
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg md:text-xl text-foreground mb-4 italic">
                "A Orvia transformou completamente nossa operação comercial. Antes perdíamos 40% dos leads por falta de follow-up. Hoje, zero oportunidades escapam."
              </p>
              <div>
                <p className="font-semibold">João Carlos</p>
                <p className="text-muted-foreground text-sm">Diretor Comercial, TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
