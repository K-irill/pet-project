import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import {
    renderWithTranslations,
} from '../../../../shared/lib/tests/renderWithTranslations/renderWithTranslations';

describe('Sidebar', () => {
    test('with only first params', () => {
        renderWithTranslations(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslations(<Sidebar />);
        const sidebarElem = screen.getByTestId('sidebar');
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(sidebarElem).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(sidebarElem).toHaveClass('collapsed');
    });
});
