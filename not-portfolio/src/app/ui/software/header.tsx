import Image from 'next/image';
import Link from 'next/link';

import NotBang from '@/app/ui/not-bang';
import styles from '@/app/ui/software/_styles/header.module.css';

export default function Header({ heading, notBang }:{ heading: string, notBang?: boolean }) {
    const FADE_IN_CLASS: string =  'fadeIn';

    const ShowNotBang = () => {
        if(notBang === undefined || notBang === false) {
            return <></>;
        }

        return <NotBang />
    }
    
    return (
        <header className={styles.header}>
            <h1 className={`${styles.heading} ${FADE_IN_CLASS}`}><ShowNotBang />{heading}</h1>
            <div className={styles.brandLogo}>
                <Link 
                    className={styles.noStyles}
                    href='/'
                    aria-label='Link to the Home Page'
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
    );
}
