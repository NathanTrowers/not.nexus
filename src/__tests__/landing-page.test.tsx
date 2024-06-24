import { render, screen } from '@testing-library/react';
import React from 'react';

import LandingPage from '@/app/ui/landing-page';

describe('LandingPage', () => {
    it('renders main view', () => {
        /** Act */
        render(<LandingPage />);
        
        /** Assert */
        const heading: HTMLElement = screen.getByRole('heading', {name: 'Main Menu'});
        const contactButton: HTMLElement = screen.getByRole('button', {name: 'Contact'});
        const softwareEngineeringButton: HTMLElement = screen.getByRole('button', {name: 'Software Engineering'});
        const artButton: HTMLElement = screen.getByRole('button', {name: 'Art'});
        const martialArtsButton: HTMLElement = screen.getByRole('button', {name: 'Martial Arts'});

        expect(heading).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();
        expect(softwareEngineeringButton).toBeInTheDocument();
        expect(artButton).toBeInTheDocument();
        expect(martialArtsButton).toBeInTheDocument();
    });

    it('renders contact view', () => {
        /** Arrange */
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => ['fadeOut invisible', jest.fn()])
            .mockImplementationOnce(() => ['fadeIn', jest.fn()])
            .mockImplementationOnce(() => ['invisible', jest.fn()])
            .mockImplementationOnce(() => [true, jest.fn()])
            .mockImplementationOnce(() => [false, jest.fn()]);

        /** Act */
        render(<LandingPage />);
        
        /** Assert */
        const heading: HTMLElement = screen.getByRole('heading', {name: 'Contact NOT'});
        const backButton: HTMLElement = screen.getByRole('button', {name: 'Back'});
        const gitHubButton: HTMLElement = screen.getByRole('link', {name: 'Link to Nathan\'s GitHub profile'});
        const linkedInButton: HTMLElement = screen.getByRole('link', {name: 'Link to Nathan\'s LinkedIn profile'});

        expect(heading).toBeInTheDocument();
        expect(backButton).toBeInTheDocument();
        expect(gitHubButton).toBeInTheDocument();
        expect(linkedInButton).toBeInTheDocument();
    });

    it('renders software engineer view', () => {
        /** Arrange */
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => ['fadeOut invisible', jest.fn()])
            .mockImplementationOnce(() => ['invisible', jest.fn()])
            .mockImplementationOnce(() => ['fadeIn', jest.fn()])
            .mockImplementationOnce(() => [false, jest.fn()])
            .mockImplementationOnce(() => [true, jest.fn()]);

        /** Act */
        render(<LandingPage />);
        
        /** Assert */
        const heading: HTMLElement = screen.getByRole('heading', {name: '! The Software Engineer'});
        const backButton: HTMLElement = screen.getByRole('button', {name: 'Back'});
        const projectsButton: HTMLElement = screen.getByRole('link', {name: 'Projects'});
        const hireNOTButton: HTMLElement = screen.getByRole('link', {name: 'Hire NOT'});

        expect(heading).toBeInTheDocument();
        expect(backButton).toBeInTheDocument();
        expect(projectsButton).toBeInTheDocument();
        expect(hireNOTButton).toBeInTheDocument();
    });
});
