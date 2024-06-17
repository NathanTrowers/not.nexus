import { Metadata } from "next";

import FullscreenButton from '@/app/ui/fullscreen-button';
import SoftwareProjects from "@/app/ui/software/software-projects";

export const metadata: Metadata = {
    title: 'App Portfolio',
    description: "App Portfolio of Nathan Trowers",
    keywords: ['Nathan Trowers', 'Study Log', 'ComicComet',
        'AndroidAce', 'App', 'Portfolio',
        'tech stack', 'Java', 'JavaScript',
        'TypeScript', 'MongoDB', 'MERN',
        'Spring Boot', 'Angular', 'React',
        'Next.js'],
    authors: [{name: 'Nathan Trowers'}],
};

export default async function Page() {
    return (
        <>
            <SoftwareProjects />
            <FullscreenButton />
        </>
    );
}
