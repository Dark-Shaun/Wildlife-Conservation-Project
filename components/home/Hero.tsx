import { motion } from 'framer-motion';
import ImageCarousel from './ImageCarousel';
import TimeBasedGradient from './TimeBasedGradient';

export default function Hero() {
  const text = "Protect Our Wildlife";
  const characters = Array.from(text);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Carousel */}
      <ImageCarousel />

      {/* Time-based Gradient Overlay */}
      <TimeBasedGradient />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.7 
              }}
            >
            </motion.div>
            <h2 className="text-xl font-semibold">Wildlife Conservation</h2>
          </div>
          
          <h1 className="text-6xl font-bold mb-4 flex">
            {characters.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p className="text-xl mb-8">Join us in preserving Earth's precious biodiversity</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full text-lg font-semibold"
          >
            Get Involved
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}