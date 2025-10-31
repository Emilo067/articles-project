import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with first param', () => {
        expect(classNames('className')).toBe('className');
    });
    test('with additional params', () => {
        const expected = 'className class1 class2';
        expect(classNames(
            'className',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with mods params', () => {
        const expected = 'className class1 class2 hovered scrollable';
        const mods = {
            hovered: true,
            scrollable: true,
        };
        expect(classNames(
            'className',
            mods,
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with mods false params', () => {
        const expected = 'className class1 class2 hovered';
        const mods = {
            hovered: true,
            scrollable: false,
        };
        expect(classNames(
            'className',
            mods,
            ['class1', 'class2'],
        )).toBe(expected);
    });
    test('with mods undefined params', () => {
        const expected = 'className class1 class2';
        expect(classNames(
            'className',
            { hovered: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
