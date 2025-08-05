'use client';

import { useState } from 'react';

export function VideoPlayer({ src }: { src: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-video mb-4 mt-4 border-3 border-golden-amber rounded-lg">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream-white">
          <span className="text-slate-gray text-center px-4">Hang tight, good stuff takes time 🔥</span>
          <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-golden-amber mt-2"></div>
        </div>
      )}
      <iframe
        src={src}
        frameBorder="0"
        allowFullScreen
        className="absolute inset-0 w-full h-full mb-4"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
} 