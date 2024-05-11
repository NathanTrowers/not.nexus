import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/ui/software/_styles/app-card.module.css';

export default function AppCard({ 
    title, logo, description,
    techStack, appLink, repoLink,
    invisible
}: {
    title: string; logo: string; description: string;
    techStack: string; appLink: string; repoLink: string;
    invisible?: string;
}) {
    return (
        <div
            aria-live='polite'
            className={`${invisible} ${styles.card}`}
        >
            <h2 className={styles.defaultMargin}>
                <Image
                    className={styles.logo}
                    width='32'
                    height='32'
                    src={logo}
                    alt={`${title} Logo`}
                />
                {title}
            </h2>
            <p className={styles.descriptionMargin}>{description}</p>
            <p className={styles.defaultMargin}><em>Tech Stack:</em> {techStack}</p>
            <Link
                className={`${styles.defaultMargin} ${styles.longerButton}`}
                href={appLink}
            >Try Me!</Link>
            <a
                className={`${styles.defaultMargin} ${styles.longerButton}`}
                aria-label={`Link to the ${title} GitHub repository`}
                href={repoLink}
            >
                <Image
                    className={styles.logo}
                    width='32'
                    height='32'
                    src='/github-mark.svg'
                    alt='GitHub Invertocat Logo'
                />
                View the {title} GitHub Repo!
            </a>
        </div>
    );
}