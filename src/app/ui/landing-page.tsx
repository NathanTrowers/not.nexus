'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NotBang from '@/app/ui/not-bang';
import styles from '@/app/ui/_styles/landing-page.module.css';


export default function LandingPage() {
  const [mainViewClass, setMainViewClass] = useState('fadeIn');
  const [contactViewClass, setContactViewClass] = useState(`${styles.invisible}`);
  const [softwareEngineeringViewClass, setSoftwareEngineeringViewClass] = useState(`${styles.invisible}`);
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
    setSoftwareEngineeringViewClass('fadeIn');
    
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
    setSoftwareEngineeringViewClass('fadeOut');

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
            <Image
                width='112'
                height='62'
                src='/official-lock.svg'
                alt=''
            />
            <button className={styles.lockedButton} disabled>Art</button>
        </span>
        <span className={`${styles.martialArtsArea} ${mainViewClass}`}>
            <Image
                width='112'
                height='62'
                src='/official-lock.svg'
                alt=''
            />
            <button className={styles.lockedButton} disabled>Martial Arts</button>
        </span>
        <button 
            className={`${styles.contactButton} ${mainViewClass}`}
            aria-live='polite'
            onClick={onClickContact}
        >Contact</button>
        <footer className={`${styles.footer} ${mainViewClass}`}>
          <p>NOT &copy; { new Date().getFullYear()}. All Rights Reserved.</p>
        </footer>
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
        <h1 className={`${styles.heading} ${softwareEngineeringViewClass}`}>
          <NotBang />The Software Engineer
        </h1>
        <Link 
            className={`${styles.topButton} ${softwareEngineeringViewClass}`}
            aria-live='polite'
            href='/software/projects'
        >Projects</Link>
        <Link
            className={`${styles.middleArea} ${softwareEngineeringViewClass} ${styles.darkBackground}`}
            aria-live='polite'
            href='/software/hire-not'
        >Hire NOT</Link>
        <button
            className={`${styles.contactButton} ${softwareEngineeringViewClass}`}
            aria-live='polite'
            onClick={onClickBackSoftwareEngineering}
        >Back</button>
      </>
    );
  }

  return (
    <main className={styles.main}>
      <header className={styles.brandLogo}>
        <Image
            src='/project_logos/official-not-logo.svg'
            alt=''
            sizes='100vw'
            style={{
              width: '25%',
              height: '70%'
            }}
            width={166}
            height={62}
            priority
        />
      </header>
      {!showContact && !showSoftwareEngineering && <MainSection />}
      {showContact && <ContactSection />}
      {showSoftwareEngineering && <SoftwareEngineeringSection />}
    </main>
  );
}
