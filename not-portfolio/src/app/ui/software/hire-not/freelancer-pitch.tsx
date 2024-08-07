import Header from "@/app/ui/software/header";
import styles from '@/app/ui/software/hire-not/_styles/hire-not.module.css';

export default function FreelancerPitch() {
    const FADE_IN_CLASS: string =  'fadeIn';

    return (
        <main className={styles.main} aria-live='polite'>
            <Header heading='Hire NOT'/>
            <section className={`${styles.section} ${FADE_IN_CLASS}`}>
                <div className={styles.pitch} role='document'>
                    <h2>Make Your Dream Web App a Reality!</h2>
                    <p>
                        Execution is what separates a person who&apos;s dreams stay dreams from one who&apos;s dream becomes a reality.
                        At the crossroads of executing on your dreams or executing your dreams, there are three paths:
                    </p>
                        <ol className={styles.list}>
                            <li>Be overwhelmed by not knowing what to do and never act, i.e., turn back.</li>
                            <li>Spend years of your life learning the skills needed to create a useable product.</li>
                            <li>Hire NOT to build your MVP for you.</li>
                        </ol>
                    <p>
                        If you have analysis paralysis, let me do the worrying. If you are Mr./Ms. DIY, let me 
                        spend my time working to save you some of yours. Hire NOT and bring your web app to life!
                        After working with me, you&apos;ll call me Mr. MVP!
                    </p>
                    <p> To get started, email me at not@not.com.  You can also reach out to me via 
                        <a
                            className={styles.link}
                            aria-label="Link to Nathan's LinkedIn profile"
                            aria-live='polite'
                            href='https://www.linkedin.com/in/nathan-trowers/'
                        >LinkedIn</a> 
                        or Fiverr.
                    </p>
                </div>
            </section>
        </main>
    );
}
