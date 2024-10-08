import { render, screen } from '@testing-library/react';

import FullscreenButton from '@/app/ui/fullscreen-button';

describe('Fullscreen Button', () => {
    it('renders', () => {
        /** Act */
        render(
            <FullscreenButton />
        );

        /** Assert */
        const fullScreenButton: HTMLElement = screen.getByRole('button');

        expect(fullScreenButton).toBeInTheDocument();
    });
});
