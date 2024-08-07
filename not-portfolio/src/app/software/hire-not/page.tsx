import { Metadata } from 'next';

import FullscreenButton from '@/app/ui/fullscreen-button';
import FreelancerPitch from '@/app/ui/software/hire-not/freelancer-pitch';


export const metadata: Metadata = {
    title: 'Hire NOT',
    description: "NOT MVP Service Offering",
    keywords: ['Nathan Trowers', 'Hire NOT', 'MVP', 'Fiverr', 'Email'],
    authors: [{name: 'Nathan Trowers'}],
};

export default async function Page() {
    return (
        <>
            <FreelancerPitch />
            <FullscreenButton />
        </>
    );
}
