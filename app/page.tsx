'use client';
import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingScreen from '@/components/common/LoadingScreen';
import Hero from '@/components/home/Hero';
import ProjectCarousel from '@/components/home/ProjectCarousel';
import NewsletterSignup from '@/components/home/NewsletterSignup';
import Footer from '@/components/common/Footer';

// Lazy load the USAMap component
const USAMap = dynamic(() => import('@/components/home/USAMap'), {
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-emerald-50/50 backdrop-blur-sm">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
        <p className="text-emerald-600">Loading map...</p>
      </div>
    </div>
  ),
  ssr: false // Disable server-side rendering for the map
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <main className={`transition-all duration-500 ${isLoading ? 'opacity-0 translate-y-10' : 'opacity-100 translate-y-0'}`}>
        <Hero />
        <ProjectCarousel />
        <Suspense fallback={<div>Loading map...</div>}>
          <USAMap />
        </Suspense>
        <NewsletterSignup />
        <Footer />
      </main>
    </>
  );
}