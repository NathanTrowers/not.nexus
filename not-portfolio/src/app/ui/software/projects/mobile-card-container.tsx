'use client';

import Image from 'next/image';
import { useState } from 'react';

import AppCard from '@/app/ui/software/projects/app-card';
import stylesMobile from '@/app/ui/software/projects/_styles/mobile-card-container.module.css';
import stylesProjects from '@/app/ui/software/projects/_styles/software-projects.module.css';

export default function MobileCardContainer() {
    const [cardIndex, setCardIndex] = useState(1);
    const [cardClass, setCardClass] = useState({
        one: `${stylesMobile.visible}`,
        two: `${stylesMobile.invisible}`,
        three: `${stylesMobile.invisible}`,
        four: `${stylesMobile.invisible}`,
    });
    const [dotClass, setDotClass] =  useState({
        one: `${stylesMobile.activeDot}`,
        two: `${stylesMobile.dot}`,
        three: `${stylesMobile.dot}`,
        four: `${stylesMobile.dot}`,
    });

    const showCard = (cardIndex: number): void => {
        switch(cardIndex) {
            case 1:
                setCardClass({
                    one: `${stylesMobile.visible}`,
                    two: `${stylesMobile.invisible}`,
                    three: `${stylesMobile.invisible}`,
                    four: `${stylesMobile.invisible}`,
                });
                setDotClass({
                    one: `${stylesMobile.activeDot}`,
                    two: `${stylesMobile.dot}`,
                    three: `${stylesMobile.dot}`,
                    four: `${stylesMobile.dot}`,
                });
                break;
            case 2:
                setCardClass({
                    one: `${stylesMobile.invisible}`,
                    two: `${stylesMobile.visible}`,
                    three: `${stylesMobile.invisible}`,
                    four: `${stylesMobile.invisible}`,
                });
                setDotClass({
                    one: `${stylesMobile.dot}`,
                    two: `${stylesMobile.activeDot}`,
                    three: `${stylesMobile.dot}`,
                    four: `${stylesMobile.dot}`,
                });
                break;
            case 3:
                setCardClass({
                    one: `${stylesMobile.invisible}`,
                    two: `${stylesMobile.invisible}`,
                    three: `${stylesMobile.visible}`,
                    four: `${stylesMobile.invisible}`,
                });
                setDotClass({
                    one: `${stylesMobile.dot}`,
                    two: `${stylesMobile.dot}`,
                    three: `${stylesMobile.activeDot}`,
                    four: `${stylesMobile.dot}`,
                });
                break;
            default:
                setCardClass({
                    one: `${stylesMobile.invisible}`,
                    two: `${stylesMobile.invisible}`,
                    three: `${stylesMobile.invisible}`,
                    four: `${stylesMobile.visible}`,
                });
                setDotClass({
                    one: `${stylesMobile.dot}`,
                    two: `${stylesMobile.dot}`,
                    three: `${stylesMobile.dot}`,
                    four: `${stylesMobile.activeDot}`,
                });
        }
    }

    const changeCard = (cardNumber: number): void => {
        let newIndex: number = cardIndex + cardNumber;
        if (newIndex > 4) {
            newIndex = 1;
        }
        if (newIndex < 1) {
            newIndex = 4;
        }
        setCardIndex(newIndex);
        showCard(newIndex);
    }

    const displayCard = (cardNumber: number ): void => {
        setCardIndex(cardNumber);
        showCard(cardNumber);
    }

    const goToPreviousCard = changeCard.bind(null, -1);
    const goToNextCard = changeCard.bind(null, 1);
    const goToFirstCard = displayCard.bind(null, 1);
    const goToSecondCard = displayCard.bind(null, 2);
    const goToThirdCard = displayCard.bind(null, 3);
    const goToFourthCard = displayCard.bind(null, 4);

    const FADE_IN_CLASS: string =  'fadeIn';

    return (
        <div className={stylesProjects.visibleMobile}>
            <aside aria-label='projectTypeButtons' className={`${stylesMobile.projectTypeButtonContainer} ${FADE_IN_CLASS}`}>
                <button className={`${stylesProjects.activeButton} ${stylesMobile.personalButton}`}>Personal</button>
                <span className={stylesMobile.lockedButtonContainer} >
                    <button className={stylesMobile.lockedButton} disabled>Professional</button>
                    <Image
                        width='67'
                        height='37'
                        src='/official-lock-reverse.svg'
                        alt=''
                    />
                </span>
            </aside>
            <section className={`${stylesMobile.projectsContainerMobile} ${FADE_IN_CLASS}`}>
                { cardIndex === 1 && 
                    <AppCard
                        title='Study Log'
                        logo='/project_logos/official-study-log-logo.svg'
                        description='Track and review your study habits!'
                        techStack='MERN Stack (JavaScript)'
                        appLink='https://studylog.not.nexus/'
                        repoLink='https://github.com/NathanTrowers/study-log'
                        invisible={cardClass.one}
                    />
                }
                { cardIndex === 2 && 
                    <AppCard
                        title='ComicComet'
                        logo='/project_logos/official-comic-comet-logo.svg'
                        description='Shop at a fake online comic book store!'
                        techStack='Spring Boot (Java) and Angular'
                        appLink='https://comiccomet.not.nexus/'
                        repoLink='https://github.com/NathanTrowers/comic-comet'
                        invisible={cardClass.two}
                    />
                }
                { cardIndex === 3 && 
                    <AppCard
                        title='AndroidAce'
                        logo='/project_logos/official-android-ace-logo.svg'
                        description='Take a quiz on Android app development!'
                        techStack='Java with Android SDK'
                        repoLink='https://github.com/NathanTrowers/android-ace'
                        invisible={cardClass.three}
                    />
                }
                { cardIndex === 4 && 
                    <AppCard
                        title='not.nexus (this website)'
                        logo='/project_logos/official-not-logo.svg'
                        description='Portfolio Website of Nathan O. Trowers.'
                        techStack='Next.js (TypeScript)'
                        appLink='https://not.nexus/'
                        repoLink='https://github.com/NathanTrowers/not.nexus'
                        invisible={cardClass.four}
                    />
                }
            </section>
            <aside aria-label='projectCardDots' className={`${stylesMobile.dotsContainer} ${FADE_IN_CLASS}`}>
                <span 
                    className={dotClass.one}
                    onClick={goToFirstCard}
                    tabIndex={0}
                    data-test='card-dot-one'
                ></span>
                <span 
                    className={dotClass.two}
                    onClick={goToSecondCard}
                    tabIndex={0}
                    data-test='card-dot-two'
                ></span>
                <span 
                    className={dotClass.three}
                    onClick={goToThirdCard}
                    tabIndex={0}
                    data-test='card-dot-three'
                ></span>
                <span 
                    className={dotClass.four}
                    onClick={goToFourthCard}
                    tabIndex={0}
                    data-test='card-dot-four'
                ></span>
            </aside>
            <a 
                className={`${stylesMobile.prev} ${FADE_IN_CLASS}`}
                onClick={goToPreviousCard}
                tabIndex={0}
                data-test='prev-button'
            >&#10094;</a>
            <a 
                className={`${stylesMobile.next} ${FADE_IN_CLASS}`}
                onClick={goToNextCard}
                tabIndex={0}
                data-test='next-button'
            >&#10095;</a>
        </div>
    );
}
