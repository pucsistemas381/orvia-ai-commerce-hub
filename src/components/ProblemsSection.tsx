import { Users, TrendingDown, DollarSign } from 'lucide-react';
import dashboardImg from '@/assets/dashboard-3d.png';
import ScrollReveal from '@/components/ScrollReveal';

const problems = [
  {
    icon: Users,
    title: 'Outros agentes',
    subtitle: 'só olham pipeline',
    description: 'Falta visão estratégica do processo comercial completo',
  },
  {
    icon: TrendingDown,
    title: 'Resultados baixos',
    subtitle: 'só IA cliente caído',
    description: 'Tecnologia que não entrega o ROI prometido',
  },
  {
    icon: DollarSign,
    title: 'Equipe cara &',
    subtitle: 'ineficiente',
    description: 'Custos altos com baixa produtividade',
  },
];

const ProblemsSection = () => {
  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cosmic-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal animation="fade-up" className="text-center mb-16">
          <h2 className="section-title font-display mb-4">
            Ecossistema <span className="gradient-text">Comercial Completo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Funciona 5X Diferente: ar automação, mais apoia você
          </p>
        </ScrollReveal>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => (
            <ScrollReveal
              key={problem.title}
              animation="scale"
              delay={index * 0.15}
              className="glass-card-hover p-6 text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-1">{problem.title}</h3>
              <p className="text-muted-foreground text-sm mb-3">{problem.subtitle}</p>
              <p className="text-sm text-muted-foreground/80">{problem.description}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Solution Statement */}
        <ScrollReveal animation="blur" delay={0.2} className="text-center mb-12">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Recuperamos oportunidades e reduzimos seus custos com o{' '}
            <span className="text-foreground font-semibold">poder da inteligência artificial.</span>
          </p>
        </ScrollReveal>

        {/* Dashboard Preview */}
        <ScrollReveal animation="fade-up" delay={0.3} className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <div className="glass-card p-2 rounded-3xl overflow-hidden pulse-glow">
            <img
              src={dashboardImg}
              alt="Dashboard de Automação"
              className="w-full rounded-2xl"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemsSection;
