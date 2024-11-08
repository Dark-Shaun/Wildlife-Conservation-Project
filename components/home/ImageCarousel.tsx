import { motion, AnimatePresence } from 'framer-motion';
import { carouselImages } from '@/data/carouselData';
import { useCarousel } from '@/hooks/useCarousel';
import { CarouselDots } from '@/components/carousel/CarouselDots';
import { CarouselImage } from '../carousel/CarouselImage';


export default function ImageCarousel() {
  const { currentIndex, setCurrentIndex, handlers } = useCarousel({
    itemsLength: carouselImages.length,
    autoPlayInterval: 5000,
    pauseOnHover: true
  });

  return (
    <div className="absolute inset-0 overflow-hidden" {...handlers}>
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.7 }}
          className="relative h-full w-full"
        >
          <CarouselImage
            src={carouselImages[currentIndex].url}
            alt={carouselImages[currentIndex].alt}
            isActive={true}
            className="h-screen"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>
      <CarouselDots
        total={carouselImages.length}
        current={currentIndex}
        onClick={setCurrentIndex}
        variant="light"
      />
    </div>
  );
}