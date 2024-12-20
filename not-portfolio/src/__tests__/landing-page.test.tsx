import { render, screen } from '@testing-library/react';
import React from 'react';

import LandingPage from '@/ui/landing-page';

describe('LandingPage', () => {
    it('renders main view', () => {
        /** Act */
        render(<LandingPage />);
        
        /** Assert */
        const heading: HTMLElement = screen.getByRole('heading', {name: 'Main Menu'});
        const contactButton: HTMLElement = screen.getByRole('button', {name: 'Contact'});
        const hireNotButton: HTMLElement = screen.getByRole('link', {name: 'Hire NOT'});
        const artButton: HTMLElement = screen.getByRole('button', {name: 'Art'});
        const martialArtsButton: HTMLElement = screen.getByRole('button', {name: 'Martial Arts'});

        expect(heading).toBeInTheDocument();
        expect(contactButton).toBeInTheDocument();
        expect(hireNotButton).toBeInTheDocument();
        expect(artButton).toBeInTheDocument();
        expect(martialArtsButton).toBeInTheDocument();
    });

    it('renders contact view', () => {
        /** Arrange */
        jest.spyOn(React, 'useState')
            .mockImplementationOnce(() => ['fadeOut invisible', jest.fn()])
            .mockImplementationOnce(() => ['fadeIn', jest.fn()])
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
});
