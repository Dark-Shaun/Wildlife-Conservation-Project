interface CarouselDotsProps {
    total: number;
    current: number;
    onClick: (index: number) => void;
    variant?: 'light' | 'dark';
  }
  
  export function CarouselDots({ total, current, onClick, variant = 'light' }: CarouselDotsProps) {
    const baseColors = variant === 'light' 
      ? 'bg-white hover:bg-white/90'
      : 'bg-emerald-400 hover:bg-emerald-400/90';
  
    return (
      <div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30"
        role="tablist"
        aria-label="Carousel navigation"
      >
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => onClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${current === index ? `${baseColors} w-4` : `${baseColors}/50`}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={current === index}
            role="tab"
          />
        ))}
      </div>
    );
  }