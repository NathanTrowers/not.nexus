import { render, screen } from "@testing-library/react";

import Header from "@/app/ui/software/header";

describe ('Header Component', () => {
    it('renders with notBang set to true', () => {
        /** Arrange */
        const heading: string = 'Example Title!';

        /** Act */
        render(
            <Header 
                heading={heading}
                notBang={true}
            />
        );

        /** Assert */
        const h1Heading: HTMLElement = screen.getByRole('heading', {name: `! ${heading}`});
        const homeLink: HTMLElement = screen.getByRole('link', {name: 'Link to the Home Page'});

        expect(h1Heading).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
    });
    
    it('renders with notBang unset', () => {
        /** Arrange */
        const heading: string = 'Example Title!';

        /** Act */
        render(
            <Header 
                heading={heading}
            />
        );

        /** Assert */
        const h1Heading: HTMLElement = screen.getByRole('heading', {name: `${heading}`});
        const homeLink: HTMLElement = screen.getByRole('link', {name: 'Link to the Home Page'});

        expect(h1Heading).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
    });

        
    it('renders when notBang is set to "false"', () => {
        /** Arrange */
        const heading: string = 'Example Title!';

        /** Act */
        render(
            <Header 
                heading={heading}
                notBang={false}
            />
        );

        /** Assert */
        const h1Heading: HTMLElement = screen.getByRole('heading', {name: `${heading}`});
        const homeLink: HTMLElement = screen.getByRole('link', {name: 'Link to the Home Page'});

        expect(h1Heading).toBeInTheDocument();
        expect(homeLink).toBeInTheDocument();
    });
});
