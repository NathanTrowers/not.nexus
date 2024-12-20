'use client';

import { useState, useEffect } from 'react';

import FullscreenButton from '@/ui/fullscreen-button';
import Loading from '@/ui/loading';
import LandingPage from '@/ui/landing-page';

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
