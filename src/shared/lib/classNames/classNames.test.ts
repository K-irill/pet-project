import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods class', () => {
        const expected = 'someClass class1 class2 hovered light';
        expect(classNames(
            'someClass',
            { hovered: true, light: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods false class', () => {
        const expected = 'someClass class1 class2 light';
        expect(classNames(
            'someClass',
            { hovered: false, light: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods undefined class', () => {
        const expected = 'someClass class1 class2 light';
        expect(classNames(
            'someClass',
            { hovered: undefined, light: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
