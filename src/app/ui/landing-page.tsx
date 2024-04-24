'use client';

import { useState } from 'react';
import Image from 'next/image';

import styles from '@/app/ui/_styles/landing-page.module.css';


export function LandingPage() {
  const [mainViewClass, setMainViewClass] = useState('fadeIn');
  const [contactViewClass, setContactViewClass] = useState(`${styles.invisible}`);
  const [softwareEngineeringClass, setSoftwareEngineeringClass] = useState(`${styles.invisible}`);
  const [showContact, setShowContact] = useState(false);
  const [showSoftwareEngineering, setShowSoftwareEngineering] = useState(false);

  const onClickContact = () => {
    setMainViewClass('fadeOut');
    setContactViewClass('fadeIn');
    
    setTimeout(
      () => {
        setMainViewClass(mainViewClass + ` ${styles.invisible}`);
        setShowContact(true);
      },
      1000
    );
  }

  const onClickSoftwareEngineering = () => {
    setMainViewClass('fadeOut');
    setSoftwareEngineeringClass('fadeIn');
    
    setTimeout(
      () => {
        setMainViewClass(mainViewClass + ` ${styles.invisible}`);
        setShowSoftwareEngineering(true);
      },
      1000
    );
  }

  const onClickBackContact = () => {
    setMainViewClass('fadeIn');
    setContactViewClass('fadeOut');

    setTimeout(
      () => {
        setContactViewClass(contactViewClass + ` ${styles.invisible}`);
        setShowContact(false);
      },
      1000
    );
  }

  const onClickBackSoftwareEngineering = () => {
    setMainViewClass('fadeIn');
    setSoftwareEngineeringClass('fadeOut');

    setTimeout(
      () => {
        setContactViewClass(contactViewClass + ` ${styles.invisible}`);
        setShowSoftwareEngineering(false);
      },
      1000
    );
  }
    
  function MainSection() {
    return (
      <>
        <h1 className={`${styles.heading} ${mainViewClass}`}>Main Menu</h1>
        <button 
          className={`${styles.topButton} ${mainViewClass}`}
          aria-live='polite'
          onClick={onClickSoftwareEngineering}
        >Software Engineering</button>
        <span className={`${styles.middleArea} ${mainViewClass}`}>
          🔒<button className={styles.lockedButton} disabled>Art</button>
        </span>
        <span className={`${styles.martialArtsArea} ${mainViewClass}`}>
          🔒<button className={styles.lockedButton} disabled>Martial Arts</button>
        </span>
        <button 
          className={`${styles.contactButton} ${mainViewClass}`}
          aria-live='polite'
          onClick={onClickContact}
        >Contact</button>
      </>
    );
  }

  function ContactSection() {
    return (
      <>
        <h1 className={`${styles.heading} ${contactViewClass}`}>Contact NOT</h1>
        <a 
          className={`${styles.topButton} ${contactViewClass}`}
          aria-label="Link to Nathan's GitHub profile"
          aria-live='polite'
          href='https://github.com/NathanTrowers'
        >
          <Image
            className={styles.logo}
            width='32'
            height='32'
            src='/github-mark.svg'
            alt='GitHub Invertocat Logo'
          />
          GitHub
        </a>
        <a 
          className={`${styles.middleArea} ${contactViewClass} ${styles.darkBackground}`}
          aria-label="Link to Nathan's LinkedIn profile"
          aria-live='polite'
          href='https://www.linkedin.com/in/nathan-trowers/'
        >
          <Image
            className={styles.logo}
            width='32'
            height='32'
            src='/LI-In-Bug.png'
            alt='LinkedIn Bug Logo'
          />
          LinkedIn
        </a>
        <button
          className={`${styles.contactButton} ${contactViewClass}`}
          aria-live='polite'
          onClick={onClickBackContact}
        >Back</button>
      </>
    );
  }

  function SoftwareEngineeringSection() {
    return (
      <>
        <h1 className={`${styles.heading} ${softwareEngineeringClass}`}>NOT: The Software Engineer</h1>
        <a 
          className={`${styles.topButton} ${softwareEngineeringClass}`}
          aria-live='polite'
          href='/software/projects'
        >
          Projects
        </a>
        <a 
          className={`${styles.middleArea} ${softwareEngineeringClass} ${styles.darkBackground}`}
          aria-live='polite'
          href='/software/hire-not'
        >
          Hire NOT
        </a>
        <button
          className={`${styles.contactButton} ${softwareEngineeringClass}`}
          aria-live='polite'
          onClick={onClickBackSoftwareEngineering}
        >Back</button>
      </>
    );
  }

  return (
    <main className={styles.main}>
      <header className={styles.tempLogo}>
        <p>LOGO</p>
      </header>
      {!showContact && !showSoftwareEngineering && <MainSection />}
      {showContact && <ContactSection />}
      {showSoftwareEngineering && <SoftwareEngineeringSection />}
    </main>
  );
}
