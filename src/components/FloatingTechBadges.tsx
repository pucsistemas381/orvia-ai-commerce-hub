import { motion } from 'framer-motion';
import { Cpu, Zap, Globe, Shield, BarChart3, BrainCircuit } from 'lucide-react';

const badges = [
  { icon: BrainCircuit, label: 'AI Core', x: '8%', y: '20%', delay: 0 },
  { icon: Zap, label: 'Real-time', x: '85%', y: '15%', delay: 0.5 },
  { icon: Globe, label: 'Multi-canal', x: '90%', y: '65%', delay: 1 },
  { icon: Shield, label: 'LGPD', x: '5%', y: '70%', delay: 1.5 },
  { icon: Cpu, label: 'Auto ML', x: '75%', y: '85%', delay: 2 },
  { icon: BarChart3, label: 'Analytics', x: '15%', y: '88%', delay: 2.5 },
];

const FloatingTechBadges = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
      {badges.map((badge) => (
        <motion.div
          key={badge.label}
          className="absolute glass-card px-3 py-1.5 rounded-full flex items-center gap-2 text-xs text-muted-foreground border border-primary/10"
          style={{ left: badge.x, top: badge.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            scale: [0.8, 1, 1, 0.8],
            y: [0, -10, -10, 0],
          }}
          transition={{
            duration: 6,
            delay: badge.delay,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          <badge.icon className="w-3.5 h-3.5 text-primary" />
          {badge.label}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingTechBadges;
