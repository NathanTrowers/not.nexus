import styles from '@/app/ui/_styles/not-found.module.css';

export default function NotFound() {
    return (
        <main className={styles.main}>
            <section>
                <h1>404 NOT FOUND</h1>
                <h2 className={styles.centerText}>(no pun intended)</h2>
            </section>
            <p>The URL you entered is either mistyped or does not exist.</p>
        </main>
    );
}
