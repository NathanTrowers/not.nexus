'use client';

import Image from 'next/image';

import styles from '@/app/ui/_styles/fullscreen-button.module.css'
import { useEffect, useState } from 'react';

export default function FullscreenButton() {
    const [invisible, setInvisible] = useState('');

    useEffect(() => {
        function exitFullScreen(event: any) {
            if (document.fullscreenElement === null) {
                setInvisible('');
            }
        }
        window.addEventListener('fullscreenchange', exitFullScreen);

        return () => window.removeEventListener('fullscreenchange', exitFullScreen);
    },[]);
    
    const onClickGoFullScreen = () => {
        try {
            document.querySelector('body')?.requestFullscreen();
        } catch(error: any) {
            console.log('An error occurred. not.com is unable to go fullscreen.');
        } finally {
            setInvisible(`${styles.invisible}`);
        }
    }

    return (
        <button 
            className={`${styles.fullscreenButton} ${invisible}`}
            onClick={onClickGoFullScreen}
            data-test='fullscreen-button'
        >
            <Image
                className={styles.fullscreenButtonIcon}
                width='32'
                height='32'
                src='/official-fullscreen-icon.svg'
                alt='fullscreen-icon'
            />
        </button>
    );
}
