import { render, screen } from "@testing-library/react";

import FreelancerPitch from "@/app/ui/software/hire-not/freelancer-pitch";

describe('FreelancerPitch Page', () => {
    it('renders', () => {
        /** Act */
        render(
            <FreelancerPitch />  
        );

        /** Assert */
        const h1Heading: HTMLElement = screen.getByRole('heading', {name: 'Hire NOT'});
        const h2Heading: HTMLElement = screen.getByRole('heading', {name: 'Make Your Dream Web App a Reality!'});
        const message: HTMLElement = screen.getByRole('document');
        const list: HTMLElement = screen.getByRole('list');
        const linkedInLink: HTMLElement = screen.getByRole('link', {name: 'Link to Nathan\'s LinkedIn profile'});

        expect(h1Heading).toBeInTheDocument();
        expect(h2Heading).toBeInTheDocument();
        expect(message).toBeInTheDocument();
        expect(list).toBeInTheDocument();
        expect(linkedInLink).toBeInTheDocument();
    });
});
