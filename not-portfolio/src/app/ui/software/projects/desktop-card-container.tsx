import Image from 'next/image';

import AppCard from '@/app/ui/software/projects/app-card';
import styles from '@/app/ui/software/projects/_styles/software-projects.module.css'

export default function DesktopCardContainer() {
    // 2n-n/5.16 = height of official-lock iamge
    // Eg: when n=62, 62*2-62/5.16 = 112

    const FADE_IN_CLASS: string =  'fadeIn';

    return (
        <div aria-live='polite'>
            <aside className={`${styles.visibleDesktop} ${styles.aside} ${FADE_IN_CLASS}`}>
                <button tabIndex={-1} className={styles.activeButton}>Personal</button>
                <span className={styles.lockedButtonContainer} >
                    <button className={styles.lockedButton} disabled>Professional</button>
                    <Image
                        width='105'
                        height='58'
                        src='/official-lock-reverse.svg'
                        alt=''
                    />
                </span>
            </aside>
            <section className={`${styles.visibleDesktop} ${styles.projectsContainer} ${FADE_IN_CLASS}`}>
                <AppCard
                    title='Study Log'
                    logo='/project_logos/official-study-log-logo.svg'
                    description='Track and review your study habits!'
                    techStack='MERN Stack (JavaScript)'
                    appLink='https://studylog.not.nexus/'
                    repoLink='https://github.com/NathanTrowers/study-log'
                />
                <AppCard
                    title='ComicComet'
                    logo='/project_logos/official-comic-comet-logo.svg'
                    description='Shop at a fake online comic book store!'
                    techStack='Spring Boot (Java) and Angular'
                    appLink='https://comiccomet.not.nexus/'
                    repoLink='https://github.com/NathanTrowers/comic-comet'
                />
                <AppCard
                    title='AndroidAce'
                    logo='/project_logos/official-android-ace-logo.svg'
                    description='Take a quiz on Android app development!'
                    techStack='Java with Android SDK'
                    repoLink='https://github.com/NathanTrowers/android-ace'
                />
                <AppCard
                    title='not.nexus (this website)'
                    logo='/project_logos/official-not-logo.svg'
                    description='Portfolio Website of Nathan O. Trowers.'
                    techStack='Next.js (TypeScript)'
                    appLink='https://not.nexus/'
                    repoLink='https://github.com/NathanTrowers/not.nexus'
                />
            </section>
        </div>
    );
}
