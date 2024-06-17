import { render, screen } from '@testing-library/react';
import React from 'react';

import MobileCardContainer from '@/app/ui/software/projects/mobile-card-container';
import data from '../__mockData__/data';

describe('MobileCardContainer Component', () => {
    it('renders the first card', () => {
        /** Act */
        render(<MobileCardContainer />);

        /** Assert */
        const studyLogHeading: HTMLElement = screen.getByRole('heading', {name: `${data[0].title} Logo ${data[0].title}`});
        const studyLogLogo: HTMLElement = screen.getByAltText(`${data[0].title} Logo`);
        const studyLogDescription: HTMLElement = screen.getByText(`${data[0].description}`);
        const studyLogTechStack: HTMLElement = screen.getByText(`${data[0].techStack}`);
        const studyLogAppLink: HTMLElement = screen.getByRole('link', {name: 'Try Me!'});
        const studyLogRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[0].title} GitHub repository`});

        expect(studyLogHeading).toBeInTheDocument();
        expect(studyLogLogo).toBeInTheDocument();
        expect(studyLogDescription).toBeInTheDocument();
        expect(studyLogTechStack).toBeInTheDocument();
        expect(studyLogAppLink).toBeInTheDocument();
        expect(studyLogRepoLink).toBeInTheDocument();
    });

    it('renders the second card', () => {
        /** Arrange */
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => [2, jest.fn()])
            .mockImplementationOnce(() => [{
                one: 'invisible',
                two: 'visible',
                three: 'invisible',
                four: 'invisible',
            }, jest.fn()]);

        /** Act */
        render(<MobileCardContainer />);

        /** Assert */
        const comicCometHeading: HTMLElement = screen.getByRole('heading', {name: `${data[1].title} Logo ${data[1].title}`});
        const comicCometLogo: HTMLElement = screen.getByAltText(`${data[1].title} Logo`);
        const comicCometDescription: HTMLElement = screen.getByText(`${data[1].description}`);
        const comicCometTechStack: HTMLElement = screen.getByText(`${data[1].techStack}`);
        const comicCometAppLink: HTMLElement = screen.getByRole('link', {name: 'Try Me!'});
        const comicCometRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[1].title} GitHub repository`});
        
        expect(comicCometHeading).toBeInTheDocument();
        expect(comicCometLogo).toBeInTheDocument();
        expect(comicCometDescription).toBeInTheDocument();
        expect(comicCometTechStack).toBeInTheDocument();
        expect(comicCometAppLink).toBeInTheDocument();
        expect(comicCometRepoLink).toBeInTheDocument();
    });

    it('renders the third card', () => {
        /** Arrange */
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => [3, jest.fn()])
            .mockImplementationOnce(() => [{
                one: 'invisible',
                two: 'invisible',
                three: 'visible',
                four: 'invisible',
            }, jest.fn()]);

        /** Act */
        render(<MobileCardContainer />);

        const androidAceHeading: HTMLElement = screen.getByRole('heading', {name: `${data[2].title} Logo ${data[2].title}`});
        const androidAceLogo: HTMLElement = screen.getByAltText(`${data[2].title} Logo`);
        const androidAceDescription: HTMLElement = screen.getByText(`${data[2].description}`);
        const androidAceTechStack: HTMLElement = screen.getByText(`${data[2].techStack}`);
        const androidAceAppLink: HTMLElement = screen.getByRole('link', {name: 'Try Me!'});
        const androidAceRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[2].title} GitHub repository`});
        
        expect(androidAceHeading).toBeInTheDocument();
        expect(androidAceLogo).toBeInTheDocument();
        expect(androidAceDescription).toBeInTheDocument();
        expect(androidAceTechStack).toBeInTheDocument();
        expect(androidAceAppLink).toBeInTheDocument();
        expect(androidAceRepoLink).toBeInTheDocument();
    });

    it('renders the fourth card', () => {
        /** Arrange */
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => [4, jest.fn()])
            .mockImplementationOnce(() => [{
                one: 'invisible',
                two: 'invisible',
                three: 'invisible',
                four: 'visible',
            }, jest.fn()]);

        /** Act */
        render(<MobileCardContainer />);

        /** Assert */
        const notHeading: HTMLElement = screen.getByRole('heading', {name: `${data[3].title} Logo ${data[3].title}`});
        const notLogo: HTMLElement = screen.getByAltText(`${data[3].title} Logo`);
        const notDescription: HTMLElement = screen.getByText(`${data[3].description}`);
        const notTechStack: HTMLElement = screen.getByText(`${data[3].techStack}`);
        const notAppLink: HTMLElement = screen.getByRole('link', {name: 'Try Me!'});
        const notRepoLink: HTMLElement = screen.getByRole('link', {name: `Link to the ${data[3].title} GitHub repository`});
        
        expect(notHeading).toBeInTheDocument();
        expect(notLogo).toBeInTheDocument();
        expect(notDescription).toBeInTheDocument();
        expect(notTechStack).toBeInTheDocument();
        expect(notAppLink).toBeInTheDocument();
        expect(notRepoLink).toBeInTheDocument();
    });
});
