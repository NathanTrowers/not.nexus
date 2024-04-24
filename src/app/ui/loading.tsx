import styles from '@/app/ui/_styles/loading.module.css';

export default function Loading() {
    return (
        <main className={styles.main}>
            <div id="div">
            <h1 className={styles.tempLogo}>LOGO</h1>
            <p className={styles.loadingText}>Loading...</p>
            </div>
        </main>
    );
}
