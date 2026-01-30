import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import orviaLogo from '@/assets/orvia-logo.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden cosmic-bg">
      {/* Animated Background */}
      <div className="absolute inset-0 star-field opacity-50" />
      <div className="absolute inset-0 grid-lines opacity-30" />
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Automação Comercial com IA</span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Automatizamos{' '}
              <span className="gradient-text">100%</span>{' '}
              do seu processo comercial com IA:
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Da prospecção ao pós-venda. Mais resultados, menos custos, 
              <span className="text-foreground font-medium"> zero oportunidades perdidas.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-accent group">
                Quero mais vendas
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="btn-outline group">
                <MessageCircle className="mr-2 w-5 h-5" />
                Fale via WhatsApp
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <p className="text-sm text-muted-foreground mb-4">Empresas que confiam na Orvia</p>
              <div className="flex items-center gap-8 opacity-60">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-20 h-8 bg-muted rounded" />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10 rounded-full blur-3xl" />
            <motion.img
              src={orviaLogo}
              alt="Orvia Logo"
              className="relative z-10 w-full max-w-lg float-animation"
              animate={{
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
