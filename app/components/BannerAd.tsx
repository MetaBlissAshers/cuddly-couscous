'use client';

import { useState } from 'react';

export function BannerAd({ src }: { src: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

//   return <></>
  return (
    <div className="relative w-full mb-4 mt-4">
      {!isLoaded && (
        <></>
      )}
           <div className="bg-velvet-plumflex items-center justify-center mt-4 flex" >
      <iframe
        // className="w-full"
        // style={{ height: 'auto' }}
        src={src}
        width={900}
        height={250}
        scrolling="no"
        marginWidth={0}
        marginHeight={0}
        frameBorder="0"
        onLoad={() => setIsLoaded(true)}
      />
      </div>
    </div>
  );
} 