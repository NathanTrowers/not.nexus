import { render, screen } from '@testing-library/react';

import NotBang from '@/app/ui/not-bang';

describe('NotBang Component', () => {
    it('renders',  () => {
        /** Act */
        render(
            <NotBang />
        );

        /** Assert*/
        const exclamationMark: HTMLElement = screen.getByText('!');

        expect(exclamationMark).toBeInTheDocument();
    });
});
