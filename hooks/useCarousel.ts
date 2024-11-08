import { useState, useEffect } from 'react';

interface UseCarouselProps {
  itemsLength: number;
  autoPlayInterval?: number;
  pauseOnHover?: boolean;
}

export function useCarousel({
  itemsLength,
  autoPlayInterval = 5000,
  pauseOnHover = true
}: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === itemsLength - 1 ? 0 : prev + 1));
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, itemsLength, autoPlayInterval]);

  const handlers = pauseOnHover ? {
    onMouseEnter: () => setIsAutoPlaying(false),
    onMouseLeave: () => setIsAutoPlaying(true),
  } : {};

  return {
    currentIndex,
    setCurrentIndex,
    isAutoPlaying,
    handlers
  };
}