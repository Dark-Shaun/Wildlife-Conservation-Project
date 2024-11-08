import Image from 'next/image';
import { useState } from 'react';

interface CarouselImageProps {
  src: string;
  alt: string;
  isActive?: boolean;
  className?: string;
}

export function CarouselImage({ src, alt, isActive = false, className = '' }: CarouselImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`relative w-full h-full bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`
          object-cover transition-all duration-700
          ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}
          ${isActive ? 'brightness-100' : 'brightness-75'}
        `}
        sizes={isActive ? "(max-width: 768px) 100vw, 1920px" : "800px"}
        priority={isActive}
        quality={isActive ? 85 : 75}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setError(true)}
      />
    </div>
  );
}