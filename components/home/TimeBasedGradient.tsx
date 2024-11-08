import { useEffect, useState } from 'react';
import { useMemo } from 'react';
export default function TimeBasedGradient() {
  const [timeOfDay, setTimeOfDay] = useState('day');

  useEffect(() => {
    const updateTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) setTimeOfDay('morning');
      else if (hour >= 12 && hour < 17) setTimeOfDay('day');
      else if (hour >= 17 && hour < 20) setTimeOfDay('evening');
      else setTimeOfDay('night');
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const gradientClasses = useMemo(() => ({
    morning: 'from-emerald-300/30 to-green-900/30',
    day: 'from-emerald-400/30 to-green-800/30',
    evening: 'from-emerald-600/30 to-green-950/30',
    night: 'from-emerald-800/40 to-green-950/40'
  }), []);

  return (
    <div 
      className={`absolute inset-0 z-[2] transition-opacity duration-1000 bg-gradient-to-b ${gradientClasses[timeOfDay as keyof typeof gradientClasses]}`}
    />
  );
}