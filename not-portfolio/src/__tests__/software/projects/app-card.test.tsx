import { render, screen } from '@testing-library/react';

import AppCard from '@/app/ui/software/projects/app-card';

describe('AppCard Component', () => {
    it('renders', () => {
        /** Arrange */ 
        const data: any = {
            title:'LinkedIn Clone',
            logo:'/LI-In-Bug.png',
            description:'The name says it all!',
            techStack:'MERN (Mongo DB, Express.js, React.js, Node.js)',
            appLink:'https://liclone.not.com/',
            repoLink:'https://github.com/NathanTrowers/LinkedInClone',
        };

        /** Act */
        render(
            <AppCard 
                title={data.title}
                logo={data.logo}
                description={data.description}
                techStack={data.techStack}
                appLink={data.appLink}
                repoLink={data.repoLink}
            />
        )

        /** Assert */
        const heading: HTMLElement = screen.getByRole('heading', {name: `${data.title} Logo ${data.title}`});
        const logo: HTMLElement = screen.getByAltText(`${data.title} Logo`);
        const description: HTMLElement = screen.getByText(`${data.description}`);
        const techStack: HTMLElement = screen.getByText(`${data.techStack}`);
        const appLink: HTMLElement = screen.getByRole('link', {name: 'Try Me!'});
        const repoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data.title} GitHub repository`});
        
        expect(heading).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(techStack).toBeInTheDocument();
        expect(appLink).toBeInTheDocument();
        expect(repoLink).toBeInTheDocument();
    });
});
