'use client';

import { useState, useEffect } from 'react';

import Loading from '@/app/ui/loading';
import LandingPage from '@/app/ui/landing-page';
import FullscreenButton from '@/app/ui/fullscreen-button';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {    
    setTimeout(
      () => setLoaded(true),
      2000
    );
  })
  
  return (
    <>
      {!loaded && <Loading />}
      {loaded &&
        <>
          <LandingPage />
          <FullscreenButton />
        </>
      }
    </>
  );
}
