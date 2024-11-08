import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 bg-green-800/30 backdrop-blur-md flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl font-bold mb-8"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          Protecting Wildlife Together
        </motion.h1>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/cheetah-running-icegif-8.gif"
            alt="Running Cheetah"
            width={100}
            height={50}
            className="mx-auto"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}