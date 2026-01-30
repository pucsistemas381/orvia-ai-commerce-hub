import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, Check, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import aiAssistant from '@/assets/ai-assistant.png';

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState('');

  const benefits = [
    'Sem compromisso',
    'Análise gratuita',
    'Diagnóstico comercial',
  ];

  return (
    <section ref={ref} id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute inset-0 star-field opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title font-display mb-4">
              Prepare-se para vender mais.{' '}
              <span className="gradient-text-accent">Comece grátis.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Agende agora um diagnóstico comercial gratuito e descubra como aumentar suas vendas.
            </p>

            {/* Email Form */}
            <div className="glass-card p-2 rounded-2xl mb-8">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 bg-transparent border-0 focus-visible:ring-0 text-lg"
                  />
                </div>
                <Button className="btn-accent h-14 px-8">
                  Iniciar minha demonstração
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-6">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="w-5 h-5 text-primary" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Guarantee */}
            <div className="mt-8 p-4 glass-card rounded-xl inline-block">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Garanta seu ROI.</span> Sem compromissos. Receba um e-mail com os próximos passos.{' '}
                <span className="text-primary">100% gratuito</span>
              </p>
            </div>
          </motion.div>

          {/* Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-6 rounded-3xl max-w-md mx-auto">
              {/* Chat Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                <img src={aiAssistant} alt="Orvia AI" className="w-12 h-12 rounded-xl" />
                <div>
                  <h4 className="font-semibold">Orvia</h4>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">Online agora</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="glass-card p-4 rounded-2xl rounded-tl-sm max-w-[85%]"
                >
                  <p className="text-sm">Olá! Sou o assistente da Orvia.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="glass-card p-4 rounded-2xl rounded-tl-sm max-w-[85%]"
                >
                  <p className="text-sm">Precisa de ajuda?</p>
                </motion.div>
              </div>

              {/* Chat Input */}
              <div className="relative">
                <Input
                  placeholder="Envie uma mensagem..."
                  className="pr-12 h-12 bg-secondary/50 border-0"
                />
                <Button
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primary"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;