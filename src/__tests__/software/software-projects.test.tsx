import { render, screen } from '@testing-library/react';

import SoftwareProjects from '@/app/ui/software/software-projects';
import data from './__mockData__/data';

describe('SoftwareProjects Page', () => {
    it('renders', () => {
        /** Act */
        render(<SoftwareProjects />);

        /** Assert */
        const h1Heading: HTMLElement = screen.getByRole('heading', {name: '! My App Portfolio'});

        const studyLogHeading: HTMLElement = screen.getAllByRole('heading', {name: `${data[0].title} Logo ${data[0].title}`})[0];
        const studyLogLogo: HTMLElement = screen.getAllByAltText(`${data[0].title} Logo`)[0];
        const studyLogDescription: HTMLElement = screen.getAllByText(`${data[0].description}`)[0];
        const studyLogTechStack: HTMLElement = screen.getAllByText(`${data[0].techStack}`)[0];
        const studyLogAppLink: HTMLElement = screen.getAllByRole('link', {name: 'Try Me!'})[0];
        const studyLogRepoLink: HTMLElement = screen.getAllByRole('link', {name: `Link to the ${data[0].title} GitHub repository`})[0];

        const comicCometHeading: HTMLElement = screen.getByRole('heading', {name: `${data[1].title} Logo ${data[1].title}`});
        const comicCometLogo: HTMLElement = screen.getByAltText(`${data[1].title} Logo`);
        const comicCometDescription: HTMLElement = screen.getByText(`${data[1].description}`);
        const comicCometTechStack: HTMLElement = screen.getByText(`${data[1].techStack}`);
        const comicCometAppLink: HTMLElement = screen.getAllByRole('link', {name: 'Try Me!'})[1];
        const comicCometRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[1].title} GitHub repository`});
        
        const androidAceHeading: HTMLElement = screen.getByRole('heading', {name: `${data[2].title} Logo ${data[2].title}`});
        const androidAceLogo: HTMLElement = screen.getByAltText(`${data[2].title} Logo`);
        const androidAceDescription: HTMLElement = screen.getByText(`${data[2].description}`);
        const androidAceTechStack: HTMLElement = screen.getByText(`${data[2].techStack}`);
        const androidAceAppLink: HTMLElement = screen.getAllByRole('link', {name: 'Try Me!'})[2];
        const androidAceRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[2].title} GitHub repository`});
        
        const notHeading: HTMLElement = screen.getByRole('heading', {name: `${data[3].title} Logo ${data[3].title}`});
        const notLogo: HTMLElement = screen.getByAltText(`${data[3].title} Logo`);
        const notDescription: HTMLElement = screen.getByText(`${data[3].description}`);
        const notTechStack: HTMLElement = screen.getByText(`${data[3].techStack}`);
        const notAppLink: HTMLElement = screen.getAllByRole('link', {name: 'Try Me!'})[3];
        const notRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[3].title} GitHub repository`});
        
        expect(h1Heading).toBeInTheDocument();

        expect(studyLogHeading).toBeInTheDocument();
        expect(studyLogLogo).toBeInTheDocument();
        expect(studyLogDescription).toBeInTheDocument();
        expect(studyLogTechStack).toBeInTheDocument();
        expect(studyLogAppLink).toBeInTheDocument();
        expect(studyLogRepoLink).toBeInTheDocument();
        
        expect(comicCometHeading).toBeInTheDocument();
        expect(comicCometLogo).toBeInTheDocument();
        expect(comicCometDescription).toBeInTheDocument();
        expect(comicCometTechStack).toBeInTheDocument();
        expect(comicCometAppLink).toBeInTheDocument();
        expect(comicCometRepoLink).toBeInTheDocument();
        
        expect(androidAceHeading).toBeInTheDocument();
        expect(androidAceLogo).toBeInTheDocument();
        expect(androidAceDescription).toBeInTheDocument();
        expect(androidAceTechStack).toBeInTheDocument();
        expect(androidAceAppLink).toBeInTheDocument();
        expect(androidAceRepoLink).toBeInTheDocument();
        
        expect(notHeading).toBeInTheDocument();
        expect(notLogo).toBeInTheDocument();
        expect(notDescription).toBeInTheDocument();
        expect(notTechStack).toBeInTheDocument();
        expect(notAppLink).toBeInTheDocument();
        expect(notRepoLink).toBeInTheDocument();
    });
});
