import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

export default function FadeUp({ children, delay = 0, y = 40, className = '', once = true, amount = 0.25 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
