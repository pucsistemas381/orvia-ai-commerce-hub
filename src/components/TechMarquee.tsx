import { motion } from 'framer-motion';

const techs = [
  'Machine Learning', 'NLP', 'GPT', 'Neural Networks', 'Computer Vision',
  'Deep Learning', 'LLM', 'RAG', 'Automação', 'Analytics',
  'Predictive AI', 'Voice AI', 'Chatbots', 'Big Data', 'Cloud AI',
];

const TechMarquee = () => {
  const doubled = [...techs, ...techs];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-full text-sm font-medium text-muted-foreground border border-primary/10 hover:border-primary/30 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
