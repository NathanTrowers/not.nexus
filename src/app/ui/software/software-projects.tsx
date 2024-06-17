import Image from 'next/image';
import Link from 'next/link';

import NotBang from '@/app/ui/not-bang';
import DesktopCardContainer from '@/app/ui/software/desktop-card-container';
import MobileCardContainer from '@/app/ui/software/mobile-card-container';
import styles from '@/app/ui/software/_styles/software-projects.module.css';

export default function SoftwareProjects() {
    const FADE_IN_CLASS: string =  'fadeIn';

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <h1 className={`${styles.heading} ${FADE_IN_CLASS}`}><NotBang />My App Portfolio</h1>
                <div className={styles.brandLogo}>
                    <Link 
                        className={styles.noStyles}
                        href='/'
                        aria-label="Link to the Home Page"
                    >
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
                    </Link>
                </div>
            </header>
            <DesktopCardContainer />
            <MobileCardContainer />
        </main>
    );
}
