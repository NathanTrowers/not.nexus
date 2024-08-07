import Image from 'next/image';

import styles from '@/app/ui/_styles/loading.module.css';

export default function Loading() {
    return (
        <main className={styles.main}>
            <div id="div">
            <Image
                className={styles.brandLogo}
                width='166'
                height='62'
                src='/not-acronym.svg'
                alt=''
            />
            <p className={styles.loadingText}>Loading...</p>
            </div>
        </main>
    );
}
