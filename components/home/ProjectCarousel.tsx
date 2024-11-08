import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectData';
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}



export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Add a check for empty projects array
  if (!projects || projects.length === 0) {
    return null; // or return a loading state
  }

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisibleProjects = () => {
    const visibleIndexes = [];
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    visibleIndexes.push(prevIndex, currentIndex, nextIndex);
    return visibleIndexes;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="flex items-center gap-8">
            {getVisibleProjects().map((index, i) => (
              <motion.div
                key={projects[index].id}
                className={`relative rounded-2xl overflow-hidden cursor-pointer backdrop-blur-sm
                  ${i === 1 ? 'w-[500px] h-[500px]' : 'w-[300px] h-[300px] opacity-70'}`}
                whileHover={{ 
                  scale: i === 1 ? 1.05 : 1,
                  x: i === 0 ? 20 : i === 2 ? -20 : 0
                }}
                initial={{ x: i === 0 ? -20 : i === 2 ? 20 : 0 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => i !== 1 && setCurrentIndex(index)}
              >
                <Image
                  src={projects[index].imageUrl}
                  alt={projects[index].title}
                  fill
                  className="object-cover brightness-110"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-emerald-800/80 via-emerald-700/30 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: i === 1 ? 0.5 : 0.2 }}
                />
                {i === 1 && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {projects[index].title}
                    </h2>
                    <p className="text-white/90">
                      {projects[index].description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-emerald-400 w-4' : 'bg-emerald-400/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// export default ProjectCarousel;