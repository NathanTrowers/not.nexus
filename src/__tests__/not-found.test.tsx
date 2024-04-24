import { render, screen } from '@testing-library/react';

import NotFound from '@/app/not-found';

describe('404 Page', () => {
    it('renders', () => {
        /** Act */
        render(<NotFound />);

        /** Assert */
        const h1Heading: HTMLElement = screen.getByRole('heading', {name: '404 NOT FOUND'});
        const h2Heading: HTMLElement = screen.getByRole('heading', {name: '(no pun intended)'});
        const paragraph: HTMLElement = screen.getByText('The URL you entered is either mistyped or does not exist.');

        expect(h1Heading).toBeInTheDocument();
        expect(h2Heading).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
    });
});
