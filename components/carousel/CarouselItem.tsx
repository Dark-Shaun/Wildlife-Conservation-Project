import { motion } from 'framer-motion';
import { Project } from '@/data/projectData';
import { CarouselImage } from './CarouselImage';
import { fadeInUp } from '@/styles/animations';

interface CarouselItemProps {
  project: Project;
  isActive: boolean;
  onClick: () => void;
}

export function CarouselItem({ project, isActive, onClick }: CarouselItemProps) {
  return (
    <motion.div
      className={`carousel-item ${isActive ? 'carousel-item-active' : 'carousel-item-inactive'}`}
      whileHover={{ 
        scale: isActive ? 1.05 : 1,
        x: isActive ? 0 : isActive ? 20 : -20
      }}
      onClick={onClick}
    >
      <CarouselImage
        src={project.imageUrl}
        alt={project.title}
        isActive={isActive}
      />
      <div className="carousel-overlay" />
      <motion.div 
        className="carousel-content"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }}
      >
        <h3 className={`font-bold mb-2 ${isActive ? 'text-xl md:text-2xl' : 'text-lg'} text-white`}>
          {project.title}
        </h3>
        {isActive && (
          <p className="text-white/90 text-sm md:text-base line-clamp-3">
            {project.description}
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}