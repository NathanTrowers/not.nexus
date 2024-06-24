import Header from '@/app/ui/software/header';
import DesktopCardContainer from '@/app/ui/software/projects/desktop-card-container';
import MobileCardContainer from '@/app/ui/software/projects/mobile-card-container';
import styles from '@/app/ui/software/projects/_styles/software-projects.module.css';

export default function SoftwareProjects() {

    return (
        <main className={styles.main}>
            <Header 
                heading='My App Portfolio'
                notBang={true}
            />
            <DesktopCardContainer />
            <MobileCardContainer />
        </main>
    );
}
