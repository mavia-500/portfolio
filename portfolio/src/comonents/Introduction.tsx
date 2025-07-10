import { motion } from 'framer-motion';

const Introduction = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 animate-pulse-slow">
  <motion.div
    className="text-green-400 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl bg-gray-800 bg-opacity-80 max-w-4xl w-full"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
  >
    Crafting modern, scalable web applications with the power of the MERN stack.<br className="hidden md:block" />
    From responsive frontends to robust backends — let’s build something impactful together.
  </motion.div>
</div>

);
  
};

export default Introduction;
