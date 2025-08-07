'use client';

import { useState, useEffect } from 'react';
import { AdsteraAd } from './AdsteraAd';

export function HeaderAds() {
  const [view, setView] = useState<'desktop' | 'mobile' | null>(null);

  useEffect(() => {
    const checkSize = () => {
      if (window.innerWidth >= 768) {
        setView('desktop');
      } else {
        setView('mobile');
      }
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  if (view === 'desktop') {
    return (
      <div id="horizontal-ad-desktop">
        <AdsteraAd
          divId="horizontal-ad-desktop"
          width="728"
          height="90"
          zoneId="7563824927835ebe1983954665c6829d"
        />
      </div>
    );
  }

  if (view === 'mobile') {
    return (
      <div id="horizontal-ad-mobile">
        <AdsteraAd
          divId="horizontal-ad-mobile"
          width="468" // Note: This was in the user's edit, though 468 might be wide for some mobiles
          height="60"
          zoneId="d8efeda5566adeb55116fea3c8887901"
        />
      </div>
    );
  }

  // Return an empty div with a minimum height to avoid layout shift during hydration if possible, 
  // or just return null to satisfy "not render the block at all"
  return null;
}
