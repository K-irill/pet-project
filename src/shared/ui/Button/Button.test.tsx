import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('with only first params', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('with clear class', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
